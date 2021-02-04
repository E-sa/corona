//4 boxes showing statics
import React from "react";
import "../style/style.scss";
import axios from "axios";

export default class Card extends React.Component {
  constructor(props) {
    this.state = {};
  }

  corona() {
    const URL = "https://api.covid19api.com/summary";
    axios
      .get(URL)
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        this.setState({
          //active box
          newConfirmed: data.Global.NewConfirmed,
          //total box
          totalConfirmed: data.Global.TotalConfirmed,
          //death box
          totalDeaths: data.Global.TotalDeaths,
          //recover box
          totalRecovered: data.Global.TotalRecovered,
        });
      })
      .catch((err) => {
        if (err) console.error("cant fetch data from API", err);
      });
  }

  componentDidMount() {
    this.corona();
  }

  render() {
    return (
      <div className="cards">
        <div>
          <p>Total</p>
          <p>{this.state.totalConfirmed}</p>
        </div>
        <div>
          <p>Active</p>
          <p>{this.state.newConfirmed}</p>
        </div>
        <div>
          <p>Recovered</p>
          <p>{this.state.totalRecovered}</p>
        </div>
        <div>
          <p>Death</p>
          <p>{this.state.totalDeaths}</p>
        </div>
      </div>
    );
  }
}
