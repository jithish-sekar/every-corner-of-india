import React, { Component } from 'react';
import './landingpage.scss';

export default class LandingPageComponent extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="landingContainer">
                    <div>
                        <h3>Every Corner Of India</h3>
                    </div>
                    <h4>THE COMMON WANDERER</h4>
                    <div className="travelContainer">
                        <div>
                            <img src="wander1.jpg" alt='landingImage' />
                            <h5 >Seasonal Travel</h5>
                        </div>
                        <div>
                            <img src="wander.jpg" alt='landingImage' />
                            <h5>Street Art</h5>
                        </div>
                        <div >
                            <img src="wander2.jpg" alt='landingImage' />
                            <h5> Travel Planning</h5>
                        </div>
                    </div>
                    <div className="detailContainer">
                        <div className="blogDetails">
                            <h6>TravMedia Blogger of the Year | 2020  <br />UK Blog Award winners | 2019 </h6>
                        </div>
                        <div className="longDetails">
                            <p>Every Corner Of India is a travel blog dedicated to the roamers and seekers.</p>

                            <p>It's for the travellers and adventurers who go in search of authentic, real life experiences in exciting destinations around the world.</p>

                            <p>People who want to see the world a little bit differently, and in a responsible and ethical way too. </p>
                            <h1>TRAVELLERS LIKE YOU.</h1>
                            <p>
                                This website is the internet baby of Reshma Karthikeyan, a normal Indian  who swapped their everyday lives for something more extraordinary, trading office cubicles for a life on the road and real human connections.
                            <br /> <br />
                             Using our exceptional in-depth travel guides, beautiful photography, and travel and adventure narratives, we promise to stoke your wanderlust and empower you to wander in whichever direction you choose.
                            </p>
                        </div>
                    </div>
                </div>
            </React.Fragment >
        )
    }
}
