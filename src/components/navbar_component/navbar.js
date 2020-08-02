import React, { Component } from 'react';
import './navbar.scss';
export default class NavbarComponent extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="navbarContainer">
                    <div style={{display:"flex",alignItems:"center"}}>
                        <h3>EveryCornerOfIndia </h3>
                        <img style={{height:"40px",paddingLeft:"10px"}} src="map.jpg" alt='logo'/>
                    </div>
                    <div>
                        <ul>
                            <li>About</li>
                            <li>Travelled Destinations </li>
                            <li>Responsible Travel</li>
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
