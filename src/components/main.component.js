import React from 'react';
import  '../styles/common.css';
import LandingComponent from './landing.component' ;
import NewsComponent from './news.component' ;
export default class MainComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                landing_page:true
            };
        }
        StartJourney(){
              this.setState({
            landing_page:false
        })
           
        }
        render() {
            var content;
            if(this.state.landing_page==true){
                content= <LandingComponent StartJourney={this.StartJourney.bind(this)}/>;
            }
            else{
                content= <NewsComponent/>;
            }
            return ( 
                <div className ="container-fluid " > 
                     <div className="row"> 
                        <div className="col-sm-4 hidden-xs"></div> 
                        {content}
                        <div className="col-sm-4 hidden-xs"></div> 
                    </div>
                </div>)
            }


        }
        