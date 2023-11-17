import { React, useState } from "react";

import styles from "./Search.module.css";

function Search() {
  return (
    <div className={styles.container}>
      <input
        type="text"
        className={styles.textbox}
        placeholder="Search data..."
      //   value={value}
      //   onChange={(e) => {
      //     setValue(e.target.value);
      //   }}
      />
    </div>
  );
}

export default Search;
