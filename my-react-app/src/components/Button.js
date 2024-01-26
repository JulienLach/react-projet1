import React from "react";
import PropTypes from "prop-types";

export const Button = ({ color, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      // Je définie la propriété onClick dans mon composant mais sans définir ce qu'elle fait, je défini ce qu'elle fait dans mon Header.js
      style={{ backgroundColor: color }}
      className="btn"
    >
      {text}
    </button>
  );
};

// Définir les props par défaut pour quand je créer un bouton avant de remplir les props que je veux
Button.defaultProps = {
  color: "steelblue",
};

// Définir les types de props que va prendre mon composant
Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};
