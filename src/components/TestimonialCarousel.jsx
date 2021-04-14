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
            // autoplay: true,
            autoplaySpeed: 2000
        }

        const testimonials = [
            {text: `My reading with David came at a very critical point in my life. I was feeling stuck, uninspired, and like I wasn’t living as the brave and creative woman I had once been. Not only did David provide a loving and detailed reading, but he truly cared about my interpretation and understanding of astrology and the intricacies of a birth chart. As if the nurturing space he provided wasn’t enough, David emailed me detailed notes before our call that I constantly refer back to. Our reading reignited a fire in me that had been dimmed for years.`,
            speaker: `Samantha Stallard, writer`},
    
    ]
        return(
            <div className="slider-container" style={{
            
            }}>
                <Slider ref={slider => (this.slider = slider)} {...settings} >
                    {testimonials.map(testimonial => (
                        <div className="testimonial-text">
                                <p>{testimonial.text}</p>
                                <p>— {testimonial.speaker}</p>
                        </div>
                    ))}
                </Slider>
            </div>
        )
    }
}

