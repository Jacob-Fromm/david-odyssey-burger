import { Link } from 'gatsby'
import React from 'react'
import ArticlePreview from './article-preview'


function ArticlePreviewGrid(props) {
    console.log("APG props ", props)
    const articles = props.articles
    return (
        <div className="article-root">
            <div className="bio-text">
                <h2 id="writing-title">{props.title}</h2>
            </div>
            <ul className="article-grid">
                {props.nodes &&
                    articles.map(article => (
                        <li key={article.id}>
                            <ArticlePreview {...article.node} />
                        </li>
                    ))}
            </ul>
    </div>
    )
}

ArticlePreviewGrid.defaultProps = {
    headline: '',
    nodes: [],
    browseMoreHref: ''
}

export default ArticlePreviewGrid
