import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Markdown from 'react-markdown'

const LatestNews = (props) => {
  useEffect(() => {
    axios
      .get('https://raw.githubusercontent.com/joostdecock/cursus/master/NEWS.md')
      .then(result => setNews(result.data))
      .catch((err) => console.log(err))
  }, [])
  const [news, setNews] = useState(false)

  return news
    ? <Markdown source={news} />
    : <p>Een momentje, we laden het nieuws...</p>
}

export default LatestNews
