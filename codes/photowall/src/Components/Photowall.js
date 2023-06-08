import React from 'react';
import Photo from './Photo';

function Photowall(props){
        return (
            <div className='photo-grid'>
               {props.posts.map((post, index)=> <Photo key = {index} post = {post}/>)}
            </div>
        );
};

export default Photowall;