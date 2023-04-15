import React/* , { Component } */ from "react";
import '../Instructions/Instructions.css'


export default function Instructions(){
/* export default class Instructions extends Component {
  render() { */
    return (
      <>
        <img className="imagen" src={require("../../img/1F602_color.png")} alt="emoji llorando y sonriendo" />
        <p>Click on an emoji to view the emoji short name.</p>
      </>
    )
  // }
}
