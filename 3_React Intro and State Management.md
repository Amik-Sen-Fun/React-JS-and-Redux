# Introduction

Funda of React : Make reusable small components, and make your application. 

React has a virtual DOM, which takes in `elements` and converts them into `nodes` to render the web application.

To make a react application :

```
npx create-react-app my-app
cd my-app
npm start
```

Let's understand how this works, 

first import the `React` module and the `ReactDOM` in the index.js file and see the flow

```js
import React from 'react';
import ReactDOM from 'react-dom/client';
```

To define an element we use the command 

```js

tasks = ["eat", "sleep", "repeat"];
const element = React.createElement('ol', null, 
    tasks.map((task, index)=> React.createElement('li',{key: index}, task) );
); 

// React.createElement(type,{props},children)

ReactDOM.render(element, document.getElementById('root')); // renders the element 
```
Few notes: 
- `elements` rendering is independent of the order they are defined 
- `type`: the type of the HTML element (h1,p,button)
- `props` : Properties of the object({style:{size:10px}} or Eventhandlers, classNames,etc)
- `children` : anything that need to be displayed on the screen.
- For the definition of the `children` the `key` prop is necessary to provide for a better control 

This is however very tedious, so React came up with JSX, which is our next section 

# JSX 

Now since this could be tedious to write createElement and stuff, react came up with `JSX`. The following is an example:

```js

tasks = ["eat", "sleep", "repeat"];
const element = 
  <div>
    <h1> Task List </h1> 
    <ol>
      { tasks.map((task, index)=> <li key: {index}> {task} </li>);}
    </ol>
  </div>
    // we can write normal JS code and variables inside the curly braces

ReactDOM.render(element, document.getElementById('root')); // renders the element 
```
`JSX` converts this code into the `createElement` thingy after some compilation. 

Some rule of thumb for defining JSX
- A single HTML element can be defined using a normal variable 
- But if want to club various HTML elements we need to encapsulate it inside a `div` tag.
  - Like in the above example we are clubbing an `<h1>` tag and an `<ol>` tag. 

# Components 



