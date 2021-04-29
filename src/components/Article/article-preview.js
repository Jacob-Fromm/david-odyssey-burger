import { Link } from 'gatsby'
import React from 'react'
import { urlFor } from '../../lib/image-url'
import styles from '../project-preview.module.css'
import { responsiveTitle3, responsiveTitle4 } from '../typography.module.css'
import { cn, buildImageObj } from '../../lib/helpers'

function ArticlePreview(props) {
    const linkStyles = {
        textDecoration: 'none',
        color: 'black'
    }

    console.log(props)
    return (
        <Link style={linkStyles} to={props.url}>

            <div className='article-preview'>
                <img
                    src={urlFor(props.image)
                        .width(400)
                        .height(Math.floor((9 / 16) * 600))
                        .url()}
                    alt={props.headline}
                />
            <h3 >{props.headline}</h3>
            {props.publication.name ? <h5>for <em>{props.publication.name}</em> on {props.publicationDate}</h5> : ""}
            </div>
        </Link>
    )
}

export default ArticlePreview
