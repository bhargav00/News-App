import React from 'react';
import Slider from 'react-slick';
import NewsItem from './newsitem.component';
import SingleNews from './singlenews.component';
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
            
            var news=[
                {
                news_id:1,
                title:"Dark Horse",
                image:require("../images/news1.jpg"),
                category:"fashion",
                s_description:"While I know ‘Dark Horse’ is supposed to invoke a sense of poetry or romance, I’ve been feeling quite like a horse and cat both are friends ...",
                full_text:"Guests can enjoy marvelous views of the plantation or perhaps, the Randenigala Valley without leaving their rooms. Superior Rooms are bigger and have a double impact since they provide more remarkable views of the surrounding tea-covered valleys and hills. They also have a DVD/CD player, with slippers and bathrobes. Guests can get some DVDs from the reception.The interconnected master bedroom with a separate single bedroom set on the executive floor offers breathtaking views of the plantations surrounding the hotel.All rooms have a 32-inch flat screen LCD TV and personal bathrooms.",
                post_date:"19-Sept",
                readers:20,
                bookmarks:10,
                author:"Shivya Nath",
                author_img:require("../images/author1.jpg"),
                author_subscribers:20
            }
            ,{
                news_id:2,
                title:" What to wear to an outdoor Indian wedding",
                image:require("../images/news2.jpg"),
                category:"fashion",
                s_description:"So the wedding planning has finally started and step one is to decide on a location. We are still in the process of...",
                full_text:"Guests can enjoy marvelous views of the plantation or perhaps, the Randenigala Valley without leaving their rooms. Superior Rooms are bigger and have a double impact since they provide more remarkable views of the surrounding tea-covered valleys and hills. They also have a DVD/CD player, with slippers and bathrobes. Guests can get some DVDs from the reception.The interconnected master bedroom with a separate single bedroom set on the executive floor offers breathtaking views of the plantations surrounding the hotel.All rooms have a 32-inch flat screen LCD TV and personal bathrooms.",
                post_date:"02-Oct",
                readers:3,
                bookmarks:20,
                author:"Pooja M",
                author_img:require("../images/author1.jpg"),
                author_subscribers:22
            }
            ,{
                news_id:3,
                title:"That Left Me Scared Shitless.",
                image:require("../images/news3.jpg"),
                category:"travel",
                s_description:"Every once in a while, I look back at my travels and think of the moments that have changed something in me.",
                full_text:"Guests can enjoy marvelous views of the plantation or perhaps, the Randenigala Valley without leaving their rooms. Superior Rooms are bigger and have a double impact since they provide more remarkable views of the surrounding tea-covered valleys and hills. They also have a DVD/CD player, with slippers and bathrobes. Guests can get some DVDs from the reception.The interconnected master bedroom with a separate single bedroom set on the executive floor offers breathtaking views of the plantations surrounding the hotel.All rooms have a 32-inch flat screen LCD TV and personal bathrooms.",
                post_date:"21-Nov",
                readers:40,
                bookmarks:13,
                author:"Shivya Nath",
                author_img:require("../images/author1.jpg"),
                author_subscribers:20
                }
            ];
            var newsList = [];
            news.forEach(function(item,index){
            newsList.push( <div key={index}><NewsItem news={item} ReadMoreHandler={this.ReadMoreHandler.bind(this)}/><div className="black"></div></div>)
            },this);
            var view;
            if(this.state.news_id==''){
                view=<Slider {...settings}>{newsList}</Slider>;
            }
            else{
                 view=<SingleNews news={news[this.state.news_id-1]}/>;
            }
            return ( 
                        <div className="col-sm-3 col-xs-12 NewsComponent">
                             {
                              view  
                             }
                        </div>
                 )
            }


        }