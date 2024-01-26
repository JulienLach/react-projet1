import React from "react";
import PropTypes from "prop-types";
import { Button } from "./Button";

const Header = ({ title }) => {
  const onClick = () => {
    console.log("click");
  };

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="Ajouter" onClick={onClick}></Button>
      {/* Utilisation du composant bouton avec des props differentes les props sont définie dans la page du composant */}
      <Button color="red" text="Test"></Button>
    </header>
  );
};

Header.defaultProps = {
  title: "ToDo List React",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// CSS directement dans le JavaScript
// const headingStyle = {
//   color: "blue",
// };

export default Header;
