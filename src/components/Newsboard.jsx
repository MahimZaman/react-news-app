import React, { useState, useEffect } from "react";
import { NewsItem } from "./NewsItem";

export const Newsboard = ({category, region}) => {
  const [articles, setArticles] = useState([]);

  const getNews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${region}&category=${category}&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      if (!response.ok) {
        console.error("Error fetching articles");
        return;
      }

      setArticles(data.articles);
    } catch (error) {
      console.error("Error fetching news");
    }
  };

  useEffect(() => {
    getNews();
  }, [category]);

  return (
    <div>
      <h2 className="text-center mt-5">
        Latest <span className="badge bg-danger">{category.charAt(0).toUpperCase() + category.slice(1)}</span>
      </h2>
      <div className="container py-5 px-3 d-flex align-items-stretch flex-wrap gap-4">
        {articles.map((article, index) => {
          return (
            <NewsItem
              key={index}
              title={article.title}
              desc={article.description}
              author={article.author}
              image={article.urlToImage}
              url={article.url}
            />
          );
        })}
      </div>
    </div>
  );
};
