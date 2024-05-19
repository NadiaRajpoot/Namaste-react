import React from "react";
import ReactDOM from "react-dom/client";

//nested header element structure with core react
const heading1 = React.createElement("h1", {id : "h1"}, "thisis an h1 tag");
const heading2 = React.createElement("h1", {id : "h2"}, "this is an h2 tag");
const heading3 = React.createElement("h1", {id : "h3"}, "this is an h3 tag");

const header = React.createElement("div" , {className : "title"},  [heading1, heading2, heading3]);
const root = ReactDOM.createRoot(document.getElementById("root"));

//JSX (transpile beore it reaches the Js)- parcel - Babel
// JSX => React.createElement => Reactelement - JS object => HTMLElement(render);

//nested header using JSX
 const header1 = <div>
     <h1>this is an h1 tag with JSX</h1>
     <h1>this is an h2 tag with JSX</h1>
     <h1>this is an h3 tag with JSX</h1>
 </div>

 // functional component : the name is starts with capital letter.
 // same structure using functional component.
/*  this is known as component composition - one component in one another. */
 const Title = ()=> (
  <h1>this is a title</h1>
 )
 const Header3 = () =>{
     return (
      <div className="title">
        <Title/>
        <Title></Title>
        {Title()}
        <h1 style={{color: "red"}} id = "heading1">this is an h1 tag</h1>
        <h1  style={{color: "green"}} id = "heading2">this is an h2 tag</h1>
        <h1  style={{color: "blue"}}  id = "heading3">this is an h3 tag</h1>
      </div>
     )
 }


root.render(<Header3/>);
