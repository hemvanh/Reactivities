import React, { Fragment } from 'react';
import './styles.css';
import { Container } from 'semantic-ui-react';
import { NavBar } from '../../features/nav/NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import { observer } from 'mobx-react-lite';
import {
  Route,
  withRouter,
  RouteComponentProps,
  Switch,
} from 'react-router-dom';
import { HomePage } from '../../features/home/HomePage';
import ActivityForm from '../../features/activities/form/ActivityForm';
import ActivityDetails from '../../features/activities/details/ActivityDetails';

const App: React.FC<RouteComponentProps> = ({ location }) => {
  return (
    <Fragment>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route
          patth={'/(.+)'}
          render={() => (
            <Fragment>
              <NavBar />
              <Container style={{ marginTop: '7em' }}>
                <Route exact path='/activities' component={ActivityDashboard} />
                <Route path='/activities/:id' component={ActivityDetails} />
                <Route
                  key={location.key}
                  path={['/createActivities', '/manage/:id']}
                  component={ActivityForm}
                />
              </Container>
            </Fragment>
          )}
        />
      </Switch>
    </Fragment>
  );
};

export default withRouter(observer(App));
