import React, { Component } from "react";
import { Link } from "react-router-dom";

class Blog extends Component{
    // main render component for blog posts
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <h1>A peek into my head</h1>
                <Link to="/create"><button >New Post</button></Link>
            </div>
        );
    }
}

class BlogPost extends Component{
    constructor(props, title, content){
        super(props)
        this.title = title
        this.content = content
    }

    render(){
        return(
            <div>
                <h1>{this.title}</h1>
                <p>{this.content}</p>
            </div>
        )
    }
}

class CreatePost extends Component{
    constructor(props){}

}

export {Blog, CreatePost}
