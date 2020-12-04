import React from "react";
import "./css/landingPage.css";
import "./css/landingPageIntro.css";
import "./css/landingPageOurServices.css";
import "./css/landingPageTestimonial.css"
import "./css/landingPageDevelopersCards.css"
import "../../../src/index.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./css/landingPageTestimonial.css"
import { Carousel } from 'react-responsive-carousel';

import Video from "./video";
import OurServices from "../data/our_services";
import Developers from "../data/developers";
import PhotographersCards from "../PhotographersCards";

import Logo from "../images/logo3.png";
import Img1 from "../images/baby7.jpeg";
import Img2 from "../images/graduate7.jpg";
import Img3 from "../images/couples9.jpg";
import Img4 from "../images/graduate2.jpg";
import Img5 from "../images/graduate1.jpg";
import Img6 from "../images/developer1.jpg";
import Img7 from "../images/developer2.jpg";
import Img8 from "../images/developer3.jpg";

class LandingPage extends React.Component {
    render() {
        return (
            <div>
                <PageIntro logo={Logo} />
                <OurServicesSections services={OurServices} />
                <Videos />
                <Testimonials />
                <DeveloperCards developers={Developers} />
                <PhotographersCards />
            </div>
        );
    }
}

class PageIntro extends React.Component {
    render() {
        return (
        <div className="landing_page_intro">
            <div className="intro_left_part">
            <div className="intro_title">MEMORIES WORTH CHERISHING</div>
            <div>
                Create the memories and celebrate the magic with Damsa - a
                beautifully designed photography sessions website that has it all.
            </div>
            {/* <div><img src={this.props.logo}></img></div> */}
            <div>
                <button className="btn1">Our Services</button>
            </div>
            </div>
            <div className="intro_right_part">
            <div className="landing_page_grid">
                <div className="landing_page_grid_item1">
                <img src={Img1}></img>
                </div>
                <div className="landing_page_grid_item2">
                <img src={Img2}></img>
                </div>
                <div className="landing_page_grid_item3">
                <img src={Img3}></img>
                </div>
                <div className="landing_page_grid_item4">
                <img src={Img4}></img>
                </div>
                <div className="landing_page_grid_item5">
                <img src={Img5}></img>
                </div>
            </div>
            </div>
        </div>
        );
    }
}

class OurServicesSections extends React.Component {
    render() {
        return (
        <div className="our_services_container">
            <div className="intro_title"> Our Services</div>
            <hr className="mb-5" />
            {this.props.services.map((service) => (
            <OurServicesSection key={service.id} service={service} />
            ))}
        </div>
        );
    }
}

class OurServicesSection extends React.Component {
    render() {
        return (
        <div className="our_services_section">
            <div className="opaque_container">
            <div className="opaque_container_title">
                {this.props.service.title}
            </div>
            <div>{this.props.service.description} </div>
            </div>
            <div className="our_services_left_part">
            <img src={this.props.service.img1}></img>
            </div>
            <div className="our_services_right_part">
            <div className="our_services_right_part_img1">
                <img src={this.props.service.img2}></img>
            </div>
            <div className="our_services_right_part_img2">
                {" "}
                <img src={this.props.service.img3}></img>
            </div>
            <div className="our_services_right_part_img1">
                <img src={this.props.service.img4}></img>
            </div>
            </div>
        </div>
        );
    }
}

class Videos extends React.Component {
    constructor() {
        super();
        this.state = {
            videos: [],
        };
}
async componentDidMount() {
    const url =
        "https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails&maxResults=5&playlistId=PL9Fw1J2bLM2FwcSUEVmjlNDGDIjgX1f4X&key=AIzaSyBdxvztZnz4ZOl-ShY06LoMVx8_UeGDZck";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ videos: data.items });
}
    render() {
        const { videos } = this.state;
        const renderVideos = videos.map((video) => {
            return <Video key={video.contentDetails.videoId} video={video} />;
        });
        return (
            <div>
                <div className="intro_title"> Tips For You</div>
                <div className="videos_section">{renderVideos}</div>
            </div>
        );
    }
}

class Testimonials extends React.Component{
    render(){
        return(
            <div className="testimonials_section">
                <div className="intro_title">Testimonials</div>
                <Carousel
                showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                interval={6100}>
                <div>
                <img src={Img6} />
                <div className="myCarousel">
                    <h3>Shirley Fultz</h3>
                    <h4>Designer</h4>
                    <p>
                    It's freeing to be able to catch up on customized news and not be
                    distracted by a social media element on the same site
                    </p>
                </div>
                </div>
        
                <div>
                <img src={Img7} />
                <div className="myCarousel">
                    <h3>Daniel Keystone</h3>
                    <h4>Designer</h4>
                    <p>
                    The simple and intuitive design makes it easy for me use. I highly
                    recommend Fetch to my peers.
                    </p>
                </div>
                </div>
        
                <div>
                <img src={Img8} />
                <div className="myCarousel">
                    <h3>Theo Sorel</h3>
                    <h4>Designer</h4>
                    <p>
                    I enjoy catching up with Fetch on my laptop, or on my phone when
                    I'm on the go!
                    </p>
                </div>
                </div>
            </Carousel>
          </div>
        )
    }
}

class DeveloperCards extends React.Component{
    render(){
        return(
            <div className="developers_section">
                <div className="intro_title">Our Developers</div>
                <div className="developers_cards">
                {this.props.developers.map((developer) => <DeveloperCard key={developer.id} developer={developer}/>) }
                </div>
            </div>
        )
    }
}

class DeveloperCard extends React.Component{
    render(){
        return(
            <div className="landing_page_card">
                    <div className="user_picture">
                        <img src={this.props.developer.picture} alt="user picture"></img> 
                    </div>
                    <div className="card_body">
                        <div><h3>{this.props.developer.name}</h3></div>
                        <div className="location">{this.props.developer.location}</div>
                        <div className="major">{this.props.developer.major}</div>
                        <div className="description">{this.props.developer.description}</div>
                        <div className="social_media_links">
                            <a href={this.props.developer.github_link}><i className="fab fa-github"></i></a>
                            <a href={this.props.developer.linkedin_link}><i className="fab fa-linkedin"></i></a>
                            <a href={this.props.developer.facebook_link}><i className="fab fa-facebook"></i></a>
                        </div>
                    </div>
            </div>
        )
    }
}



export default LandingPage;

   {/* <div class="row">
                    <div class="example-1 card">
                        <div class="wrapper">
                        <div class="data">
                            <div class="content">
                            <span class="author">Jane Doe</span>
                            <h1 class="title"><a href="#">Boxing icon has the will for a couple more fights</a></h1>
                            <p class="text">The highly anticipated world championship fight will take place at 10am and is the second major boxing blockbuster in the nation after 43 years.</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div> */}
