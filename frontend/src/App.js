// import React, { useState } from "react";
import React, { useState, useEffect } from "react";
import "./global.css";
import Routes from "./routes";

function App() {
  const [dm, setDm] = useState(getLocalMode());

  useEffect(() => {
    localStorage.setItem("darkMode-local", JSON.stringify(dm));
  }, [dm]);

  function getLocalMode() {
    const isReturningUser = "darkMode-local" in localStorage;
    const savedMode = JSON.parse(localStorage.getItem("darkMode-local"));
    const userPrefersDark = getPrefColorScheme();
    if (isReturningUser) {
      return savedMode;
    } else if (userPrefersDark) {
      return true;
    } else {
      return false;
    }
  }
  function getPrefColorScheme() {
    if (!window.matchMedia) return;
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  return (
    <div className={dm ? "dark-mode" : "light-mode"}>
      <span className="toggle">
        <input
          checked={dm}
          onChange={() => setDm((p) => !p)}
          type="checkbox"
          className="checkbox"
          id="checkbox"
        />
        <label htmlFor="checkbox" />
      </span>
      <Routes />
    </div>
  );
}

export default App;
