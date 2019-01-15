import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllMessages } from './actions'


import './App.css';


class App extends Component {
  componentDidMount() {
    this.props.getAllMessages()
  }

  renderList = ({messages}) => {
    if (messages) {
      return messages.map((item) => {
        return (
          <div key={item.id} className="item-list">
            <div className="title">{item.title}</div>
            <div className="sender">Message from:<span>{item.from}</span></div>
            <div className="body">{item.message}</div>
          </div>
        )
      })
    }
  }
  render() {
    return (
      <div className="App">
        <div className="top">
          <h3>Messages</h3>
          <Link to="/addnew">Add</Link>
        </div>
        <div className="messages_container">
          {this.renderList(this.props.messages)}
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  console.log(state);
  return {
    messages: state.messageReducer
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getAllMessages }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
