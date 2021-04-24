import React, { Component } from 'react';

class Resume extends Component {
  render() {
    if(this.props.data){
      var devtoolmessage= this.props.data.devtoolmessage;

      var devtools = this.props.data.devtools.map(function(devtools){
        var projectImage = 'images/tech/'+devtools.image;
        return <div key={devtools.name} className="columns feature-item">
                  <img className='devtools' alt={devtools.name} src={projectImage} />
                  <h5>{devtools.name}</h5>
                  <p>{devtools.description}</p>
               </div>
      })
    }

    return (
      <section id="resume">
        <div className="row devtools">
            <div className="twelve columns collapsed ">
              <h1 className="lead center"><span>Tools and Languages</span></h1>
              <div className="twelve columns main-col"><p className="lead center">{devtoolmessage}</p></div>
              <ul className="bgrid-quarters s-bgrid-thirds cf">
                {devtools}
              </ul>
            </div>  
        </div>
      </section>
    );
  }
}

export default Resume;
