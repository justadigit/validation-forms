import { Button, Flex, Spacer } from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const paths = [' ', 'register', 'enroll', 'payment'];
  return (
    <div style={{ width: '50%', margin: 'auto' }}>
      <Flex m={20} w="100">
        <Spacer />
        {paths.map((path) => (
          <React.Fragment key={path}>
            <Button variant="ghost">
              <NavLink
                to={`/${path}`}
                style={{ textDecoration: 'none', color: '#ffffff' }}
              >
                {path === ' ' ? 'Login' : path}
              </NavLink>
            </Button>
            <Spacer />
          </React.Fragment>
        ))}
      </Flex>
    </div>
  );
};

export default Navbar;
