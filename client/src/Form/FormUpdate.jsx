import React, { Component } from "react";
import APIHandler from "../Api/APIHandler";
import { Form, Button, FormGroup, FormControl, ControlLabel, Grid, FormSelect,} from "react-bootstrap";

export default class FormUpdate extends Component {
  state = {
    title: "",
    category: "",
    categories: ["chiron", "one off", "concept car", "veyron"],
    description: "",
    images: "",
    inputFile: React.createRef()
  };

  componentDidMount() {
    this.fetchbrand();
  }

  fetchbrand = () => {
    console.log();
    
    APIHandler.get("http://localhost:9000/brand/" + this.props.match.params.id).then((res) => {
      const { title, category, categories, description, images } = res.data;
      this.setState({
        title,
        category,
        description,
        images,
      });
    });
  };

  handleSubmit = async (e) => {
     e.preventDefault();
    console.log(this.state);
    const { title, category, description } = this.state;

    if (category === null) return alert("missing category");

    const file = this.state.images;

    const uploadData = new FormData();

    uploadData.append("title", title);
    uploadData.append("category", category);
    uploadData.append("description", description);
    uploadData.append("images", file);

    try {
      await APIHandler.post("http://localhost:9000/brand", uploadData);
      this.props.history();
    } catch (err) {
      console.error(err);
    }
    // e.preventDefault();
    // try {
    //   await APIHandler.patch(("/brand", +this.props.id), this.state);
    //   this.props.handleView(null, "create");
    // } catch (err) {
    //   console.error(err);
    // }
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
   console.log(this.state)
   const { categories } = this.state;
      return !categories ? ( 
        <p>Category is loading</p>
      ) : ( 

        <div className="container">
      <form onSubmit={this.handleSubmit}>
        <h1>Update a post</h1>
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
            Please Add a Category
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

        <Form.Label>File</Form.Label>

        <Form.Control  className="mb-2" ref={this.state.inputFile} name="images" type="file" />
        <Button className="my-2" type="submit"> Submit </Button>
      </form>
      </div>
    );
  }
}
