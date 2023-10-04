import React, { useEffect, useState } from "react";

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
        });
    }, []);

    return (
        <div>
          <div>Hi</div>
          {articles.map((article, index) => (
            <div key={index}>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
            </div>
          ))}
        </div>
      );
    }

export default News;
