import React from "react";
import NewsCard from "./NewsCard";

import { API_URL } from "./Constants";

// Parent component
class App extends React.Component {
  state = {
    feeds: []
  };

  fetchHeadlines = () => {
    fetch(API_URL, {
      method: "GET"
    })
      .then((data) => data.json())
      .then((response) => this.setState({ feeds: response.articles }))
      .catch((error) => console.log(error));
  };

  componentDidMount() {
    this.fetchHeadlines();
  }

  render() {
    return (
      <div>
        {this.state.feeds.length > 0 ? this.state.feeds.map((obj) => (
          <NewsCard data={obj} />
        )) : <h1>Loading....</h1>}

      </div>
    );
  }
}

export default App;
