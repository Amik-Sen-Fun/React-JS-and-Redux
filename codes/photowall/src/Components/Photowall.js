import React from 'react';
import Photo from './Photo';

function Photowall(props){
        return (
            <div>
                <button className="addButton">
                    <span class="material-symbols-outlined Buttonspan">
                        add_circle
                    </span>
                </button>
                <div className='photo-grid'>
                {props.posts.map((post, index)=> <Photo key = {index} post = {post} onRemove={props.onRemove}/>)}
                </div>
            </div>
        );
};

export default Photowall;