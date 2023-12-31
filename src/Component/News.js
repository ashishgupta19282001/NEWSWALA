import React, { Component } from "react";
import NewsItem from './NewsItem'
import Spinner from "./Spinner";
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps ={
    country: 'in',
    pageSize: 8,
    category:'general',
  }
  static propTypes ={
   country: PropTypes.string,
   pageSize:PropTypes.number,
   category: PropTypes.string,
  }


  constructor(){
    super();
    this.state={
      articles: [],
      loading: false,
      page: 1,
    }
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a90fc889b0ee4b4db5fdf0faa43f396b&page=1&pageSize=${this.props.pageSize}`;

    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults:parsedData.totalResults,
      loading:false
    });
  }
 

  
  handleNextClick = async () => {
    console.log("Next");
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
      let nextPage = this.state.page + 1; // Increment the page number
  
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a90fc889b0ee4b4db5fdf0faa43f396b&page=${nextPage}&pageSize=${this.props.pageSize}`;
  
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        page: nextPage, // Update the page state
        articles: parsedData.articles,
        loading: false,
      });
    }
  }
  


  handlePrevClick = async () =>{
    console.log("Prev");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a90fc889b0ee4b4db5fdf0faa43f396b&page=1&pageSize=${this.props.pageSize}`;

    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
 
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    })
  }
  
  render() {
    return (
      
        <div className="container my-3">
          <h1 className="text-center" style={{margin: '30px opx' ,color: 'red'}}> Mynews Top Headlines</h1>
          {this.state.loading && <Spinner/>}
          <div className='row'>
            {!this.state.loading && this.state.articles.map((element) =>{
              return(
                 <div className="col-md-3" key={element.url}>
                  <NewsItem title={element.title} description={element.description} date={element.publishedAt} imgurl={element.urlToImage} newsUrl={element.url} author={element.author}/>
                </div>
             ) })
            }
          </div>
          <div className="container d-flex justify-content-between">
            <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>Prev</button>
            <button  disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-danger" onClick={this.handleNextClick}>Next</button>
          </div>
        </div>
      
    )
  }
}

export default News
