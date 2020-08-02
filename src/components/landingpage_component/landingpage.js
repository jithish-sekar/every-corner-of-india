import React, { Component } from 'react';
import './landingpage.scss';

export default class LandingPageComponent extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="landingContainer">
                    <div>
                        <img className="titleImg" src="every.png" alt='title'/>
                    </div>
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
                    <h4>THE COMMON WANDERER</h4>
                    <div className="detailContainer">
                        <div className="blogDetails">
                            {/* <h6 style={{margin:0}}>stories and musings from a life of travel.!! <br />OUR LATEST ADVENTURE </h6> */}
                            <img src="explore1.jpeg" alt="explore"className="exploreImg"/>
                        </div>
                        <div className="longDetails">
                            <p>Every Corner Of India is a travel blog dedicated to the roamers and seekers.</p>

                            <p>It's for the travellers and adventurers who go in search of authentic, real life experiences in exciting destinations around the world.</p>

                            <p>People who want to see the world a little bit differently, and in a responsible and ethical way too. </p>
                            <div style={{display:"flex",alignItems:"center"}}>
                            <h1>TRAVELLERS LIKE YOU.</h1>
                            {/* <img style={{height:"30px",margin:0}}src="map.jpg" alt="map"/> */}
                            </div>
                            <p >
                                This website owned by Reshma Karthikeyan, a normal Indian  who swapped their everyday lives for something more extraordinary, trading office cubicles for a life on the road and real human connections.
                            <br /> <br />
                             Using our exceptional in-depth travel guides, beautiful photography, and travel and adventure narratives, we promise to stoke your wanderlust and empower you to wander in whichever direction you choose.
                            <br /> <br />
                            <br /> <br />
                            </p>
                        </div>
                        <></>
                    </div>
                </div>
            </React.Fragment >
        )   
    }
}
