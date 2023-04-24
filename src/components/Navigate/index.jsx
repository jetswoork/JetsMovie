import React from "react";
import styles from "./styles.module.css";

export const Navigate = ({ children }) => {
  return <div className={styles.navigate}>{children}</div>;
};
