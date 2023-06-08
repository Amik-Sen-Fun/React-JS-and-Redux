- Before moving into state management we will develop the basic structure of our web application, details of which can be seen in the `codes` folder. 


- In the `Photo.js` or `Photowall.js` we had used `this.props` which makes it dependent on state. To make this independent of the state and make it stateless, we convert them into functions and access `props` as function arguments.

```js
import React, {Component} from 'react';
import Photo from './Photo';

function Photowall(props){
    render(){
        
        return (
            <div className='photo-grid'>
               {props.posts.map((post, index)=> <Photo key = {index} post = {post}/>)}
            </div>
        );
    };
};

export default Photowall;
```
