// src/News.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";

interface Article {
  id: number;
  title: string;
  summary: string;
  image_url: string;
  url: string;
  published_at: string;
}

const News: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    axios
      .get("https://api.spaceflightnewsapi.net/v4/articles?limit=10")
      .then((res) => setArticles(res.data.results));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>📰 Tin tức không gian</h2>
      {articles.map((a) => (
        <div key={a.id} style={{ marginBottom: "20px", borderBottom: "1px solid gray" }}>
          <img src={a.image_url} alt={a.title} width="200" />
          <h3>{a.title}</h3>
          <p>{a.summary}</p>
          <a href={a.url} target="_blank" rel="noreferrer">
            🔗 Xem tin gốc
          </a>
          <p>📅 Ngày đăng: {new Date(a.published_at).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
};

export default News;



