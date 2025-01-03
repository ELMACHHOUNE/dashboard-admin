import React, { Component } from "react";

class Header extends Component {
  state = {};

  render() {
    return (
      <nav className="bg-white p-4 shadow-md flex justify-between items-center">
        {/* Navbar Left: Logo and Search Form */}
        <div className="flex items-center space-x-4">
          {/* Search Form */}
          <form role="search" className="flex items-center w-full space-x-2">
            {/* Search input */}
            <input
              type="text"
              placeholder="Search..."
              className="form-control py-2 px-4 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full transition duration-300 ease-in-out text-sm"
              id="top-search"
              name="top-search"
            />

            {/* Search button */}
            <button
              type="submit"
              className="p-2 py-2 px-4  bg-gray-300 text-white rounded-lg hover:bg-gray-600 transition duration-300 ease-in-out text-sm"
            >
              <i className="fa fa-search"></i>
            </button>
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
