import React from 'react';
import Slider from 'react-slick';
export default class NewsComponent extends React.Component {
        render() {
            const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      adaptiveHeight:true,
      vertical: true,
      verticalSwiping: true,
      swipeToSlide: true,
      arrows:false,
      initialSlide:1,
      beforeChange: function (currentSlide, nextSlide) {
        console.log('before change', currentSlide, nextSlide);
      },
      afterChange: function (currentSlide) {
        console.log('after change', currentSlide);
      },
    };
            return ( 
                        <div className="col-sm-3 col-xs-12 NewsComponent">
                             <Slider {...settings}>
                                <div><h3>1</h3></div>
                                <div><h3>2</h3></div>
                                <div><h3>3</h3></div>
                                <div><h3>4</h3></div>
                                <div><h3>5</h3></div>
                                <div><h3>6</h3></div>
                            </Slider>
                        </div>
                 )
            }


        }