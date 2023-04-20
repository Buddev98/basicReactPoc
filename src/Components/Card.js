import React, { Component } from "react";
import Button from "./Button";

export default class Card extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="card" style={{ width: "30rem", padding: "1rem" }}>
          <img
            src="https://www.readyrefresh.com/medias/sys_master/images/images/hf9/h77/h00/9092706926622/1196-main-Pure-Life-purified-water-5-Gallon-composite-zoom-variable-medium.png"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <div className="text-center">
          <Button id="primaryBtn" type="button" variant="button-primary" size="lg" isDisabled={false} children="Quick add" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
