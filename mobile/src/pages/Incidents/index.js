import React, { useEffect, useState } from "react";
import styles from "./styles";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { View, FlatList, Image, Text, TouchableOpacity } from "react-native";

import api from "../../services/api";

import logoImg from "../../assets/logo.png";

export default function Incidents() {
  const [incidents, setIncidents] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  // const [scroll_refresh, setScrollRefresh] = useState(false);

  const navigation = useNavigation();

  function NavigateToDetail(incident) {
    navigation.navigate("Detail", { incident });
  }
  // function refreshIncidents() {
  //   setScrollRefresh(true);
  //   setPage(1);
  //   setIncidents([]);
  //   loadIncidents();
  // }

  async function loadIncidents() {
    if (loading) {
      return;
    }
    // && !scroll_refresh
    if (total > 0 && incidents.length === total) {
      return;
    }

    setLoading(true);

    const resp = await api.get("incidents", {
      params: { page }
    });

    setIncidents([...incidents, ...resp.data]);
    setTotal(resp.headers["x-total-count"]);
    setPage(page + 1);
    setLoading(false);
    // setScrollRefresh(false);
  }

  useEffect(() => {
    loadIncidents();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>{total} casos</Text>
        </Text>
      </View>
      <Text style={styles.title}>Bem-Vindo!</Text>
      <Text style={styles.description}>
        Escolha um dos casos abaixo e salve o dia.
      </Text>
      <FlatList
        data={incidents}
        style={styles.incidentList}
        keyExtractor={incident => String(incident.id)}
        // refreshing={scroll_refresh}
        // onRefresh={refreshIncidents}
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.2}
        // showsVerticalScrollIndicator={false}
        renderItem={({ item: incident }) => (
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>ONG:</Text>
            <Text style={styles.incidentValue}>{incident.name}</Text>

            <Text style={styles.incidentProperty}>CASO:</Text>
            <Text style={styles.incidentValue}>{incident.title}</Text>

            <Text style={styles.incidentProperty}>VALOR:</Text>
            <Text style={styles.incidentValue}>
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
              }).format(incident.value)}
            </Text>

            <TouchableOpacity
              style={styles.detailsButton}
              onPress={() => NavigateToDetail(incident)}
            >
              <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
              <Feather name="arrow-right" size={16} color="#E02041" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
