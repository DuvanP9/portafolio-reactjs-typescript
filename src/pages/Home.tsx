// eslint-disable-next-line
import React from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';

import './styles/Home.css';


function Home() {

  return (
    <div className="container">
      <div>
        <Link className="Navbar__brand" to="/Landing">
          <Button variant="contained">Landing</Button>
        </Link>
      </div>
      <div>
        <Link className="Navbar__brand" to="/Dashboard">
          <Button variant="contained">Dashboard</Button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
