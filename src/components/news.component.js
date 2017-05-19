import React from 'react';
import Slider from 'react-slick';
import NewsItem from './newsitem.component';
export default class NewsComponent extends React.Component {
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
            var news=[
                {
                title:"Hello"
                }
            ];
            return ( 
                        <div className="col-sm-3 col-xs-12 NewsComponent">
                             <Slider {...settings}>
                                <div><NewsItem news={news[0]}/><div className="black"></div></div>
                                <div><NewsItem/><div className="black"></div></div>
                                <div><NewsItem/><div className="black"></div></div>
                                <div><NewsItem/><div className="black"></div></div>
                                <div><NewsItem/><div className="black"></div></div>
                                <div><NewsItem/><div className="black"></div></div>
                                <div><NewsItem/></div>
                            </Slider>
                        </div>
                 )
            }


        }