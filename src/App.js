import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// React.createElement => Object => HTMLElement when rendering

// const heading = React.createElement(
//     "h1",
//     {id: "heading"},
//     "Hello World from React!"
// );

// const parent = React.createElement(
//     "div",
//     { id : "parent" }, [
//     React.createElement(
//         "div",
//         { "id" : "child1"},
//         [React.createElement("h1", {}, "I'm an h1 tag"), React.createElement("h2", {}, "I'm an h2 tag")
//     ]),
//     React.createElement(
//         "div",
//         { "id" : "child2"},
//         [React.createElement("h1", {}, "I'm an h1 tag"), React.createElement("h2", {}, "I'm an h2 tag")
//     ])
// ])

// console.log(parent);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

// JSX - HTML like syntax and not HTML in JS
// JSX is transpiled to JS code by Babel. Parcel manages it. Babel is a JS compiler. Following line gets converted to React.createElement.
const jsxHeading = <h1 id="heading">Namaste React using JSX!</h1>;
// console.log(jsxHeading); // It is same as React.createElement. It prints out the object.

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);

// React Element - starts with smaller letter.
// const heading = <h1 className="heading">Namaste React Functional Component</h1>;
// root.render(heading);
const title = <h1 className="head">Namaste React using JSX!</h1>;
const Title = () => <h1 className="head">Namaste React using JSX!</h1>;
// React Functional Component (Component composition). () uses if we have multiple lines without return. starts with Capital letter
// We can add an element within a component and vice versa as well. {} can be used to execute any JS within JSX. But it wont directly execute. It will
// sanitize or escapes before rendering. This is done to prevent malicious attacks like cross site scripting
const HeadingComponent = () => {
  return (
    <div id="container">
      <Title />
      <Title></Title>
      {Title()}
      {title}
      <h1 className="heading">Namaste React Functional Component</h1>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

root.render(<AppLayout />);
