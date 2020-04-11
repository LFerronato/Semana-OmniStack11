import React from "react";
import "./styles.css";

export default function DarkMode() {
  return (
    <div class="toggle">
      <input id="switch" type="checkbox" name="theme" />
      <label for="switch">Toggle</label>
    </div>
  );
}
