import React, { Component } from "react";

import NeswItem from './NewsItem'

export class News extends Component {
  constructor(){
    super();
    this.state={
      articles :this.articles,
      loading : false
    }
  }


  async componentDidMount(){
   let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=a90fc889b0ee4b4db5fdf0faa43f396b&page=1";
   let data =await fetch(url);
   let parseddata = await data.json()
   console.log(parseddata);
   this.setState({articles: parseddata.articles});
}


  render() {
    return (
      <>
      
      <div className="container my-3">
      
      <h1>Newswala Top Headlines</h1>
      <div className='row'>
        {this.state.data ?
           this.state.data.map((element)=>
           <div className="col-md-3" key={element.url} >
             <NeswItem title={element.title?.slice(0, 45)} description={element.description?.slice(0, 88)} imgurl={element.urlToImage} newsUrl={element.url}/>
           </div>
        )
        : null
        }
        
      </div>
     
      </div>
      </> 
    )
  }
}

export default News
