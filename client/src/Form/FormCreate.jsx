import React, { Component } from "react";
import APIHandler from "../Api/APIHandler";
import { Form, Button, FormGroup, FormControl, ControlLabel, Grid, FormSelect,} from "react-bootstrap";


export default class FormCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      category: null,
      categories: ["chiron", "one off", "concept car", "veyron"],
      description: "",
      images: React.createRef(),
    };
  }

  handleSubmit = async (e) => {
    // e.preventDefault();
    console.log(this.state);
    const { title, category, description } = this.state;

    if (category === null) return alert("missing category");

    const file = this.state.images.current.files[0];

    const uploadData = new FormData();

    uploadData.append("title", title);
    uploadData.append("category", category);
    uploadData.append("description", description);
    uploadData.append("images", file);

    try {
      await APIHandler.post("http://localhost:9000/brand", uploadData);
      this.props.history.push("/dashboard");
    } catch (err) {
      console.error(err);
    }
  };

  handleCategoryChange = (evt) => {
    console.log("what is it ???");
    console.log(evt);
    this.setState({
      category: evt.target.value,
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    // console.log(this.props)
    return (
      <div className="container">
      <form onSubmit={this.handleSubmit}>
        <h1>Create a New Brand</h1>
        <Form.Label>Title</Form.Label>
        <Form.Control
        className="my-2"
          name="title"
          type="text"
          placeholder="title"
          value={this.state.title}
          onChange={this.handleChange}
        />

        <Form.Label>Category</Form.Label>    
        <Form.Select
         className="mb-2"
          title="select the category"
          name="category"
          id="title"
          onChange={this.handleCategoryChange}
        >
          <option value="-1" selected disabled>
            Please Choose a Category
          </option>
          {this.state.categories.map((cat, i) => (
            <option key={i} value={cat}>
              {cat}
            </option>
          ))}
        </Form.Select>


        <Form.Label>Description</Form.Label>
        <Form.Control
        className="mb-2"
        as="textarea"
          name="description"
          type="text"
          value={this.state.description}
          onChange={this.handleChange}
        />
        <Form.Label>Image</Form.Label>

        <Form.Control ref={this.state.images} name="images" type="file" />
        <Button className="my-2" type="submit"> Submit </Button>
      </form>
      </div>
    );
  }
}
