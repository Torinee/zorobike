import React from "react";
import { createPortal } from "react-dom";

const Portal: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const domElement = document.getElementById("portal");

  if (domElement) {
    return createPortal(children, domElement);
  } else return null;
};
export default Portal;