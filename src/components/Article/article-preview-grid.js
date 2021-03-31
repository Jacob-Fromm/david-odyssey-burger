import { Link } from 'gatsby'
import React from 'react'
import ArticlePreview from './article-preview'

// import styles from '../project-preview.module.css'

function ArticlePreviewGrid(props) {
    console.log("article-preview-grid props", props)
    const articles = props.nodes
    return (
        <div >
            <Link to='/archive'>
                <h2 >{props.title}</h2>
            </Link>
            <ul >
                {props.nodes &&
                    props.articles.map(article => (
                        <li key={article.id}>
                            <ArticlePreview {...article.node} />
                        </li>
                    ))}
            </ul>
            {props.browseMoreHref && (
                <div>
                    <Link to={props.browseMoreHref}>Browse more</Link>
                </div>
            )}
        </div>
    )
}

ArticlePreviewGrid.defaultProps = {
    headline: '',
    nodes: [],
    browseMoreHref: ''
}

export default ArticlePreviewGrid
