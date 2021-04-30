import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArticlePreview from "./Article/article-preview";

export default class TestimonialCarousel extends Component {

    play() {
        this.slider.slickPlay();
    }
    pause() {
        this.slider.slickPause();
    }
    render(){
        const settings={
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            draggable: true,
            swipeToSlide: true,
            autoplaySpeed: 10000
        }

    console.log("testimonial page props", this.props.testimonials)
        return(
            <div className="slider-container">
                <Slider ref={slider => (this.slider = slider)} {...settings} >
                    {this.props.testimonials.map(testimonial => (
                        <div className="testimonial-text">
                                <p><em>"{testimonial.node.quote}"</em></p>
                                <p>— {testimonial.node.name}</p>
                        </div>
                    ))}
                </Slider>
            </div>
        )
    }
}

