import React from "react";
import "../style/style.scss";

//infection level colors
const red = {
  background: "#F12B2C",
};

const yellow = {
  background: "#FEC400",
};
const green = {
  background: "#29CC97",
};

//all details in all patient box
const details = [
  {
    photo: "https://i.pravatar.cc/150?img=12",
    messages: "Contact Email not Linked",
    birthLocation: "Tehran",
    dateOfBirth: "on 24.05.2000",
    registerationDate: "May 26, 2019",
    registerationTime: "6:30 PM",
    infectionLevel: "Low",
  },
  {
    photo: "https://i.pravatar.cc/150?img=41",
    messages: "Adding Images to Featured Posts",
    birthLocation: "LA",
    dateOfBirth: "on 24.05.2002",
    registerationDate: "jan 26, 2015",
    registerationTime: "4:00 PM",
    infectionLevel: "High",
  },
  {
    photo: "https://i.pravatar.cc/150?img=17",
    messages: "Payment not going through",
    birthLocation: "Texas",
    dateOfBirth: "on 01.07.2001",
    registerationDate: "feb 05, 2018",
    registerationTime: "9:30 PM",
    infectionLevel: "Normal",
  },
  {
    photo: "https://i.pravatar.cc/150?img=10",
    messages: "When will I be charged this month?",
    birthLocation: "London",
    dateOfBirth: "on 01.03.2001",
    registerationDate: "aug 05, 2018",
    registerationTime: "3:30 PM",
    infectionLevel: "Low",
  },
  {
    photo: "https://i.pravatar.cc/150?img=13",
    messages: "Unable to add replies",
    birthLocation: "Tabriz",
    dateOfBirth: "on 04.11.2004",
    registerationDate: "apr 02, 2013",
    registerationTime: "3:20 PM",
    infectionLevel: "High",
  },
];

function UserDetails() {
  const UserDetails = (
    <div className="container userDetails">
      <h5>All Patients</h5>
      <table className="table table-hover">
        <thead>
          <tr>
            <th style={{ paddingLeft: "30px" }}>User Details</th>
            <th>Birth Details</th>
            <th>Registeration Date</th>
            <th>Infection level</th>
          </tr>
        </thead>
        {details.map((data, index) => {
          return (
            <tbody key={index}>
              <tr>
                <td>
                  <div id="user">
                    <img alt="avatar" src={data.photo} />
                    <div>
                      <span>{data.messages}</span>
                      <p>updated 1 day ago</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div>
                    <span>{data.birthLocation}</span>
                    <p>{data.dateOfBirth}</p>
                  </div>
                </td>
                <td>
                  <div>
                    <span>{data.registerationDate}</span>
                    <p>{data.registerationTime}</p>
                  </div>
                </td>
                <td>
                  {data.infectionLevel === "Low" && (
                    <p id="infectionLevel" style={yellow}>
                      {data.infectionLevel}
                    </p>
                  )}
                  {data.infectionLevel === "Normal" && (
                    <p id="infectionLevel" style={green}>
                      {data.infectionLevel}
                    </p>
                  )}
                  {data.infectionLevel === "High" && (
                    <p id="infectionLevel" style={red}>
                      {data.infectionLevel}
                    </p>
                  )}
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );

  return UserDetails;
}

export default UserDetails;
