import React, { Component } from 'react';
import './navbar.scss';
export default class NavbarComponent extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="navbarContainer">
                    <div>
                        <h3>EveryCornerOfIndia</h3>
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
