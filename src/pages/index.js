import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

const index = ({ children }) => {

  return (
    <>
      <Layout> <div className="main-slider">
        <ul className="main-slider-item">
          <li>
            <img src="getattachment/f3554df2-93d8-43d1-965e-b49643f2021e/abstract-shape2.png" />
            <div className="bottom-slider">
              <img src="App_Themes/Adelphatech/images/bottom-main-slider.png" alt="" className />
            </div>
            <div className="container">
              <div className="slider-caption">
                <h2><span>Bringing</span><br />
                  projects <span>to </span> <span>Life</span></h2>
                <p>For over 7 years, clients have trusted us in supporting their software development needs at super competitive rates. We are experts in a variety of skillsets from web, cloud, mobile and desktop technologies. Take a look at some of our delivered projects, for companies small, medium and large.</p>
                <a href="Portfolio.html">SEE THE PROOF</a>
              </div>
            </div>
          </li>
        </ul>
        {/* slide mobile */}
        <div className="slider-mobile">
          <div className="slider-caption">
            <h2><span>Bringing</span><br />
              projects <span>to </span> <span>Life</span></h2>
            <p>For over 7 years, clients have trusted us in supporting their software development needs at super competitive rates. We are experts in a variety of skillsets from web, cloud, mobile and desktop technologies. Take a look at some of our delivered projects, for companies small, medium and large.</p>
            <a href="Portfolio.html">SEE THE PROOF</a>
          </div>
        </div>{/* end slide mobile */}
      </div>{/* end main slider */}
        {/*activity*/}
        <div className="activity-section">
          {/* container */}
          <div className="container">
            <div className="top-section">
              <h1><span>We are experts in the </span>following technologies</h1>
              <p>Digital transformation (Dx) is the change associated with the application of digital technology in all aspects of human life.</p>
            </div>
            {/* activity items */}
            <div className="items">
              <div className="col-service second">
                <div className="activity-item">
                  <a href="javascript:void(0)">
                    <div className="img-activity">
                      <img src="NewAdelphatech/media/_Adelphatech/img-digital-transformation.png" alt="" />
                    </div>
                  </a>
                  <div className="text-activity">
                    <h3>
                      <span>Web </span> development
                    </h3>
                    <p>HTML 4/5, CSS, Bootstrap, Javascript, Jquery, iOS, Android, AngularJS, BackboneJS, Gulp, Grunt, Bower, ReactJS, Photoshop, Sktech, Dart, Flutter</p>
                  </div>
                </div>
                <br />
                <br />
              </div>
              <div className="col-service third">
                <div className="activity-item">
                  <a href="javascript:void(0)">
                    <div className="img-activity">
                      <img src="NewAdelphatech/media/_Adelphatech/img-cloud.png" alt="" />
                    </div>
                  </a>
                  <div className="text-activity">
                    <h3>
                      <span>Backend </span> development
                    </h3>
                    <p>PHP, ASP.NET C#, Java, Node JS, Restful API</p>
                  </div>
                </div>
                <br />
                <br />
              </div>
              <div className="col-service first">
                <div className="activity-item">
                  <a href="javascript:void(0)">
                    <div className="img-activity">
                      <img src="NewAdelphatech/media/_Adelphatech/img-user-group.png" alt="" />
                    </div>
                  </a>
                  <div className="text-activity">
                    <h3>
                      <span>Frameworks</span>
                    </h3>
                    <p>Bootstrap, Symfony, Loopback, ionic, Phonegap, Code Igniter, CakePHP, Zend, Laravel, COBOL</p>
                  </div>
                </div>
                <br />
                <br />
              </div>
              <div className="col-service second">
                <div className="activity-item">
                  <a href="javascript:void(0)">
                    <div className="img-activity">
                      <img src="NewAdelphatech/media/_Adelphatech/img-digital-transformation.png" alt="" />
                    </div>
                  </a>
                  <div className="text-activity">
                    <h3>
                      <span>CMS </span> Applications
                    </h3>
                    <p>Wordpress, Drupal, Kentico, Ghost, Magento, Prestashop</p>
                  </div>
                </div>
                <br />
                <br />
              </div>
              <div className="col-service third">
                <div className="activity-item">
                  <a href="javascript:void(0)">
                    <div className="img-activity">
                      <img src="NewAdelphatech/media/_Adelphatech/img-cloud.png" alt="" />
                    </div>
                  </a>
                  <div className="text-activity">
                    <h3>
                      <span>Databases</span>
                    </h3>
                    <p>MySQL, MS SQL Server, SQL / T-SQL, Stored Procedures, MongoDB</p>
                  </div>
                </div>
                <br />
                <br />
              </div>
              <div className="col-service first">
                <div className="activity-item">
                  <a href="javascript:void(0)">
                    <div className="img-activity">
                      <img src="NewAdelphatech/media/_Adelphatech/img-user-group.png" alt="" />
                    </div>
                  </a>
                  <div className="text-activity">
                    <h3>
                      <span>Project </span> Management
                    </h3>
                    <p>Project Management, Agile/Scrum, JIRA, Bitbucket, Gitlab, Github</p>
                  </div>
                </div>
                <br />
                <br />
              </div>
            </div>{/* end activity items */}
          </div>{/* end container */}
        </div>{/*end activity*/}
        {/* adelphatech video */}
        <div className="adelphatech-video">
          <img src="App_Themes/Adelphatech/images/logo.PNG" alt="" />
          <div className="text-video video-link" data-video-id="OzztBkwLNe0">
            <img src="App_Themes/Adelphatech/images/play-interior-video.png" alt="" />
            <p>watch <span>video</span></p>
          </div>
        </div>{/* end adelphatech video */}
        {/* lastest works*/}
        <div className="latest-works-section">
          {/* container */}
          <div className="container">
            <div className="top-section">
              <h2><span>Latest</span> Projects</h2>
              <p>What has AdelphaTech been working on lately? See below for some of our recent projects.<br />
                Interested in more? <a href="Portfolio.html">Full portfolio &gt;</a></p>
            </div>
            {/* works items */}
            <div className="slider-latest-works">
              <div className="latest-works-item">
                <a href="index-1.htm">
                  <img src="getattachment/f331ad05-f975-4ed4-9a9e-7dff99b37179/Project-name-_1_.jpg" alt="" className="center-block img-responsive" />
                  <h4>International School Services</h4>
                </a>
                <h5>Kentico</h5>
              </div> <div className="latest-works-item">
                <a href="index-2.htm">
                  <img src="getattachment/2f02e629-e52a-4f87-b8fe-bcff3617de31/Project-name-_4_.jpg" alt="" className="center-block img-responsive" />
                  <h4>Kensington Health</h4>
                </a>
                <h5>Kentico</h5>
              </div> <div className="latest-works-item">
                <a href="central-toronto/index.htm">
                  <img src="getattachment/71b0727c-19c8-4d9f-bec8-925f660834d5/Project-name-_5_.jpg" alt="" className="center-block img-responsive" />
                  <h4>Tutor Doctor</h4>
                </a>
                <h5>Kentico</h5>
              </div> <div className="latest-works-item">
                <a href="en/index.htm">
                  <img src="getattachment/ff51cf9d-b2dd-4562-bbe1-bc52699c53fd/Project-name-_2_.jpg" alt="" className="center-block img-responsive" />
                  <h4>Webhelp Group</h4>
                </a>
                <h5>Drupal</h5>
              </div> <div className="latest-works-item">
                <a href="https://www.northfieldhospital.org/">
                  <img src="getattachment/b8344165-c2d4-47f5-8858-6668cdf9bb36/Project-name-_8_.jpg" alt="" className="center-block img-responsive" />
                  <h4>Northfield Hospital</h4>
                </a>
                <h5>Drupal</h5>
              </div> <div className="latest-works-item">
                <a href="http://www.bonavocat.ma/">
                  <img src="getattachment/6795a9fd-1b16-4974-9504-551103f036ab/Project-name-_14_.jpg" alt="" className="center-block img-responsive" />
                  <h4>Bon Avocat</h4>
                </a>
                <h5>Drupal</h5>
              </div> <div className="latest-works-item">
                <a href="index-3.htm">
                  <img src="getattachment/559abcb4-20eb-40d8-8f15-08253b8bd3ae/Project-name-_12_.jpg" alt="" className="center-block img-responsive" />
                  <h4>Maropost</h4>
                </a>
                <h5>Wordpress</h5>
              </div> <div className="latest-works-item">
                <a href="index.html">
                  <img src="getattachment/e1d76fd3-3b3a-42b7-b82d-8df46fab8db4/Project-name-_7_.jpg" alt="" className="center-block img-responsive" />
                  <h4>eSignal</h4>
                </a>
                <h5>Wordpress</h5>
              </div> <div className="latest-works-item">
                <a href="index-4.htm">
                  <img src="getattachment/62e298c3-b121-4a53-9ef9-eb3de007430e/Project-name-_13_.jpg" alt="" className="center-block img-responsive" />
                  <h4>360 Cloud Solutions</h4>
                </a>
                <h5>Wordpress</h5>
              </div> <div className="latest-works-item">
                <a href="store/apps/details.html?id=com.jsdev.instasize&hl=en">
                  <img src="getattachment/cf9fe840-aaf1-43b1-8c07-55cd2ffb2143/Project-name.jpg" alt="" className="center-block img-responsive" />
                  <h4>InstaSize</h4>
                </a>
                <h5>Android</h5>
              </div> <div className="latest-works-item">
                <a href="https://play.google.com/store/apps/details?id=com.adelphatech.tutordoctor&hl=en">
                  <img src="getattachment/3ddc37eb-9767-4011-9f6b-eddea3eead8a/Project-name-_9_.jpg" alt="" className="center-block img-responsive" />
                  <h4>Tutor Doctor App</h4>
                </a>
                <h5>Android</h5>
              </div> <div className="latest-works-item">
                <a href="https://play.google.com/store/apps/details?id=com.fixxbook.privatenetwork&hl=en">
                  <img src="getattachment/7f387f71-a1b0-4308-8de9-4afaffab5e10/Project-name-_10_.jpg" alt="" className="center-block img-responsive" />
                  <h4>Fixxbook App</h4>
                </a>
                <h5>Android</h5>
              </div> <div className="latest-works-item">
                <a href="us/app/instasize-picture-editor-photo-effects-collage/id576649830.html?mt=8">
                  <img src="getattachment/5ceb8e98-ac8f-4f77-bde1-f94d9a1b8374/Project-name-_11_.jpg" alt="" className="center-block img-responsive" />
                  <h4>InstaSize iOS</h4>
                </a>
                <h5>iOS</h5>
              </div> <div className="latest-works-item">
                <a href="us/app/annot8-photo-annotation-markup-tool/id1132497535.html?mt=8">
                  <img src="getattachment/402d7274-5a3c-4bc2-b2b6-a328a79d07c8/Project-name-_3_.jpg" alt="" className="center-block img-responsive" />
                  <h4>Annot8</h4>
                </a>
                <h5>iOS</h5>
              </div> <div className="latest-works-item">
                <a href="emojis/index.htm">
                  <img src="getattachment/d2f84896-7a91-4787-b42a-2f1b1e7db1b4/Project-name-_6_.jpg" alt="" className="center-block img-responsive" />
                  <h4>CBC</h4>
                </a>
                <h5>iOS</h5>
              </div>
            </div>{/* end works items */}
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
            <div className="top-testimonials">
              <h2>testimonials</h2>
              <p>Lets see what say clients about us</p>
            </div>
            <div className="silder-testimonials">
              <div className="testimonial-left">
                <div className="text">
                  <p> Consultancies are often an unknown, and you never know what your actual experience will be. Adelphatech has exceeded our expectations by performing work at a high level of competence, within budget, ahead of schedule.
                  </p>
                  <h5>Malcolm <span>S.</span></h5>
                  <h6>CIO, <span>ISS</span></h6>
                </div>
                <div className="img-testimonial">
                  <img src="getattachment/bc73e357-0017-4f8f-8ce9-63ece57e7173/ISS.jpg" alt="" />
                </div>
              </div>
              <div className="testimonial-right">
                <div className="img-testimonial">
                  <img src="getattachment/e7e925e5-619d-4388-9f49-f659b115ece1/Deloitte.jpg" alt="" />
                </div>
                <div className="text">
                  <p>AdelphaTech has been a tremendous help to my team at Deloitte. As part of our innovation agenda, we are working on developing technology that opens up new business models for Deloitte. AdelphaTech has been instrumental in helping us develop our strategy. Their business-focus approach to building and deploying technology has proven to be a successful way to solve our clients' business problems.
                  </p>
                  <h5>Matthew <span>S.</span></h5>
                  <h6>Team Lead, <span>Deloitte</span></h6>
                </div>
              </div> <div className="testimonial-left">
                <div className="text">
                  <p>AdelphaTech provides high quality service, attention to detail, and insightful observations when working on a project. I would not hesitate to recommend AdelphaTech for any project.
                  </p>
                  <h5>Richard <span>.C</span></h5>
                  <h6>Director of IT, <span>PMCF</span></h6>
                </div>
                <div className="img-testimonial">
                  <img src="getattachment/bf20de0a-4592-4f48-8344-77289156d10a/UHN.jpg" alt="" />
                </div>
              </div>
              <div className="testimonial-right">
                <div className="img-testimonial">
                  <img src="getattachment/960b1f0e-4b40-42ec-b57f-8d2acdbdc5af/Tutor-Doctor.jpg" alt="" />
                </div>
                <div className="text">
                  <p>The team at AdelphaTech is extremely skilled, reliable, organized and communicative. They write very clean code that is easy to maintain, and always makes sure they are hitting deadlines.
                  </p>
                  <h5>Adele <span>.C</span></h5>
                  <h6>Franchisee, <span>Tutor Doctor</span></h6>
                </div>
              </div> <div className="testimonial-left">
                <div className="text">
                  <p>Our app has millions of users and so the team working with us had to be top-of-the-line. AdelphaTech has delivered a terrific mobile app on-time and on-budget. The customer service was excellent as we went through the complicated process of porting from iOS to Android.
                  </p>
                  <h5>Eddy <span>H.</span></h5>
                  <h6>COO, <span>InstaSize</span></h6>
                </div>
                <div className="img-testimonial">
                  <img src="getattachment/34773bc0-6a1e-4800-86fe-177f674eb6f8/Instasize.jpg" alt="" />
                </div>
              </div>
              <div className="testimonial-right">
                <div className="img-testimonial">
                  <img src="getattachment/97eaa689-98bd-4ce0-bce7-fac9e9e48677/KH.png" alt="" />
                </div>
                <div className="text">
                  <p>AdelphaTech is a true bunch of professionals who provided excellent customer service and creative solutions to improving our on-line giving portal. I would highly recommend AdelphaTech to any organization looking for someone who is hard working, deadline oriented, creative and provides solutions to their on-line platform. Kudos AdelphaTech!
                  </p>
                  <h5>Kim <span>S.</span></h5>
                  <h6>Manager, <span>Kensington Health</span></h6>
                </div>
              </div>
            </div>
          </div>{/* end container */}
        </div>{/* end testimonials */}
        {/* our customers*/}
        <div className="our-customers">
          {/* container */}
          <div className="container">
            <div className="top-section">
              <h2>
                <span>Our </span> Partners
              </h2>
              <div className="silder-customers">
                <div>
                  <img src="getattachment/e60f08f1-6a7b-467a-a44c-773ecb5a43b0/Asics.png" alt="Asics" className="center-block" />
                </div>
                <div>
                  <img src="getattachment/6995922f-39c7-4cf5-b154-2811f1e4db22/Webhelp.png" alt="Webhelp Group" className="center-block" />
                </div>
                <div>
                  <img src="getattachment/bb5f51cb-4960-42c5-b38b-e6622710f182/Deloitte.png" alt="Deloitte" className="center-block" />
                </div>
                <div>
                  <img src="getattachment/8aa0ddab-2fc2-49fd-8675-d2550d8c66b9/ISS.png" alt="International School Services" className="center-block" />
                </div>
                <div>
                  <img src="getattachment/3a2ad5cf-9d3e-47fa-a7d0-85959ce2d480/Nespresso.png" alt="Nespresso" className="center-block" />
                </div>
                <div>
                  <img src="getattachment/66edc7dd-6c32-45c0-9165-cb32856e7561/OCAD.png" alt="OCAD" className="center-block" />
                </div>
                <div>
                  <img src="getattachment/c9622026-acb0-46e8-800b-3918ecbc6665/Trillium.png" alt="Trillium" className="center-block" />
                </div>
                <div>
                  <img src="getattachment/5a0936c1-bfa3-49a6-bdd8-607439fb0138/Kentico.png" alt="Kentico" className="center-block" />
                </div>
                <div>
                  <img src="getattachment/04f99104-66cc-46a4-8944-9483542fdf4f/Morocco-Government.png" alt="Government of Morocco" className="center-block" />
                </div>
                <div>
                  <img src="getattachment/49f1d544-efc8-4745-9dd5-73d12a1fb774/Kensington.png" alt="Kensington Health" className="center-block" />
                </div>
                <div>
                  <img src="getattachment/e88f53bd-05ec-4850-9527-5db0655f1265/Tutor-Doctors.png" alt="Tutor Doctor" className="center-block" />
                </div>
                <div>
                  <img src="getattachment/eaff8750-057b-49ae-9eab-ddc9afc0e336/CBC.png" alt="Canadian Broadcasting Corp" className="center-block" />
                </div>
                <div>
                  <img src="getattachment/947f0314-619a-4bee-84cd-8204ae6fec8d/UHN.png" alt="University Health Network" className="center-block" />
                </div>
                <div>
                  <img src="getattachment/dec00243-b48e-4a72-ace9-1a2408d9e68e/Axa-services.png" alt="AXA Services" className="center-block" />
                </div>
                <div>
                  <img src="getattachment/ecacb918-fb12-452b-896d-a9d03960cea7/Google.png" alt="Google" className="center-block" />
                </div>
              </div>
            </div>
          </div>{/* end container */}
        </div>{/* end our customers*/}
        {/* subscribe now */}
        <div className="subscribe-now">
          <img src="App_Themes/Adelphatech/images/bg-subscribe-now.png" alt="" />
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

export default index

