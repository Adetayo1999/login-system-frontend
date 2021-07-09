
  import React , {useEffect , useState }from 'react'
  import "./App.css";
import TopStoriesCard from './components/TopStoriesCard';
// import news from "./data.json";
// import { v4 as uuidv4 } from 'uuid';
  function App() {
    const [news , setNews] = useState([]);
    const [loading , setLoading] = useState(true);
    const [error , setError] = useState("");

      useEffect(() => {
           fetch("https://newsapi.org/v2/everything?q=Apple&from=2021-07-08&sortBy=popularity&apiKey=d2186517bba54cc1a3dd827c3a1235e7")
           .then(res => res.json())
           .then(data => {
             setLoading(false)
             setNews(data)
           })
           .catch(err => setError(err.message))
      },[])


  console.log(news);
    return (
      <div className="app">
        <h1>Hello World From Tomiwa &#127875;</h1>

          <div className="container">

              <div className="topStoriesContainer">
                {
                  loading ? <p>Loading...</p> : 
                  news.articles.map(news => <TopStoriesCard  title={news.title} author={news.author} body={news.description}  />)
                }

                {/* { 
                  news.articles.map(news => <TopStoriesCard  title={news.title} author={news.author} body={news.description}  imageSrc={news.urlToImage} datePosted={news.publishedAt}/>)
                } */}
              </div>

          </div>

      </div>
    )
  }
  
  export default App
  