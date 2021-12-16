import React, { Component } from "react";
import APIHandler from "../Api/APIHandler";
import { Link } from "react-router-dom";
import axios from "axios";

export default class BrandDetails extends Component {
  state = {
    branddetails: null,
  };

  fetchBrandDetails = async () => {
    const currentBrandId = this.props.match.params.id;

    const res = await APIHandler.get(
      "http://localhost:9000/brand/" + currentBrandId
    );

    this.setState({
      branddetails: res.data,
    });
  };

  componentDidMount() {
    this.fetchBrandDetails();
  }

  render() {
    const { branddetails } = this.state;
    console.log("in render");
    console.log(branddetails);
    return (
      <div className="container text-center">
        <div className="d-flex">
          <img
            className="mx-auto"
            style={{ maxHeight: "40vh" }}
            src={branddetails?.images}
            alt=""
          />
        </div>
        <h1 className="BrandDetails">{branddetails?.title}</h1>
        <p className="BrandDetails">{branddetails?.description}</p>
      </div>
    );
  }
}
