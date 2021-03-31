import React from "react";
import { Link } from "react-router-dom";
export class NotFoundPage extends React.Component {
constructor(props){

  this.state = {
    name:'Abhi'
  }
}

componentDidMount(){
  setInterval(()=> {
    this.setState({
      name:'Abhiit'
    })
  },2000)
}

  render() {
    return (
      <div>
        404!!
        <Link to="/">Go Home</Link>
        <Purecomp name = {this.state.name} />
      </div>
    );
  }
}

export default NotFoundPage;
