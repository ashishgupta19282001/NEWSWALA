// import React, { Component } from "react";

// export class News extends Component {
//   render() {
//     let { title, description, imgurl, newsUrl, date, author } = this.props;
//     return (
//       <div>
//         <div className="card m-2">
//           <img
//             src={!imgurl ? "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg" : imgurl}
//             className="card-img-top"
//             alt="..."
//           />
//           <div className="card-body">
//             <h5 className="card-title">{title}...</h5>
//             <p className="card-text"><small className="text-muted">by {!author ? "Source" : author} on {new Date(date).toGMTString()}</small></p>
//             <p className="card-text">
//               {description}...
//             </p>
//             <a href={newsUrl} target="_/blank" className="btn btn-sm btn-dark">
//               Read more
//             </a>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
// for gmt format 
// export default News;

import React, { Component } from "react";

export class News extends Component {
  render() {
    let { title, description, imgurl, newsUrl, date, author } = this.props;
    const options = {
      timeZone: "Asia/Kolkata",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    const istDate = new Date(date).toLocaleString("en-US", options);

    return (
      <div>
        <div className="card m-2">
          <img
            src={!imgurl ? "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg" : imgurl}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">
              <small className="text-muted">
                by {!author ? "Source" : author} on {istDate}
              </small>
            </p>
            <p className="card-text">{description}...</p>
            <a href={newsUrl} target="_/blank" className="btn btn-sm btn-dark">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default News;

