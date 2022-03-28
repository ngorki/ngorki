import {React, Component} from 'react'
import { Link, Outlet } from 'react-router-dom'

export default class Layout extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <nav>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/create">Create Post</Link>
                    </li>

                </nav>
                <Outlet/>
            </div>
        )
    }
}