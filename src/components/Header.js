import React from 'react'
import { Link, graphql } from 'gatsby'
import { useStaticQuery } from "gatsby";

import "../assets/css/Adelphatech.css";
import "../assets/css/1-bootstrap.css";
import "../assets/css/2-font-awesome.min.css";
import "../assets/css/4-owl.carousel.css";
import "../assets/css/5-owl.theme.css";
import "../assets/css/6-responsive-menu.css";
import "../assets/css/7-main.css";
import "../assets/css/jquery.bxslider.css";
import SocialMedia from './SocialMedia';


const Header = () => {
    const data = useStaticQuery(graphql`
    query {
      allMenuJson(
        sort: { fields: Order, order: ASC }
        filter: { CTAText: { ne: null } }
      ) {
        edges {
          node {
            CTALink
            CTAText
            Order
          }
        }
      }
    }
  `);


    return (
        <>

            <header id="header">
                {/* <div class="top-header">
        <img src="/App_Themes/Adelphatech/images/top-header.png" alt="">
        <div class="container">
            <p>Bonjour - Nous parlons français aussi &gt;&gt;



</p>
            <a class="fr" href="?lang=fr-fr"></a>
          <a class="en" href="?lang=en-us"></a>
        </div>
    </div>*/}
                {/* bottom-header */}
                <div className="bottom-header">
                    {/* container */}
                    <div className="container">
                        <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3">
                            <a href="/"><img id="p_lt_ctl01_EdtHeaderLogo_ucEditableImage_imgImage" src="../img/logo-header.png?ext=.png" alt="" />
                            </a>
                        </div>
                        <div className="col-xs-6 col-sm-9 col-md-9 col-lg-9">
                            {/* desktop menu */}
                            <div className="col-xs-6 col-sm-8 col-md-8 col-lg-9">
                                <nav className="desktop-menu">
                                    <ul id="menuElem" className="nav navbar-nav CMSListMenuUL">
                                        {data.allMenuJson.edges.map(({ node, index }) => {
                                            return (
                                                <>
                                                    <li className="nav navbar-nav CMSListMenuHighlightedLI">
                                                        <a className="nav navbar-nav " href={node.CTALink}>{node.CTAText}</a>
                                                    </li>
                                                </>
                                            );
                                        })}

                                    </ul>
                                </nav>{/* end desktop menu */}
                            </div>
                            <div className="col-xs-6 col-sm-4 col-md-4 col-lg-3">
                                <SocialMedia />
                            </div>
                            {/* mobile menu */}
                            <div id="o-wrapper" className="o-wrapper">
                                <div className="c-buttons">
                                    <button type="button" data-toggle="collapse" id="c-button--slide-right" data-target="#navbar-collapse-2" className="c-button navbar-toggle">
                                        <span className="icon-bar" />
                                        <span className="icon-bar" />
                                        <span className="icon-bar" />
                                    </button>
                                </div>
                            </div>
                            <div id="c-menu--slide-right" className="c-menu c-menu--slide-right mobile-menu">
                                <nav className="mobile-menu">
                                    <button className="c-menu__close">Close Menu →</button>
                                    <ul id="menuElem" className="c-menu__itemsCMSListMenuUL">
                                        <li className="c-menu__itemsCMSListMenuHighlightedLI">
                                            <a className="c-menu__itemsCMSListMenuLinkHighlighted" href="Home.html">Home</a>
                                        </li>
                                        <li className="c-menu__itemsCMSListMenuLI">
                                            <a className="c-menu__itemsCMSListMenuLink" href="About.html">About</a>
                                        </li>
                                        <li className="c-menu__itemsCMSListMenuLI">
                                            <a className="c-menu__itemsCMSListMenuLink" href="Portfolio.html">Portfolio</a>
                                        </li>
                                        <li className="c-menu__itemsCMSListMenuLI">
                                            <a className="c-menu__itemsCMSListMenuLink" href="Contact.html">Contact</a>
                                        </li>
                                    </ul>
                                </nav>
                                <ul className="social-media social-media-mobile">
                                    <li><a href="https://www.linkedin.com/company/adelpha-tech" target="_blank"><i className="fa fa-linkedin" aria-hidden="true" /></a></li>
                                    <li><a href="AdelphaTech.html" target="_blank"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                                    <li><a href="adelphatech/index.htm" target="_blank"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                                </ul>
                            </div>
                            <div id="c-mask" className="c-mask" />{/* end mobile menu */}
                        </div>
                    </div>{/* end container */}
                </div>{/* end bottom-header */}
            </header>



        </>)
}

export default Header

