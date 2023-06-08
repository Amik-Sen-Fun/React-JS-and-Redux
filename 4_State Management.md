- Before moving into state management we will develop the basic structure of our web application, details of which can be seen in the `codes` folder. 


- In the `Photo.js` or `Photowall.js` we had used `this.props` which makes it dependent on state. To make this independent of the state and make it stateless, we convert them into functions and access `props` as function arguments.

```js
import React, {Component} from 'react';
import Photo from './Photo';

function Photowall(props){
        return (
            <div className='photo-grid'>
               {props.posts.map((post, index)=> <Photo key = {index} post = {post}/>)}
            </div>
        );
};

export default Photowall;
```

# Statemanagement

Why required? In our application we are using a variable `posts` that contains the data for our application.
Say we add a new entry or delete an entry. How will the app know which sections to re-render.
For this we need statemanagement. 
