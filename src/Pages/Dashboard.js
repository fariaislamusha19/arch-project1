import React from "react";
import Header from "../components/Dashboard/Header";
import "../CSS/DashboardPage.css";
import img from "../Assets/Images/quote_image.jpg";
import CardElement from "../components/Dashboard/CardElement";
import { CardText } from "../components/Dashboard/CardText";
import Slider from "../components/Dashboard/Slider";
import ImageCard from "../components/Dashboard/ImageCard";
import OneCardImage from "../Assets/Images/OneCardImage.jpg";
import TwoCardImage from "../Assets/Images/TwoCardImage.jpg";
import ThreeCardImage from "../Assets/Images/ThreeCardImage.jpg";

const Dashboard = () => {
  var text =
    "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.";

  return (
    <div className="Dashboard">
      <div className="Header">
        <Header></Header>
      </div>
      <div className="Slider">
        <Slider />
      </div>

      <div className="ImageCard-bg">
        <div className="ImageCard">
          <ImageCard
            image={OneCardImage}
            text="A"
            contentText={text}
            title="Drawing Room Decoration"
            subHeader="Arch-tech Owened design"
          ></ImageCard>
          <ImageCard
            image={TwoCardImage}
            text="A"
            contentText={text}
            title="Family Living standard"
            subHeader="Arch-tech Owened design"
          ></ImageCard>
          <ImageCard
            image={ThreeCardImage}
            text="B"
            contentText={text}
            title="Classic Living room"
            subHeader="Arch-tech Owened design"
          ></ImageCard>
          {/* <ImageCard image={ThreeCardImage}></ImageCard> */}
        </div>
      </div>

      <div className="Quote">
        <div className="cardText">
          <CardText></CardText>
        </div>
        <div className="card">
          <CardElement></CardElement>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
