import React from 'react';
import ArticlesList from '../components/ArticleList'
import articleContent from './article-content'

const ArticlePage = ({match}) => {
    const name = match.params.name;
    const article = articleContent.find(article => article.name === name)

if (!article) return <h1>Article does not exit</h1>
    // provide a recomment article list excluding current one
    const otherArticles = articleContent.filter(article => article.name !== name)
    return (
        <>
        <h1>{article.title}</h1>
        {article.content.map((paragraph, key) => (
            <p key ={key}>{paragraph}</p>
        ))}
        <ArticlesList articles={otherArticles}/>
        </>
    );
    
};
export default ArticlePage;