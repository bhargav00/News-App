import React from 'react';
export default class LandingComponent extends React.Component {
        render() {
            return ( 
                        <div className="col-sm-3 col-xs-12" id="intro">
                            <div className="logo-div">
                                <img className="logo" src={require('../images/modus_green.png')} />
                            </div>
                            <div className="introtext">
                                <h1> Welcome aboard!</h1>
                                <p>A one of a kind platform to <br/>discover, create manage blogs </p>
                            </div>
                            <div className="button-connect"> 
				                <a  onClick={this.props.StartJourney.bind(this)} className="btn btn-success btn-lg">Start your journey</a>
                            </div>
                        </div>
                 )
            }
        }