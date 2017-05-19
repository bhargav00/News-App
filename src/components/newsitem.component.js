import React from 'react';
export default class NewsItem extends React.Component {
         constructor(props) {
            super(props);
        }
        render() {
            return ( 
                       <div className="newsItem">
                           <img className="newsImage" src={this.props.news['image']}/>
                           <div className="contentBox">
                               <div className="category">{this.props.news['category']}</div>
                                <h2 className="title">{this.props.news['title']}</h2>
                                <div className="infoBar">{this.props.news['post_date']}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;{this.props.news['readers']} Readers</div>
                                <p className="sDescription">{this.props.news['s_description']}</p>
                                <div>
                                    <a className="readMore" onClick={()=>this.props.ReadMoreHandler(this.props.news['news_id'])}>Read more...</a>
                                    <a className="bookmarkBar">
                                        <i className="fa fa-bookmark-o"></i>
                                        <span className="bookmarks">{this.props.news['bookmarks']} bookmarks</span>
                                    </a>
                                </div>
                                 <hr/>
                           <div className="footerBar">
                                        <img className="footerMedia" width="40" height="40" src={this.props.news['author_img']} alt=""/>                            
                                        <span className="author">{this.props.news['author']}</span>
                                        <span className="subscriber">{this.props.news['author_subscribers']} subscribers</span>
                                </div>
                           </div>
                          
                       </div>
                 )
            }


        }