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

Why required? 
- In our application we are using a variable `posts` that contains the data for our application.
- Say we add a new entry or delete an entry. How will the app know which sections to re-render.
- For this we need statemanagement. 

For doing this define a `constructor` inside the `class` extending `component` 
- Call `super()` first, implmenetation gimic :p 
- Then define `this.state = ` the value of the state. See definition in `App.js` in code. 

To update `state` use the `this.setState()` function.

- Also to call function from some child of child component, pass any method as `props` to child to child.
- But `this` is not bound to the function. So we need to bind `this` in the `constructor()`. 
  ```js
  constructor(){
    super();
    this.state = {
      posts : [
          {
              name: 'Steve Jobs', 
              url: 'https://drive.google.com/uc?export=view&id=1NY0vrn7GzlYHlKk7Rynlz21ee1Q_zGYc'
          },
          {
              name: 'Amik Sen',
              url: 'https://drive.google.com/uc?export=view&id=1023md3ZN9dy--aeSgTKXWTsHFp2u8Dgz'
          },
      ]
    }

    this.removePhoto = this.removePhoto.bind(this);
  }
  ```
# Prop Types
