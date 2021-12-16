import React, { Component } from "react";
import APIHandler from "../Api/APIHandler";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import BrandDetails from "../views/BrandDetails";
import home from "../views/Components/home.css";

export default class Brands extends Component {
  state = {
    brands: [],
  };

  fetchBrands = async () => {
    const currentCategory = this.props.match.params.category;
    console.log(this.props.match.params.category);

    let res;

    if (currentCategory === undefined) {
      console.log("there is no a category");

      res = await APIHandler.get("http://localhost:9000/brand");
    } else {
      console.log("there is a category");

      res = await APIHandler.get("http://localhost:9000/brand", {
        params: {
          category: currentCategory,
        },
      });
    }

    this.setState({
      brands: res.data,
    });
  };

  componentDidMount() {
    this.fetchBrands();
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.fetchBrands();
    }
  }

  render() {
    const { brands } = this.state;

    return (
      <div className="container">
        <h1 className="brand">Brands</h1>
        <div className="row">
          {brands.map(
            (brand, i) => (
              (<Brands brand={brand} />),
              console.log("title test", brand),
              (
                <div className="d-flex align-items-center justify-content-center borderGrey">
                  <ul className="ul">
                    <li className="item" key={i}>
                      <Link to={"/brand/details/" + brand._id}>
                        <span>
                          {brand.title} <br />{" "}
                          <img
                            src={brand.image}
                            style={{ width: "400px", float: "left" }}
                          />
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              )
            )
          )}
        </div>
      </div>
    );
  }
}


