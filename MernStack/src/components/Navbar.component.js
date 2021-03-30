import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link class="navbar-brand" to="/">ExcerTracker</Link>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul class="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link class="nav-link active"  to="/">Exercises</Link>
                        </li>
                        <li className="navbar-item">
                            <Link class="nav-link"  to="/create">Create Exercise log</Link>
                        </li>
                        <li className="navbar-item">
                            <Link class="nav-link"  to="/user">Create User</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

