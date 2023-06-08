import React, {Component} from 'react';

class Photo extends Component{
    render(){
        const post = this.props.post;
        return (
                <figure>
                    <img src = {post.url} alt = "Some error in import"/>
                    <figcaption><p>{post.name}</p></figcaption>
                    <div class = "button">
                        <button>Remove</button>
                    </div>
                </figure>
        );
    };
};

export default Photo;