import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

export default function Navbar() {
  return (
    <header className="header">
      <h1>This is the header</h1>
      <nav>
        <Link to="/">
          <Button variant="contained">Default</Button>
        </Link>
        <Link to="/landing">
          <Button variant="contained" color="secondary">
            Landing
          </Button>
        </Link>
      </nav>
    </header>
  );
}
