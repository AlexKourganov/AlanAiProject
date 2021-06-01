import React,{useState,useEffect} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import useStyles from './styles';
import wordsToNumbers from 'words-to-numbers';
import NewsCards from './components/NewsCards/NewsCards';
import './App.css';

function App() {
  const classes =  useStyles();
  const [newsArticles,setNewsArticles]= useState([]);
  const [activeArticle,setActiveArticle]= useState(-1);




  useEffect(()=>{
    alanBtn({
      key:process.env.REACT_APP_ALAN_API_KEY,
      onCommand:({command,articles,number})=>{
        if(command === 'newHeadlines'){
          setNewsArticles(articles);
          setActiveArticle(-1);
        }else if(command === 'highlight'){
          setActiveArticle((prevActiveArticle)=>prevActiveArticle + 1);
        }else if(command === 'open'){
          
          const parsedNumber = number.length > 2 ? wordsToNumbers(number,{fuzzy:true}) : number;
          console.log(parsedNumber);
          const article  = articles[parsedNumber-1];

          if(parsedNumber > 20){
            alanBtn().playText('Please try that again.');
          }else if(article){
            window.open(article.url,'_blank');
            alanBtn().playText('Opening.....')
          }

          
        }
      }
    })
  },[]);


  return (
    <div className="App">
     <div className={classes.logoContainer}>
       <img src="https://alan.app/voice/images/branding_page/logo-horizontal/grayscale/alan-logo-horizontal-grayscale.png" className={classes.alanLogo} alt="alan logo"/>
     </div>
     <NewsCards articles={newsArticles} activeArticle={activeArticle}/>
    </div>
  );
}

export default App;
