// functional based component

import React, { useEffect, useState } from "react";
import Shoppingitem from "./Shoppingitem.js";
import Spinner from "./Spinner.js";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const Shopping = ({
  country = "in",
  pageSize = 6,
  category = "science",
  setProgress,
}) => {
  const [articles, setArticles] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;

  const updateShopping = async () => {
    setProgress(10);

    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}&page=${
      page + 1
    }&pageSize=${pageSize}`;

    setloading(true);

    let data = await fetch(url);
    setProgress(30);
    let parsedData = await data.json();
    setProgress(70);
    console.log(parsedData);

    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setloading(false);

    setProgress(100);
    console.log("loading in updateShopping");
  };

  useEffect(() => {
    updateShopping();
    document.title = `${capitalizeFirstLetter(category)} - Shopping`;
  }, [category]);

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}&page=${
      page + 1
    }&pageSize=${pageSize}`;

    setPage(page + 1);

    let data = await fetch(url);
    console.log("data: ", data);
    let parsedData = await data.json();
    console.log(parsedData);
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);

    console.log("loading in fetchMoreData");
  };

  return (
    <div className="container my-3">
      <h2 className="text-center">
        {" "}
        Top Maximum offer these {capitalizeFirstLetter(category)} item
      </h2>

      {loading && <Spinner />}

      <InfiniteScroll
        dataLength={articles?.length}
        next={fetchMoreData}
        hasMore={articles?.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles?.map((element, index) => {
              return (
                <div className="col-md-4" key={element.url + index}>
                  <Shoppingitem
                    title={element.title ? element.title.slice(0, 40) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 70)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author ? element.author.slice(0, 40) : ""}
                    date={element.publishedAt}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
};

Shopping.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  setProgress: PropTypes.func,
};

export default Shopping;
