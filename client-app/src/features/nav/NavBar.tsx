import React from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';
import { observer } from 'mobx-react-lite';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item header as={NavLink} to='/' exact>
          <img
            src='/assets/logo.png'
            alt='logo'
            style={{ marginRight: '10px' }}
          ></img>
          Reactivities
        </Menu.Item>
        <Menu.Item name='Activities' as={NavLink} to='/activities' exact />
        <Menu.Item>
          <Button
            positive
            content='Create Activity'
            as={NavLink}
            to='/createActivities'
            exact
          ></Button>
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default observer(NavBar);
