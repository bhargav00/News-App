import React from 'react';
export default class NewsItem extends React.Component {
        render() {
            return ( 
                       <div className="newsItem">
                           <img className="newsImage" src={require('../images/modus_green.png')}/>
                       </div>
                 )
            }


        }