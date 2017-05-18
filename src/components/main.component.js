import React from 'react';
import  '../styles/common.css';
import LandingComponent from './landing.component' ;
export default class MainComponent extends React.Component {
        render() {
            var content= <LandingComponent/>;
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