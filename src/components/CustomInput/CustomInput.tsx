import React from "react";
import styles from "./styles.module.scss";

/* IOuterProps
-------------------------------------------------------------------------*/

interface IOuterProps {
  value: number;
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
}

/* Template
-------------------------------------------------------------------------*/

export const CustomInput: React.FC<IOuterProps> = ({value, onChange}) => {
  // Render

  return (
    <input
      type="number"
      placeholder="Your fav number"
      value={value}
      className={styles.CustomInput}
      onChange={onChange}
    />
  );
};
