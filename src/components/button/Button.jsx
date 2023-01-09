import React from "react";
import "./button.css";
import { Link } from "react-router-dom";

const STYLES = ["btn--primary", "btn--outline"];

export const Button = ({
  children,
  type,
  onclick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES(0);
};
