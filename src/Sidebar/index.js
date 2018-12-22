require('babel-polyfill');
import React from 'react';
import ReactDOM from 'react-dom';
import HeadControls from './HeadControls';
import WindowBus from '../bus.js'
import Selector from '../selector.js'

class SideBar extends React.Component {
	constructor(props) {
    super(props);
    this.parentBus = new WindowBus();
    this.sendMessage = this.sendMessage.bind(this);
  }
  sendMessage(event, data) {
    // cooperate with our content script in the page
    return this.parentBus.sendMessage(event, data);
  }
	render() {
		return (
			<div id="sidebar">
        <style jsx>{`
          #sidebar {
            overflow-y: auto;
            overflow-x: hidden;
            font-size: 13px;
            height: 100%;
            font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
          }
        `}</style>
        <HeadControls sendMessage={this.sendMessage} templates={[]} template={{id: 0}}/>
      </div>
	);
	}
}

ReactDOM.render(<SideBar />, document.getElementById('main'));
