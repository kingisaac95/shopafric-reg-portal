import React from 'react';
import { Link } from 'react-router';

export class NavigationBar extends React.Component {
  render() {
    return(
      <nav className="navbar">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"/>
              <span className="icon-bar"/>
              <span className="icon-bar"/>
            </button>
            <Link className="navbar-brand" to="/">
              <img src={require(`../../assets/img/logo.png`)} alt="moodle logo" height="30"/>
            </Link>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#">Hi, Kingdom</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
