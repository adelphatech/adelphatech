import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

export default function Index({ data }) {
  const Hero = data.Hero.nodes;
  const Technologies = data.Technologies.nodes
  const Video = data.Video.nodes
  const Projects = data.Projects.nodes
  const Testimonials = data.Testimonials.nodes
  const Partners = data.Partners.nodes


  return (
    <>
      <Layout> <div className="main-slider">
        <ul className="main-slider-item">
          {Hero.map((node, index) => {
            return (
              <>
                <li>
                  <img src="../img/abstract-shape2.png" />
                  <div className="bottom-slider">
                    <img src="../img/bottom-main-slider.png" alt="" className />
                  </div>
                  <div className="container">
                    <div className="slider-caption">
                      <h2><span>{node.FirstHeading} </span><br />
                        {node.SecondHeading} <span>{node.ImageHeading}</span></h2>
                      <p>{node.Description}</p>
                      <a href={node.CTALink}>{node.CTAText}</a>
                    </div>
                  </div>
                </li>
              </>
            );
          })}

        </ul>
        {/* slide mobile */}
        <div className="slider-mobile">
          {Hero.map((node, index) => {
            return (
              <>
                <div className="slider-caption">
                  <h2><span>{node.FirstHeading}</span><br />
                    {node.SecondHeading} <span>{node.ImageHeading}</span></h2>
                  <p>{node.Description}</p>
                  <a href={node.CTALink}>{node.CTAText}</a>
                </div>
              </>
            );
          })}

        </div>{/* end slide mobile */}
      </div>{/* end main slider */}
        {/*activity*/}
        <div className="activity-section">
          {/* container */}
          <div className="container">
            {Technologies.map((node, index) => {
              return (
                <>
                  <div className="top-section">
                    <h1>{node.TechnlogiesTitle}</h1>
                    <p>{node.TechnlogiesDescription}</p>
                  </div>
                  <div className="items ">

                    {node?.OurTechnologies?.length > 0 &&
                      node.OurTechnologies.map((node2) => (
                        <div className={'col-service' + " " + node2.Order}>
                          <div className="activity-item">
                            <a href="javascript:void(0)">
                              <div className="img-activity">
                                <img src={node2.TechnologyImage} alt="" />
                              </div>
                            </a>
                            <div className="text-activity">
                              <h3>
                                {node2.TechnologyTitle}
                              </h3>
                              <p>{node2.TechnologyDescirption}</p>
                            </div>
                          </div>
                          <br />
                          <br />
                        </div>

                      ))}

                  </div>
                </>
              );
            })}

            {/* activity items */}
          </div>
        </div>{/* end activity items */}
        {/* end container */}
        {/*end activity*/}
        {/* adelphatech video */}
        {Video.map((node, index) => {
          return (
            <>
              <div className="adelphatech-video">
                <img src={node.VideoImage} alt="" />
                <div className="text-video video-link" data-video-id={node.VideoSource}>
                  <img src="../img/play-interior-video.png" alt="" />
                  <p>watch <span>video</span></p>
                </div>
              </div>
            </>
          );
        })}

        {/* end adelphatech video */}
        {/* lastest works*/}
        <div className="latest-works-section">
          {/* container */}
          <div className="container">
            {Projects.map((node, index) => {
              return (
                <>
                  <div className="top-section">
                    <h2>{node.ProjectsTitle}</h2>
                    <p>
                      {node.ProjectsDescription} <a href={node.ProjectsCTALink}>{node.ProjectsCTAText}</a></p>
                  </div>
                  <div className="slider-latest-works">

                    {node?.LatestProjects?.length > 0 &&
                      node.LatestProjects.map((node2) => (
                        <div className="latest-works-item">
                          <a href="index-1.htm">
                            <img src={node2.ProjectImage} alt="" className="center-block img-responsive" />
                            <h4>{node2.ProjectTitle}</h4>
                          </a>
                          <h5>{node2.ProjectSubTitle}</h5>
                        </div>
                      ))}

                  </div>
                </>
              );
            })}
            {/* end works items */}
          </div>{/* end container */}
          <svg className="defs-only">
            <filter id="monochrome" colorInterpolationFilters="sRGB" x={0} y={0} height="100%" width="100%">
              <feColorMatrix type="matrix" values="0.95 0 0 0 0.05
              0.85 0 0 0 0.15
              0.50 0 0 0 0.50
              0    0 0 1 0" />
            </filter>
          </svg>
        </div>{/* lastest works*/}
        {/* testimonials */}
        <div className="testimonials-section">
          {/* container */}
          <div className="container">
            {Testimonials.map((node, index) => {
              return (
                <>
                  <div className="top-testimonials">
                    <h2>{node.TestimonialsTitle}</h2>
                    <p>{node.TestimonialsSubTitle}</p>
                  </div>
                  <div className="silder-testimonials ">

                    {node?.LatestTestimonials?.length > 0 &&
                      node.LatestTestimonials.map((node2) => (
                        <>
                          <div className="testimonial-right">
                            <div className="img-testimonial">
                              <img src={node2.TestimonialImage} alt="" />
                            </div>
                            <div className="text">
                              <p>{node2.TestimonialDescription}</p>
                              <h5>{node2.TestimonialName}</h5>
                              <h6>{node2.TestimonialFunction}</h6>
                            </div>
                          </div>
                        </>
                      ))}

                  </div>
                </>
              );
            })}

          </div>{/* end container */}
        </div>{/* end testimonials */}
        {/* our customers*/}
        <div className="our-customers">
          {/* container */}
          <div className="container">
            {Partners.map((node, index) => {
              return (
                <>
                  <div className="top-section">
                    <h2>
                      {node.PartnersTitle}
                    </h2>

                    <div className="silder-customers">

                      {node?.OurPartners?.length > 0 &&
                        node.OurPartners.map((node2) => (
                          <div>

                            <img src={node2.PartnerImage} alt="" className="center-block" />
                          </div>


                        ))}

                    </div>
                  </div>
                </>
              );
            })}

          </div>{/* end container */}
        </div>{/* end our customers*/}
        {/* subscribe now */}
        <div className="subscribe-now">
          <img src="../img/bg-subscribe-now.png" alt="" />
          {/* container */}
          <div className="container">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <h3>Stay connected</h3>
              <p>Subscribe to our monthly whitepapers to learn how technology is being used by businesses just like yours.</p>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <div className="form-subscribe">
                <div className="form-group">
                  <div id="p_lt_ctl09_NewsletterSubscription_pnlSubscription" className="Subscription">
                    <div className="NewsletterSubscription">
                      <div className="form-horizontal">
                        <div className="form-group">
                          <div className="editing-form-label-cell">
                            <label htmlFor="p_lt_ctl09_NewsletterSubscription_txtEmail" id="p_lt_ctl09_NewsletterSubscription_lblEmail" className="control-label">Email:</label>
                          </div>
                          <div className="editing-form-value-cell">
                            <input name="p$lt$ctl09$NewsletterSubscription$txtEmail" type="text" maxLength={400} id="p_lt_ctl09_NewsletterSubscription_txtEmail" className="form-control" />
                          </div>
                        </div>
                        <div className="form-group form-group-submit">
                          <input type="submit" name="p$lt$ctl09$NewsletterSubscription$btnSubmit" defaultValue="Subscribe" id="p_lt_ctl09_NewsletterSubscription_btnSubmit" className="SubscriptionButton btn btn-primary" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{/* end container */}
        </div> </Layout>

    </>)
}


