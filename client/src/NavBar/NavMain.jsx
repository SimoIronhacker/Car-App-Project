import React from "react";
import { Link } from "react-router-dom";
import APIHandler from "../Api/APIHandler";
import bootstrap from "react-bootstrap";
import { Nav, Navbar, Container, Style } from "react-bootstrap";

export default function NavMain() {
  return (
   
    <Navbar bg="primary" variant="dark">
      <Container>
        <Link
          style={{ "textdecoration": "none" }}
          className="p-3 mb-2 bg-primary text-white home"
          to="/"
        >
          {" "}
          Home{" "}
        </Link>

        <Link
          style={{ "textdecoration": "none" }}
          className="p-3 mb-2 bg-primary text-white brands"
          to="/brand"
        >
          {" "}
          All Brands{" "}
        </Link>
        <Link
          style={{ "textdecoration": "none" }}
          className="p-3 mb-2 bg-primary text-white chiron"
          to="/brand/chiron"
        >
          {" "}
          Chiron{" "}
        </Link>
        <Link
          style={{ "textdecoration": "none" }}
          className="p-3 mb-2 bg-primary text-white one off"
          to="/brand/oneoff"
        >
          {" "}
          One Off{" "}
        </Link>
        <Link
          style={{ "textdecoration": "none" }}
          className="p-3 mb-2 bg-primary text-white concept car"
          to="/brand/conceptcar"
        >
          {" "}
          Concept Car{" "}
        </Link>
        <Link
          style={{ "textdecoration": "none" }}
          className="p-3 mb-2 bg-primary text-white veyron"
          to="/brand/veyron"
        >
          {" "}
          Veyron{" "}
        </Link>
      </Container>
    </Navbar>
  );
}
