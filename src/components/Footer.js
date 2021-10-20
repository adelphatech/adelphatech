import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from "react-helmet"
import { withPrefix } from "gatsby"
import $ from 'jquery';
import jQuery from 'jquery';
import { useState, useEffect } from 'react';

const Footer = ({ data }) => {
    useEffect(() => {
        // Update the document title using the browser API
        const script = document.createElement("script");

        script.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js";
        script.async = true;

        document.body.appendChild(script);

        ////////////////////////
        const script2 = document.createElement("script");

        script2.src = "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js";
        script2.async = true;

        document.body.appendChild(script2);
        ///////////////////
        const script3 = document.createElement("script");

        script3.src = "../img/owl.carousel.min.js";
        script3.async = true;

        document.body.appendChild(script3);
        /////////////////
        const script4 = document.createElement("script");

        script4.src = "../img/videoLightning.js";
        script4.async = true;

        document.body.appendChild(script4);
        //////////////////////////////
        const script5 = document.createElement("script");

        script5.src = "../img/responsive-menu.js";
        script5.async = true;

        document.body.appendChild(script5);
        //////////////////////////
        const script6 = document.createElement("script");

        script6.src = "../img/jquery.bxslider.js";
        script6.async = true;

        document.body.appendChild(script6);
        ////////////////
        const script7 = document.createElement("script");

        script7.src = "../img/jquery.mixitup.js";
        script7.async = true;

        document.body.appendChild(script7);
        //////////////
        const script8 = document.createElement("script");

        script8.src = "../img/custom.js";
        script8.async = true;

        document.body.appendChild(script8);
    });
    return (
        <>

            <footer id="footer">
                {/* container */}
                <div className="container">
                    <div className="footer-content">
                        <div className="col-footer about-us">
                            <h4>about us</h4>
                            <p>AdelphaTech creates engaging websites and applications on a diverse array of platforms tailored to your specific needs. We’ve performed work for small one person start-ups and managed multi-million dollar projects for world-class organizations such as University Health Network, Nestle, and Deloitte.</p>
                            <p>&nbsp;</p>
                            <a href="About.html">Read more</a>
                        </div>
                        <div className="col-footer our-services">
                            <h4>our services
                            </h4>
                            <ul>
                                <li><a href="#"><span>Web </span> development</a></li>
                                <li><a href="#"><span>Backend </span> development</a></li>
                                <li><a href="#"><span>Frameworks</span> </a></li>
                                <li><a href="#"><span>CMS </span> Applications</a></li>
                                <li><a href="#"><span>Databases</span> </a></li>
                                <li><a href="#"><span>Project </span> Management</a></li>
                            </ul>
                        </div>
                        <div className="col-footer latest-tweets">
                            <h4>Last tweets
                            </h4>
                            <a className="twitter-timeline" href="AdelphaTech.html" data-widget-id={591947997157715968} data-chrome="transparent noborders noheader nofooter noscrollbar" data-tweet-limit={1} data-show-replies="false" data-screen-name="adelphatech" data-theme="dark" data-link-color="#009cd9" data-border-color="#ffffff">Tweets by @adelphatech</a>
                        </div>
                        <div className="col-footer navigate">
                            <h4>navigate
                            </h4>
                            <ul id="menuElem">
                                <li className="Highlighted">
                                    <a href="Home.html">Home</a>
                                </li>
                                <li>
                                    <a href="About.html">About</a>
                                </li>
                                <li>
                                    <a href="Portfolio.html">Portfolio</a>
                                </li>
                                <li>
                                    <a href="Contact.html">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>{/* end container */}
                {/* copyright */}
                <div className="copyright">
                    <div className="container">
                        <div className="col-xs-12 col-sm-3 col-md-3 col-lg-6">
                            <a href="Home.html">
                                <img id="p_lt_ctl17_edtLogo_ucEditableImage_imgImage" src="NewAdelphatech/media/_Adelphatech/logo-footer.png?ext=.png" alt="" />
                            </a>
                        </div>
                        <div className="col-xs-12 col-sm-9 col-md-9 col-lg-6">
                            <p>2020 © Adelphatech All Rights Reserved.
                            </p>
                            <ul className="social-media">
                                <li><a href="https://www.linkedin.com/company/adelpha-tech" target="_blank"><i className="fa fa-linkedin" aria-hidden="true" /></a></li>
                                <li><a href="AdelphaTech.html" target="_blank"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                                <li><a href="adelphatech/index.htm" target="_blank"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div> {/* end copyright */}
            </footer>
            <Helmet>







            </Helmet>




        </>)
}

export default Footer

