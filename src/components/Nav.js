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
                {/* Toggle button for mobile */}
                <button
                    onClick={this.toggleSidebar}
                    className="lg:hidden p-3 bg-gray-800 text-white rounded-md absolute top-6 left-6 z-50"
                    aria-label="Toggle Sidebar"
                >
                    <i className={`fa ${isSidebarOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </button>

                {/* Sidebar (Nav) */}
                <nav
                    className={`bg-gray-800 w-64 min-h-screen fixed lg:relative z-50 transition-transform ease-in-out duration-300 transform ${
                        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    } lg:translate-x-0`}
                >
                    <div className="p-6">
                        {/* Profile Section */}
                        <div className="flex items-center space-x-4 mb-10">
                            <img
                                className="rounded-full h-16 w-16 border-4 border-blue-500 shadow-lg"
                                src="asset/img/profile.png"
                                alt="Profile"
                            />
                            <div className="flex flex-col">
                                <a
                                    href="/dashboard"
                                    className="text-white font-semibold text-xl hover:text-blue-400 transition-colors duration-300"
                                >
                                    My Dashboard
                                </a>
                               
                            </div>
                        </div>

                        {/* Navigation Menu */}
                        <ul className="space-y-4">
                            {/* Dashboard */}
                            <li>
                                <a
                                    href="/dashboard"
                                    className="flex items-center px-6 py-3 text-gray-200 hover:bg-gray-700 rounded-lg transition-all duration-200"
                                >
                                    <i className="fa fa-th-large mr-4"></i>
                                    <span>Dashboard</span>
                                </a>
                            </li>

                            {/* Topic */}
                            <li className="group">
                                <a
                                    href="#0"
                                    className="flex items-center justify-between px-6 py-3 text-gray-200 hover:bg-gray-700 rounded-lg transition-all duration-200"
                                >
                                    <div className="flex items-center">
                                        <i className="fa fa-tag mr-4"></i>
                                        <span>Topic</span>
                                    </div>
                                    <i className="fa fa-chevron-down group-hover:rotate-180 transition-transform"></i>
                                </a>
                                <ul className="hidden group-hover:block pl-8 mt-2 space-y-2">
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
                                    className="flex items-center justify-between px-6 py-3 text-gray-200 hover:bg-gray-700 rounded-lg transition-all duration-200"
                                >
                                    <div className="flex items-center">
                                        <i className="fa fa-newspaper-o mr-4"></i>
                                        <span>Ads</span>
                                    </div>
                                    <i className="fa fa-chevron-down group-hover:rotate-180 transition-transform"></i>
                                </a>
                                <ul className="hidden group-hover:block pl-8 mt-2 space-y-2">
                                    <li>
                                        <a
                                            href="/add-ads"
                                            className="text-gray-300 hover:text-white"
                                        >
                                            Add Ads
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/ads-list"
                                            className="text-gray-300 hover:text-white"
                                        >
                                            Ads List
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            {/* Pricing */}
                            <li className="group">
                                <a
                                    href="#0"
                                    className="flex items-center justify-between px-6 py-3 text-gray-200 hover:bg-gray-700 rounded-lg transition-all duration-200"
                                >
                                    <div className="flex items-center">
                                        <i className="fa fa-money mr-4"></i>
                                        <span>Pricing</span>
                                    </div>
                                    <i className="fa fa-chevron-down group-hover:rotate-180 transition-transform"></i>
                                </a>
                                <ul className="hidden group-hover:block pl-8 mt-2 space-y-2">
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
                                    className="flex items-center px-6 py-3 text-gray-200 hover:bg-gray-700 rounded-lg transition-all duration-200"
                                >
                                    <i className="fa fa-users mr-4"></i>
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
