import React from "react";
import styles from "./styles.module.css";

export const Responsive = ({ children }) => {
  return <div className={styles.containerResponsive}>{children}</div>;
};
