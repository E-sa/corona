import React from "react";
import "../style/style.scss";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartPie,
  faLightbulb,
  faTicketAlt,
  faUsers,
  faGlobeAsia,
  faBook,
  faCog,
  faMedal,
  faGripLines,
} from "@fortawesome/free-solid-svg-icons";




export default class DashBoard extends React.Component{

      constructor(props) {
            super(props);
            this.state = {
              overViewFocus: true,
              usersFocus: false
            };
          }


    //Toggle active class between 'overview' and 'users'
    usersClicked =() =>{
      this.setState({overViewFocus:false, usersFocus:true})
    }
    overViewClicked =() =>{
      this.setState({overViewFocus:true, usersFocus:false})
    }


  render(){
    return(
      <div className="dashboard-container">
      {/* responsive button for menu */}
      <input type="checkbox"></input>
      <button>
        <FontAwesomeIcon icon={faGripLines} color="#A4A6B3" />
      </button>

      <div className="dashboard">
        <div className="box-1">
          <div>
            <div></div>
          </div>
          <p>Covid 19 Tracker</p>
        </div>
        <div className="box-2">
          <ul>
            <Link to="/" style={{ color: "#a4a6b3" }}  >
              <li tabIndex="0" className={this.state.overViewFocus ? 'dashboardFocus' : ''} onClick={this.overViewClicked}>
                <FontAwesomeIcon icon={faChartPie} color="#A4A6B3" />
                OverView
              </li>
            </Link>
            <Link to="/users" style={{ color: "#a4a6b3" }}>
              <li tabIndex="0" className={this.state.usersFocus ? 'dashboardFocus' : ''} onClick={this.usersClicked} >
                <FontAwesomeIcon icon={faTicketAlt} color="#A4A6B3" />
                Users
              </li>
            </Link>
            <li>
              <FontAwesomeIcon icon={faLightbulb} color="#A4A6B3" />
              Link number 2
            </li>
            <li>
              <FontAwesomeIcon icon={faUsers} color="#A4A6B3" />
              Link number 3
            </li>
            <li>
              <FontAwesomeIcon icon={faGlobeAsia} color="#A4A6B3" />
              Link number 4
            </li>
            <li>
              <FontAwesomeIcon icon={faBook} color="#A4A6B3" />
              Link number 5
            </li>
          </ul>
        </div>

        <div className="box-3">
          <ul>
            <li>
              <FontAwesomeIcon icon={faCog} color="#A4A6B3" />
              Setting
            </li>
            <li>
              <FontAwesomeIcon icon={faMedal} color="#A4A6B3" />
              Logout
            </li>
          </ul>
        </div>
      </div>
    </div>
    )
  }

}

