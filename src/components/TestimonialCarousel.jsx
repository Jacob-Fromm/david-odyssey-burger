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
            draggable: true,
            swipeToSlide: true,
            autoplaySpeed: 10000
        }

        const testimonials = [
            {text: `My reading with David came at a very critical point in my life. I was feeling stuck, uninspired, and like I wasn’t living as the brave and creative woman I had once been. Not only did David provide a loving and detailed reading, but he truly cared about my interpretation and understanding of astrology and the intricacies of a birth chart. As if the nurturing space he provided wasn’t enough, David emailed me detailed notes before our call that I constantly refer back to. Our reading reignited a fire in me that had been dimmed for years.`,
            speaker: `Samantha Stallard, writer`},
            {text: `What I loved about my reading with David was that he clearly has a deep, intricate knowledge of astrology that is paired with his superb communication skills which allows him to share a huge amount of ideas and information in a way that is easily understandable and digestible. In my reading I felt free to ask questions and was always satisfied with the answers. I left my reading feeling empowered and hopeful, with knew information and understandings of myself that I still use today.`,
            speaker: `Jake Cornell, comedian`},
            {text: `My reading with David was nothing short of life-changing. I booked a reading with David to ring in my 30th birthday and thanks to him, I crossed that threshold feeling radiant, confident, and inspired. David is a wise soul, deeply creative, highly intuitive, and the definition of warmth and humor. The way he guided me through my chart, the information he shared, the safe space he created energetically, and his patience and collaboration in answering questions and exploring new territory totally blew my mind. I felt so seen and understood, and at the same time, awakened to new aspects of myself and areas of growth I'd never even considered before. David imbues his readings with such care, generosity, and specificity - I couldn't recommend him more for a guaranteed mindset-shift, energy boost, and cosmic spiritual experience! `,
            speaker: `Emily Olcott, writer and performer`}
    
    ]
        return(
            <div className="slider-container">
                <Slider ref={slider => (this.slider = slider)} {...settings} >
                    {testimonials.map(testimonial => (
                        <div className="testimonial-text">
                                <p>"{testimonial.text}"</p>
                                <p>— {testimonial.speaker}</p>
                        </div>
                    ))}
                </Slider>
            </div>
        )
    }
}

