import React from 'react';
import  '../styles/main.css';
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
            return ( 
                <div className ="container-fluid " > 
                     <div className="row"> 
                        <div className="col-sm-4 hidden-xs"></div> 
                        {
                            this.state.landing_page==true?
                            <LandingComponent StartJourney={this.StartJourney.bind(this)}/>
                            :
                            <NewsComponent/>
                            }
                        <div className="col-sm-4 hidden-xs"></div> 
                    </div>
                </div>)
            }


        }
        