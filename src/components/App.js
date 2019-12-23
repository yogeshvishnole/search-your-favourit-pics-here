import React from "react";
import unsplash from "../api/unsplash";
import yogesh from "../api/yogesh";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = {
    image: [],
    yogu: ""
  };

  onSearchSubmit = async term => {
    const response = await unsplash.get("/search/photos", {
      params: {
        query: term
      }
    });

    const res = await yogesh.get("/");
    console.log(res.data);

    this.setState({ image: response.data.results, yogu: res.data.message });
  };

  render() {
    return (
      <div className="ui container" style={{ margin: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.image} />
        <h1>{this.state.yogu}</h1>
      </div>
    );
  }
}

export default App;
