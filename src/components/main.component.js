import React from 'react';
import  '../styles/common.css';

export default class MainComponent extends React.Component {
        render() {
            return ( 
                <div className ="container-fluid " > 
                     <div className="row"> 
                        <div className="col-sm-4 hidden-xs"></div> 
                        <div className="col-sm-4 col-xs-12" id="main">
                            <img src={require('../images/1.jpg')} id="main-img" />
                        </div>
                        <div className="col-sm-4 hidden-xs"></div> 
                    </div>
                </div>)
            }


        }