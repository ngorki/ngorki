import { Component } from "react";
import Projects from "./projects";
import Resume from "./resume";
import '../index.css'
import Balls from "./bingbong";

class MainContent extends Component{
    constructor(props){
        super(props)
        this.state ={
            projects: true,
            resume: false
        }
    }

    render(){
        return (
            <div className="main-content">
                <div className="button-container">
                    <button onClick={() => {this.setState({
                        projects: true,
                        resume: false
                    })}}>Projects</button>
                    <button onClick={() => {this.setState({
                        projects: false,
                        resume: true
                    })}}>Resume</button>
                </div>
                {Balls(20)}
                {this.state.projects ? <Projects/> : null}
                {this.state.resume ? <Resume/> : null}
            </div>
        )
    }
    
}

export default MainContent