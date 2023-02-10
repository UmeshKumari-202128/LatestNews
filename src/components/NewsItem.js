import React, { Component } from "react";

export class NewsItem extends Component {
  // constructor(){
  //   super();
  //   console.log("Hello I am a constructor");
  // }
  render() {
    let { title, description, imgUrl, newsUrl, author, date , source} = this.props;
    return (
      <div className="my-3">
        <div className="card">
        <div style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:'0'}}>
         <span className="badge rounded-pill bg-danger" > {source}</span>
        </div> 
          <img
            src={
              !imgUrl
                ? "https://timesofindia.indiatimes.com/thumb/msid-95837046,width-1200,height-900,resizemode-4/95837046.jpg"
                : imgUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}
             
            </h5>
            <p className="card-text">{description}</p>
            <p class="card-text">
              <small class="text-muted">
                By {!author ? "unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
