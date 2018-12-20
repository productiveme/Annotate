require('babel-polyfill');
import React from 'react';
import ReactDOM from 'react-dom';
import styles from './sidebar.css';
class SideBar extends React.Component {
  constructor(props) {
    super(props);
  } 
  render() {
    return (
      <div>
        <div>Hello World!</div>
        <style jsx global>{styles}</style>
      </div>
    );
  }
}

ReactDOM.render(<SideBar />, document.getElementById('main'));


