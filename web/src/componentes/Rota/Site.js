import React, { Component } from 'react';
class Site extends Component {
  render(){
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default Site;
