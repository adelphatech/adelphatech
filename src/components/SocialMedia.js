import React from 'react'
import { Link, graphql } from 'gatsby'
import { useStaticQuery } from "gatsby";

import Footer from './Footer'
import Header from './Header'
const SocialMedia = () => {
    const data = useStaticQuery(graphql`
    query {
        allFooterJson(filter: {SocialMedia: {elemMatch: {CTALink: {ne: null}}}}) {
    
            nodes {
              SocialMedia {
                CTALink
                Title
              }
            
          }
        }
    }
  `);
    return (
        <>
            <ul className="social-media">
                {data.allFooterJson.nodes.map((node) => {
                    return node.SocialMedia
                        ? node.SocialMedia.map((q) => (
                            <>
                                <li><a href={q.CTALink} target="_blank"><i className={"fa fa-" + q.Title} aria-hidden="true" /></a></li>


                            </>
                        ))
                        : null;
                })}
                {/*    <li><a href="/Search"><i class="search-icon" aria-hidden="true"></i></a></li>*/}
            </ul>



        </>)
}

export default SocialMedia

