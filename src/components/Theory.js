import React from "react";

function Theory() {
  let firstName = "Vishal";
  let lastName = "Kumar";
  let intro = `My name is ${firstName} ${lastName}`;
  let link = "https://www.reactjs.org";

  //React Elements
  //Immutable
  let element = React.createElement("h1", { className: "header" }, "Header! ");

  //JSX resolve to a js object after compilation!
  let myJSX = (
    <div>
      {/*ReactJs uses camelCase for most of the JXS :- firstWord  */}
      {/* JSX by default prevent Injection Attacks */}
      <h1 className="header">This is a Header </h1>
      {/*if there only no content between tags then only use closing tag like this <a href= "www.google.com" /> */}
      {/*if there is content between tags then use both opening and closing tags*/}
      <a href="https://www.reactjs.org"> </a>
      <a href={link} />
      {/* <a href={"https://www.reactjs.org"} />  wrong XX */}
      <h2> {intro} </h2>
    </div>
  );

  let myJSXwithoutintro = (
    <div>
      <h1> Header!</h1>
    </div>
  );

  if (firstName && lastName) return myJSX;
  else return myJSXwithoutintro;
}

export default Theory;
