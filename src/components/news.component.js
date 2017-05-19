import React from 'react';
import Slider from 'react-slick';
import NewsItem from './newsitem.component';
import SingleNews from './singlenews.component';
import {news} from '../data/newsData';

export default class NewsComponent extends React.Component {
       constructor(props) {
            super(props);
             this.state = {
                news_id:''
            };
        }
        ReadMoreHandler(news_id){
              this.setState({
            news_id:news_id
        })  
        }
        render() {
            const settings = {
                dots: false,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                vertical: true,
                verticalSwiping: true,
                swipeToSlide: true,
                arrows:false,
                initialSlide:0,
                useCSS:true
                //   beforeChange: function (currentSlide, nextSlide) {
                //     console.log('before change', currentSlide, nextSlide);
                //   },
                //   afterChange: function (currentSlide) {
                //     console.log('after change', currentSlide);
                //   },
            };  
            var newsList = [];
            news.forEach(function(item,index){
            newsList.push( <div key={index}><NewsItem news={item} ReadMoreHandler={this.ReadMoreHandler.bind(this)}/><div className="black"></div></div>)
            },this);
                        return ( 
                        <div className="col-sm-3 col-xs-12 NewsComponent">
                             {
                                this.state.news_id==''?
                                    <Slider {...settings}>{newsList}</Slider>
                                    :
                                    <SingleNews news={news[this.state.news_id-1]}/>
                             }
                        </div>
                 )
            }


        }