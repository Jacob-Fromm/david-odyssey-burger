import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArticlePreview from "./Article/article-preview";

export default class ArticleCarousel extends Component {

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
            autoplaySpeed: 2000
        }

        const articles = this.props.articles
        return(
            <div className="slider-container" style={{
                width: '30vw',
                margin: '1em'
            }}>
                <Slider ref={slider => (this.slider = slider)} {...settings} >
                    {articles.map(article => (
                        <div className="article-grid">
                            <li key={article.id} >
                                <ArticlePreview {...article.node} />
                            </li>
                        </div>
                    ))}
                </Slider>
            </div>
        )
    }
}

