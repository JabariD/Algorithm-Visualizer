import React, { Component } from 'react'

import './HomePage.css';
import {Grid , Button} from '@material-ui/core';
import {Link} from "react-router-dom";

import graphAlgorithmPicture from './assets/graph-algorithm.png';
import hologram from './assets/box.gif';

/** Displays the homepage */
export class HomePage extends Component {
    render() {
        return (
            <div>
                
                <header>
                    <img style={{float: "left", border: "5px solid blue"}} src={hologram} alt="description of gif" height="60px" width="60px"/> 
                        <ul>
                            <li className="header-title"><Link style={linkStyle} to="/">Algorithm Visualizer</Link></li>
                            <div className="header-right">
                                <li><Link style={linkStyle} className="link" to="/algorithms">Algorithms</Link></li>
                                <li>Data Structures</li>
                                <li>About</li>
                            </div>
                        </ul>
                    
                </header>

                <section className="hero" >
                    <Grid container spacing={3}>
                        <Grid item lg={5}>
                            <h3 className="animate__animated animate__fadeIn">For the visual learners.</h3>
                            <Button className="heroButton" variant="outlined" component={Link} to={'algorithms'}>Start Learning.</Button>
                        </Grid>
                        <Grid item lg={7}>
                            <img src={graphAlgorithmPicture} alt="Alternate text" />
                        </Grid>
                    </Grid>
                </section>

                <section className="searchSection">
                    <Grid container>
                        <Grid item>
                            <div>
                                Hello
                            </div>
                        </Grid>
                    </Grid>
                </section>
                {/* <Grid container spacing={3}>
                    <Grid item xs={6} md={3} style={{background:"green"}}>
                        Hooray something is here!
                    </Grid>
                    <Grid item xs={6} md={3} style={{background:"blue"}}>
                    Hooray something is here!
                    </Grid>
                    <Grid item xs={6} style={{background:"yellow"}}>
                    Hooray something is here!
                    </Grid>
                    <Grid item xs={6} style={{background:"red"}}>
                    Hooray something is here!
                    </Grid>
                </Grid> */}
            </div>
        )
    }
}

const linkStyle = {
    textDecoration: "none",
    color: "black",
}

export default HomePage
