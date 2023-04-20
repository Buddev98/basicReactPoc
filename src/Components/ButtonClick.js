import React from "react";

 
class ButtonClick extends React.Component {
  constructor(props) {
    super(props);
     this.state = { change: true };
  }
  render() {
    return (
      <div>
        <button className="btncolor"
          onClick={() => {
            this.setState({ change: !this.state.change });
          }}
        >
          Click
        </button>
        {this.state.change ? (
          <h1>Before click</h1>
        ) : (
          <h1>After click</h1>
        )}
      </div>
    );
  }
}
 
export default ButtonClick;