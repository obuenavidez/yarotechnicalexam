import React from "react";
import "./DownBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const DownBtn = props => (
  <span className="down-btn" {...props}>
    -
  </span>
);

export default DownBtn;

// import React from "react";

// // By extending the React.Component class, Counter inherits functionality from it
// class DownBtn extends React.Component {
//   // Setting the initial state of the Counter component
//   state = {
//     count: 0
//   };

//   // handleIncrement increments this.state.count by 1
//   handleIncrement = () => {
//     // We always use the setState method to update a component's state
//     this.setState({ count: this.state.count + 1 });
//   };

//   handleDecrement = () => {
//     // We always use the setState method to update a component's state
//     this.setState({ count: this.state.count - 1 });
//   };

//   // The render method returns the JSX that should be rendered
//   render() {
//     return (
//       <div className="card text-center">
//         <div className="card-header bg-primary text-white">
//           <h3 className="card-title"> Click Counter!</h3>
//         </div>
//         <div className="card-body">
//           <p className="card-text">Click Count: {this.state.count}</p>
          
          
          
//           <button className="btn btn-primary" onClick={this.handleIncrement}>
          
//             +
//           </button>
//           <button className="btn btn-primary" onClick={this.handleDecrement}>
          
//             -
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

// export default DownBtn;