export const query = graphql`
  query {
  Hero:  allHomeJson(filter: {FirstHeading: {ne: null}}) {
      nodes {
        FirstHeading
        ImageHeading
        SecondHeading
        Description
        CTAText
        CTALink
      }
    }
    Video:allHomeJson(filter: {VideoSource: {ne: null}}) {
      nodes {
        VideoImage
        VideoSource
      }
    } 
   Projects: allHomeJson(filter: {ProjectsTitle: {ne: null}}) {
      nodes {
        LatestProjects {
          ProjectImage
          ProjectSubTitle
          ProjectTitle
        }
        ProjectsCTALink
        ProjectsCTAText
        ProjectsDescription
        ProjectsTitle
      }
    } 
    Partners:  allHomeJson(
      filter: { PartnersTitle: {ne: null}}
    ) {
      nodes {
        PartnersTitle
        OurPartners {
          PartnerImage
        }
      }
    }
   Testimonials:  allHomeJson(filter: {TestimonialsTitle: {ne: null}}) {
    nodes {
      TestimonialsSubTitle
      TestimonialsTitle
      LatestTestimonials {
        TestimonialDescription
        TestimonialFunction
        TestimonialImage
        TestimonialName
      }
    }
  }  
   Technologies: allHomeJson(filter: {TechnlogiesTitle: {ne: null}}) {
      nodes {
        TechnlogiesTitle
        TechnlogiesDescription
        OurTechnologies {
          TechnologyDescirption
          TechnologyImage
          TechnologyTitle
          Order
        }
      }
    }  
  }
`;
