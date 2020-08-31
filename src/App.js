import React,{useState,useEffect} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

import NewsCards from './components/NewsCards/NewsCards';
import './App.css';

function App() {
  const [newsArticles,setNewsArticles]= useState([]);




  useEffect(()=>{
    alanBtn({
      key:process.env.REACT_APP_ALAN_API_KEY,
      onCommand:({command,articles})=>{
        if(command === 'newHeadlines'){
          setNewsArticles(articles);
        }
      }
    })
  },[]);


  return (
    <div className="App">
     <h1>ALAN</h1>
     <NewsCards articles={newsArticles}/>
    </div>
  );
}

export default App;
