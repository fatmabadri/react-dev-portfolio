import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      // var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var bio1 = this.props.data.bio1;
    }

    return (
      <section id="about">
         <div className="row">
         <h2 className="lead center"><span>About Me</span></h2>
            <div className="twelve columns main-col">
                <p>{bio}</p>
                <p>{bio1}</p>
             </div>
            {/*<div className="four columns">
                <img className="profile-pic" src={profilepic} alt="profile-pic" />
            </div> */}
         </div>
         
      </section>
    );
  }
}

export default About;
