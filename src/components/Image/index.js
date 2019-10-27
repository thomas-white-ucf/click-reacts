import React from "react";
import "./style.css";
// import { promised } from "q";

function Image(props) {

    return (
      <div className="card remove" onClick={() => props.removeCharacter(props.id)}>
          <div className="img-container">
             <img alt={props.name} src={props.image} />
          </div>
          <div className="content">
              <p>{props.name}</p>
          </div>
        </div>
    );
}

export default Image;

// <p>
//   Hello {this.state.firstName} {this.state.lastName}
// </p>
// <form className="form">
//   <input
//     value={this.state.firstName}
//     name="firstName"
//     onChange={this.handleInputChange}
//     type="text"
//     placeholder="First Name"
//   />
//   <input
//     value={this.state.lastName}
//     name="lastName"
//     onChange={this.handleInputChange}
//     type="text"
//     placeholder="Last Name"
//   />
//   <input
//     value={this.state.password}
//     name="password"
//     onChange={this.handleInputChange}
//     type="password"
//     placeholder="Password"
//   />
//   <button onClick={this.handleFormSubmit}>Submit</button>
// </form>