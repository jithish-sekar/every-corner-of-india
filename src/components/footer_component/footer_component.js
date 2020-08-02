import React, { Component } from 'react'
import "./footer_component.scss";

export default class FooterComponent extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="footerContainer">
                    <div className="navigator">
                        <ul>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Programs</li>
                        </ul>
                    </div>
                    <div className="socialmedia">
                        <ul>
                            <li><i style={{ padding: "6px" }} class="fa fa-facebook-square" />Facebook</li>
                            <li><i style={{ padding: "6px" }} class="fa fa-linkedin-square" />Linkedin</li>
                            <li><i style={{ padding: "6px" }} class="fa fa-twitter-square" />Twitter</li>
                        </ul>
                    </div>
                    {/* <div className="searchbar">
                        <ul>
                            <li>Subscribe to our newsletter</li>
                            <input type="text" placeholder="Email address" />
                            <button>Submit</button>
                        </ul>
                    </div>
                    <div className="address">
                        <ul>
                            <li>NICT, TAMILNADU</li>
                            <li>MOBILE: 9985004522</li>
                            <li>info@nictonline.in</li>
                        </ul>
                    </div> */}
                </div>
                <div className="copyryt">
                    <h6>&#169; 2020 copyright:<a href="https://everycornerofindia.netlify.app/">everycornerofindia.com</a></h6>
                </div>
            </React.Fragment>
        )
    }
}
