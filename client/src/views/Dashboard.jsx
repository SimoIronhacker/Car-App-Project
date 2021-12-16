import React, { Component } from "react";
import { Link } from "react-router-dom";
import APIHandler from "../Api/APIHandler";
import { Card, Button, Form } from "react-bootstrap";

export default class Dashboard extends Component {
  state = {
    brand: [],
  };

  fetchBrand = async () => {
    const brandId = this.props.match.params.id;

    const res = await APIHandler.get("http://localhost:9000/brand");

    this.setState({
      brand: res.data,
    });
  };

 

  handleClick = async (e, id) => {
    //  e.preventDefault();
  

    try {
      await APIHandler.delete(`http://localhost:9000/brand/${id}`);
      this.fetchBrand();
    } catch (err) {
      console.error(err);
    }
  };

  componentDidMount() {
    this.fetchBrand();
  }

  render() {
    const { brand } = this.state;

    return (
      <div className="container d-flex flex-column">
        <h1 className="brandDasboard">BrandDashboard</h1>
       
        {brand.map((brand, i) => (
          <Card className="my-2 p-4" key={i}>
            <Card.Title>{brand.title}</Card.Title>
            <div className="d-flex">
              <Link
                to={{
                  pathname: "/dashboard/update-brand/" + brand._id,
                  id: brand._id,
                }}
              >
                <Button className="mt-2 mx-2"> Update brand </Button>
              </Link>

              <Button
                variant="danger"
                onClick={(e) => this.handleClick(e, brand._id)}
                className="mt-2 mx-2"
              >
                {" "}
                Delete brand{" "}
              </Button>
            </div>
          </Card>
        ))}

        
      </div>
    );
  }
}
