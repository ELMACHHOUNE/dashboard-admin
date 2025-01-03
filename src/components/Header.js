import React, { Component } from 'react';

class Header extends Component {
    state = {};

    render() {
        return (
            <nav className="bg-white p-4 shadow-md flex justify-between items-center">
                {/* Navbar Left: Logo and Search Form */}
                <div className="flex items-center space-x-4">
                    {/* Search Form */}
                    <form role="search" className="flex">
    <div className="relative w-full">
        <input
            type="text"
            placeholder="     Search for something..."
            className="form-control p-2 pl-12 pr-4 border rounded-lg focus:ring-2 focus:ring-blue-500 w-full"
            id="top-search"
            name="top-search"
        />
        <i className="fa fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
    </div>
</form>

                </div>

                {/* Navbar Right Links */}
                <ul className="flex space-x-4 items-center">
                    {/* Log out */}
                    <li>
                        <a
                            href="/"
                            className="text-gray-700 hover:text-red-500 flex items-center space-x-1"
                        >
                            <i className="fa fa-sign-out"></i>
                            <span>Log out</span>
                        </a>
                    </li>

                    {/* Profile (optional, for logged-in users) */}
                    <li>
                        <a
                            href="/profile"
                            className="text-gray-700 hover:text-blue-500 flex items-center space-x-1"
                        >
                            <i className="fa fa-user-circle"></i>
                            <span>Profile</span>
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Header;
