import React from 'react';
import "./index.css";
// import DestinationComponent from '../../components/Destination/Destination';
import { NavLink, useParams } from "react-router-dom";
// import data from "./../../assets/data.json";

const Destination = (props) => {

  // switch (id) {
  //   case "00":
  //     var destination = <DestinationComponent data = {data.destinations[0]} />
  //     break;
  //   case "01":
  //     var destination = <DestinationComponent data = {data.destinations[1]} />
  //     break;

  //   case "02":
  //     var destination = <DestinationComponent data = {data.destinations[2]} />
  //     break;
    
  //   case "03":
  //     var destination = <DestinationComponent data = {data.destinations[3]} />
  //     break;

  //   default:
  //     break;
  // }

  return (
    <div className='destination'>


      <div className="container">
        <h3 className="heading">
          <span>01</span>
          pick your destination
        </h3>


        <div className="sub__nav">
          <NavLink to="/destination/00" className="nav_link">
            Moon
          </NavLink>

          <NavLink to="/destination/01" className="nav_link">
            Mars
          </NavLink>

          <NavLink to="/destination/02" className="nav_link">
            Europa
          </NavLink>

          <NavLink to="/destination/03" className="nav_link">
            Titan
          </NavLink>
        </div>

        {/* {destination} */}

      </div>
    </div>
  )
}

export default Destination;