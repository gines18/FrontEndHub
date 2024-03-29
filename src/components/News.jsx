import { useEffect, useState } from "react";
import * as React from "react";

function News() {
  const [articles, setArticles] = useState([]);
  const [showArticles, setShowArticles] = useState(true); // Add a state to control whether to display articles or not

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
        if (data.articles.length === 0) {
          setArticles(false);
        } else {
          setArticles(data.articles);
        }
      });
  }, []);

  return (
    <>
   
        <div className="header-news">
          <p>
            Take a break and read{" "}
            <span className="underline-news">Latest News</span>
          </p>
        </div>
        <div className="container-news">
          {showArticles ? (
            articles.map((article, index) => (
              <div className="card-news" key={index}>
                <img className="news-img"
                  src={article.image}
                  style={{ width: "100%", height: "150px" }}
                  alt=""
                />
                <h3 className="news-title">{article.title}</h3>
                <p>{article.description}</p>
                <a className="news-link" href={article.url} target="_blank">
                  Read more
                </a>
              </div>
            ))
          ) : (
            <p id="no-articles">No articles to display. Check later.</p>
          )}
        </div>
      
    </>
  );
}

export default News;
