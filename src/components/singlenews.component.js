import React from 'react';
export default class SingleNews extends React.Component {
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
                                <p className="sDescription">{this.props.news['full_text']}</p>
                                <div>
                                  
                                    <a className="bookmarkBar">
                                        <i className="fa fa-bookmark-o"></i>
                                        <span className="bookmarks">{this.props.news['bookmarks']} bookmarks</span>
                                    </a>
                                </div>
                           
                           </div>
                          
                       </div>
                 )
            }


        }