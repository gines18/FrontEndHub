import { useEffect, useState } from "react";
import * as React from "react";

function News() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const apikey = "2e7a023c0e31506f9945a4fc2eedac41";
    const url =
      "https://gnews.io/api/v4/search?q=example&eng=en&gb=us&max=10&apikey=" +
      apikey;

    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setArticles(data.articles);
        console.log(data.articles);
      });
  }, []);

  return (
    <>
<div className="compo">
      <div className="news-component">
        {articles.map((article, index) => (
          <div className="card-news" key={index}>
            <img src={article.image} style={{ width: "100%" }} alt="" />
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <a href={article.url} target="_blank">Read</a>
          </div>
        ))}
      </div>
      </div>
    </>
  );
}

export default News;
