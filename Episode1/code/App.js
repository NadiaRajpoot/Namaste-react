const heading = React.createElement("h1", {id : "heading"} , "this ia an h1 tag created with core react");

const root = ReactDOM.createRoot(document.getElementById("root"));

//nested react elements
const circle = React.createElement("h1" , {id: "circle" , style : {color : "blue"}  } , " I am a circle");
const rectangle= React.createElement("h1" , {id: "rectangle" , style : {color : "yellow"}}  , " I am a rectangle");
const triangle= React.createElement("h1" , {id: "triangle" , style : {color : "green"} } , " I am a triangle");
const container = React.createElement("div" , {id : "container" }, [rectangle , circle, triangle]);
root.render(container);
