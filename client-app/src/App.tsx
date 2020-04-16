import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';

class App extends Component {
  state = {
    values: [],
  };

  componentDidMount() {
    axios.get('http://localhost:5000/api/values').then((res) => {
      this.setState({
        values: res.data,
      });
    });
  }

  render() {
    return (
      <div>
        <Header as='h2' icon='users' content='Reactivities' />
        <List>
          {this.state.values.map((val: any) => (
            <List.Item key={val.id}>{val.name}</List.Item>
          ))}
        </List>
      </div>
    );
  }
}

export default App;
