import React from "react";
import App from './App';
import ReactDOM  from "react-dom";

// const element = React.createElement('h1', null,'Hola every1');
// const element = <h1>Hola evry1 in JSX</h1>;

// const element = React.createElement('ul',null,

//                 React.createElement('li',null,1),
//                 React.createElement('li',null,2),
//                 React.createElement('li',null,3));

const element = 
<ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
</ul>
ReactDOM.render(<App/>,document.getElementById('root'));