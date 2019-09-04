import React from 'react';
import Auxiliar from './Auxiliar';
import Navbar from '../components/Menu/Navbar';
import AppContainer from '../components/Navigation/AppContainer';


const Layout = (props) => (
  <Auxiliar>
      <AppContainer />
      {/* <Navbar /> */}
  </Auxiliar>
);

export default Layout;