import React, { Component } from 'react'
import './NavBar.css';

class NavBar extends Component {

    render(){
        return( 
            <div className="mainNav">
                <h5 className="work">Work</h5>
                <h5 className="about">About</h5>
            </div>
        )
    }

}

export default NavBar