import React from "react";
import "../CSS/DashboardPage.css";
import CardElement from "../components/Dashboard/CardElement";
import { CardText } from "../components/Dashboard/CardText";
import Slider from "../components/Dashboard/Slider";
import ImageCard from "../components/Dashboard/ImageCard";
import {ImageText} from "../components/Dashboard/ImageText";


const Dashboard = () => {
 

  return (
    <div className="Dashboard">
      
      <div className="Slider">
        <Slider />
      </div>
       
      <div className="cardText">
          <ImageText></ImageText>
        </div>

        <div className="ImageCard">
          <ImageCard></ImageCard>
        </div>
     
        <div className="cardText">
          <CardText></CardText>
        </div>
        <div className="card">
          <CardElement></CardElement>
        </div>
      </div>

  
  );
};

export default Dashboard;
