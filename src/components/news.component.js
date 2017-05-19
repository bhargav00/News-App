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
                news_id:1,
                title:"Dark Horse",
                image:require("../images/news1.jpg"),
                category:"fashion",
                s_description:"While I know ‘Dark Horse’ is supposed to invoke a sense of poetry or romance, I’ve been feeling quite like a horse lately – with the amount of work that I can sense is going to be piling up in the coming month.",
                post_date:"19-Sept",
                readers:20
            }
            ,{
                news_id:2,
                title:" What to wear to an outdoor Indian wedding",
                image:require("../images/news2.jpg"),
                category:"fashion",
                s_description:"So the wedding planning has finally started and step one is to decide on a location. We are still in the process of narrowing down the location for the wedding.",
                post_date:"02-Oct",
                readers:3
            }
            ,{
                news_id:3,
                title:"That Left Me Scared Shitless.",
                image:require("../images/news3.jpg"),
                category:"travel",
                s_description:"Every once in a while, I look back at my travels and think of the moments that have changed something in me.",
                post_date:"21-Nov",
                 readers:40
                }
            ];
            var itemList = [];
            news.forEach(function(item){
            itemList.push( <div><NewsItem news={item} /><div className="black">aa</div></div>)
            })
            return ( 
                        <div className="col-sm-3 col-xs-12 NewsComponent">
                             <Slider {...settings}>
                               {itemList}
                               
                            </Slider>
                        </div>
                 )
            }


        }