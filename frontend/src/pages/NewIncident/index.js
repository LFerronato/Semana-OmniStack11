import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import api from "../../services/api";
import "./styles.css";

import { FiArrowLeft } from "react-icons/fi";
import logoImg from "../../assets/logo.svg";

export default function NewIncident() {
  const [title, setTitle] = useState("");
  const [description, setDesc] = useState("");
  const [value, setValue] = useState("");
  const ong_id = localStorage.getItem("ongId");

  const history = useHistory();

  async function handleNewIncident(e) {
    e.preventDefault();

    const data = { title, description, value };

    try {
      const resp = await api.post("incidents", data, {
        headers: { Authorization: ong_id }
      });
      alert(`Caso ${resp.data.id} criado com sucesso!`);
      history.push("/profile");
    } catch (err) {
      alert(`Erro ao cadastrar, tente novamente!`);
    }
  }
  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />

          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </p>
          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar
          </Link>
        </section>
        <form onSubmit={handleNewIncident}>
          <input
            placeholder="Título do caso"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Descrição"
            value={description}
            onChange={e => setDesc(e.target.value)}
          />
          <input
            placeholder="Valor em reais"
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
