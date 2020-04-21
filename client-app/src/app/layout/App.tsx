import React, { Component } from 'react';
import './styles.css';
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';
import { IActivity } from '../models/activity';

interface IState {
  activities: IActivity[];
}

class App extends Component<{}, IState> {
  readonly state: IState = {
    activities: [],
  };

  componentDidMount() {
    axios
      .get<IActivity[]>('http://localhost:5000/api/activities')
      .then((res) => {
        this.setState({
          activities: res.data,
        });
      });
  }

  render() {
    return (
      <div>
        <Header as='h2' icon='users' content='Reactivities' />
        <List>
          {this.state.activities.map((activity) => (
            <List.Item key={activity.id}>{activity.title}</List.Item>
          ))}
        </List>
      </div>
    );
  }
}

export default App;
