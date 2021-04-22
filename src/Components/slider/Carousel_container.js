import React from "react";
import {Carousel} from "react-bootstrap";
import image1 from "../../images/1.jpg";
import image2 from "../../images/2.jpg";
import image3 from "../../images/3.jpg";
import "./Carousel_container.css"
const Carousel_container = () => {
    return(
      <div className="slider">
        <Carousel className = "slider">
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src={image1}
      alt="Games-info"
    />
    <Carousel.Caption>
      <h3>Games Info</h3>
      <p>Get infromation of pc games</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src={image2}
      alt="Store"
    />

    <Carousel.Caption>
      <h3>Store</h3>
      <p>Get all pro gaming products from our trusted store</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src={image3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Gaming Community</h3>
      <p>Best gaming community in india</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
    )
}

export default Carousel_container;
