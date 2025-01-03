import React, { Component } from 'react';

class Nav extends Component {
    state = {
        isSidebarOpen: false, // Track if the sidebar is open or closed
    };

    // Toggle the sidebar open and closed
    toggleSidebar = () => {
        this.setState((prevState) => ({
            isSidebarOpen: !prevState.isSidebarOpen,
        }));
    };

    render() {
        const { isSidebarOpen } = this.state;

        return (
            <>
                {/* Mobile toggle button */}
                <button
                    onClick={this.toggleSidebar}
                    className="lg:hidden p-2 bg-gray-800 text-white rounded-md absolute top-4 left-4 z-50"
                    aria-label="Toggle Sidebar"
                >
                    <i className={`fa ${isSidebarOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </button>

                {/* Sidebar (Nav) */}
                <nav
                    className={`bg-gray-800 w-64 min-h-screen fixed lg:relative z-50 transition-all ease-in-out duration-300 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}
                >
                    <div className="p-4">
                        {/* Profile Section */}
                        <div className="flex items-center space-x-4 mb-6">
                            <img
                                className="rounded-full h-14 w-14"
                                src="asset/img/profile.png"
                                alt="Profile"
                            />
                            <div>
                                <a href="/dashboard" className="text-white font-bold text-lg">
                                    My Dashboard
                                </a>
                            </div>
                        </div>

                        {/* Navigation Menu */}
                        <ul className="space-y-2">
                            {/* Dashboard */}
                            <li>
                                <a
                                    href="/dashboard"
                                    className="flex items-center px-4 py-2 text-gray-200 hover:bg-gray-700 rounded-lg"
                                >
                                    <i className="fa fa-th-large mr-3"></i>
                                    <span>Dashboard</span>
                                </a>
                            </li>

                            {/* Topic */}
                            <li className="group">
                                <a
                                    href="#0"
                                    className="flex items-center justify-between px-4 py-2 text-gray-200 hover:bg-gray-700 rounded-lg"
                                >
                                    <div className="flex items-center">
                                        <i className="fa fa-tag mr-3"></i>
                                        <span>Topic</span>
                                    </div>
                                    <i className="fa fa-chevron-down group-hover:rotate-180 transition-transform"></i>
                                </a>
                                <ul className="hidden group-hover:block pl-6 mt-2 space-y-1">
                                    <li>
                                        <a
                                            href="/add-topic"
                                            className="text-gray-300 hover:text-white"
                                        >
                                            Add Topic
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/topic-list"
                                            className="text-gray-300 hover:text-white"
                                        >
                                            Topic List
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            {/* Ads */}
                            <li className="group">
                                <a
                                    href="#0"
                                    className="flex items-center justify-between px-4 py-2 text-gray-200 hover:bg-gray-700 rounded-lg"
                                >
                                    <div className="flex items-center">
                                        <i className="fa fa-newspaper-o mr-3"></i>
                                        <span>Ads</span>
                                    </div>
                                    <i className="fa fa-chevron-down group-hover:rotate-180 transition-transform"></i>
                                </a>
                                <ul className="hidden group-hover:block pl-6 mt-2 space-y-1">
                                    <li>
                                        <a href="/add-ads" className="text-gray-300 hover:text-white">
                                            Add Ads
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/ads-list" className="text-gray-300 hover:text-white">
                                            Ads List
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            {/* Pricing */}
                            <li className="group">
                                <a
                                    href="#0"
                                    className="flex items-center justify-between px-4 py-2 text-gray-200 hover:bg-gray-700 rounded-lg"
                                >
                                    <div className="flex items-center">
                                        <i className="fa fa-money mr-3"></i>
                                        <span>Pricing</span>
                                    </div>
                                    <i className="fa fa-chevron-down group-hover:rotate-180 transition-transform"></i>
                                </a>
                                <ul className="hidden group-hover:block pl-6 mt-2 space-y-1">
                                    <li>
                                        <a
                                            href="/add-pricing"
                                            className="text-gray-300 hover:text-white"
                                        >
                                            Add New Pricing
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/pricing-list"
                                            className="text-gray-300 hover:text-white"
                                        >
                                            Pricing List
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            {/* Team */}
                            <li>
                                <a
                                    href="#0"
                                    className="flex items-center px-4 py-2 text-gray-200 hover:bg-gray-700 rounded-lg"
                                >
                                    <i className="fa fa-users mr-3"></i>
                                    <span>Team</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </>
        );
    }
}

export default Nav;
