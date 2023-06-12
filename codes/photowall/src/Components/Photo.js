import React from 'react';

function Photo(props){
        const post = props.post;
        return (
                <figure>
                    <img src = {post.url} alt = "Some error in import"/>
                    <figcaption><p>{post.name}</p></figcaption>
                    <div class = "button">
                        <button onClick={()=>{
                            props.onRemove(post);
                        }}>
                            Remove
                        </button>
                    </div>
                </figure>
        );
};

export default Photo;