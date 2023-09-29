import React from "react";

class ClassComponent extends React.Component {
  render() {
     if (this.props.name === "lucky" || this.props.name === "sai" || this.props.name== "madhavi"){
      return (
        <div className="card m-4">
          <div className="card-header bg-success">class based component with props</div>
          <div className="card-body">
            <p className="fw-bold">Welcome to Employee component</p>
            <p>My name is {this.props.name} and age is {this.props.age}</p>
          </div>
        </div>
      );
     }
    }
  }

export default ClassComponent;
