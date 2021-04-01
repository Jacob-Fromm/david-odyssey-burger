import { Link } from 'gatsby'
import React from 'react'
import ArticlePreview from './article-preview'


function ArticlePreviewGrid(props) {
    const articles = props.nodes
    return (
        <div className="article-root">
                <h1>{props.title}</h1>
            <ul className="article-grid">
                {props.nodes &&
                    props.articles.map(article => (
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
