import React from 'react';
import { Link } from 'react-router';

const HomePage = () => (
  <div className="jumbotron">
    <h1 className="lead">EpamPhoto - MediaGallery like yandex-foto. </h1>
    <div>
      <Link to="library">
        <button className="btn btn-lg btn-primary"> Visit Library</button>
      </Link>
    </div>
  </div>
);

export default HomePage;
