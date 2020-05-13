import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ArticlePage() {

  const params = useParams();
  const [ article, setArticle ] = useState({});

  useEffect(() => {
    (async () => {

      const response = await axios.get(`/api/v1/articles/${params.id}`);
      setArticle(response.data);

    })();
  }, []);

  return (
    <div>
      <h1>{article.title}</h1>
      <hr/>
      <p className="card-text">{article.body}</p>
    </div>
  );
}

export default ArticlePage;
