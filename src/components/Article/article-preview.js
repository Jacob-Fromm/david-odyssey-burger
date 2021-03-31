import { Link } from 'gatsby'
import React from 'react'
import { urlFor } from '../../lib/image-url'


function ArticlePreview(props) {
    console.log("article props", props)
    return (
        <Link to={props.url}>
            <div >
                    <img
                        src={urlFor(props.image)
                            .width(600)
                            .height(Math.floor((9 / 16) * 600))
                            .url()}
                        alt={props.headline}
                    />
            </div>
            <h3 >{props.headline}</h3>
            <p>for {props.publication}</p>
        </Link>
    )
}

export default ArticlePreview
