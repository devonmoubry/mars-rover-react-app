import React, { Component } from 'react';
import '../styles/App.css';
import apiKey from './apiKey';

const API_KEY = apiKey;

class GetImageForm extends Component {
  constructor(props) {
    super(props);
    this.handleRover = this.handleRover.bind(this);
    this.handleCamera = this.handleCamera.bind(this);
    this.handleSol = this.handleSol.bind(this);
    this.fetchRoverImage = this.fetchRoverImage.bind(this);

    this.state = {
      rover: "",
      camera: "",
      images: [],
      sol: ""
    }
  }
  handleRover(e) {
    e.preventDefault();
    console.log('rover changed', e.target.value);
    this.setState({rover: e.target.value});
    console.log('rover handled', this.state.rover);
  }
  handleCamera(e) {
    e.preventDefault();
    console.log('rover changed', e.target.value);
    this.setState({camera: e.target.value});
    console.log('camera handled', this.state.camera);
  }
  handleSol(e) {
    e.preventDefault();
    console.log('rover changed', e.target.value);
    this.setState({sol: e.target.value});
    console.log('sol handled', this.state.sol);
  }
  fetchRoverImage() {
    console.log('fetch handled');

    this.setState({camera: this.state.camera, rover: this.state.rover, sol: this.state.sol});
    let cam = this.state.camera;
    let rove = this.state.rover;
    let num = this.state.sol;

    let imageUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rove}/photos?sol=${num}&camera=${cam}&api_key=${API_KEY}`;

    fetch(imageUrl).then((response) => {
      return response.json()
    }).then((data) => {
      console.log('data', data);
      let images = data.photos;
      this.setState({images: images});
      console.log('this.state.images', this.state.images);
    }).catch((error) => {
      console.log("Error with Fetching : ", error);
    });
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="rover">Rover</label>
          <select onChange={this.handleRover} id="rover" value={this.state.value}>
            <option value="Curiosity">Curiosity</option>
            <option value="Opportunity">Opportunity</option>
            <option value="Spirit">Spirit</option>
          </select>
          <label htmlFor="camera">Camera Type</label>
          <select onChange={this.handleCamera} id="rover" value={this.state.value}>
            <option value="fhaz">FHAZ (Front Hazard)</option>
            <option value="rhaz">RHAZ (Rear Hazard)</option>
            <option value="navcam">NAVCAM (Navigation Cam)</option>
          </select>
          <label htmlFor="sol">Martian Sol: 1000-2000</label>
          <input type="number" onChange={this.handleSol} max="2000" min="1000" value={this.state.value}/>
        </form>
        <GetImageButton fetchRoverImage={this.fetchRoverImage}/>
        <ImageDisplay images={this.state.images}/>
      </div>
    )
  }
}

class GetImageButton extends Component {
  render() {
    return (
      <div>
        <button type="submit" onClick={this.props.fetchRoverImage}>Get Rover Image</button>
      </div>
    )
  }
}

class ImageDisplay extends Component {
  render() {
    let images = this.props.images;
    let display = `Get your pictures here!`;
    if (this.props.images === undefined) {
      display = `Sorry, no pictures yet. Try again with new search queries`;
    } else {
      display = images.map((image) => {
        return (
          <div key={image.id}>
            <img src={image.img_src} alt={image.camera.name}/>
          </div>
        )
      })
    }
    return (
      <div>{display}</div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <h1>I Heart La Croix</h1>
        <GetImageForm />
      </div>
    );
  }
}

export default App;
