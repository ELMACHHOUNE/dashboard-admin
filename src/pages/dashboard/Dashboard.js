import React, { Component } from 'react';
import Nav from '../../components/Nav';
import Header from '../../components/Header';
import Widget from './Widget';

class Dashboard extends Component {
    state = {}

    render() {
        return (
            <div className="bg-gray-100 min-h-screen flex">
                {/* Sidebar Navigation */}
                <Nav />
                
                {/* Main Content */}
                <div className="flex-1">
                    {/* Header */}
                    <div className="border-b bg-white shadow">
                        <Header />
                    </div>

                    {/* Page Content */}
                    <div className="p-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="widget-container">
                                <Widget name="Today Cases" count="107" icon_name="fa fa-briefcase fa-5x" />
                            </div>
                            <div className="widget-container">
                                <Widget name="Advocates" count="27" icon_name="fa fa-user-circle-o fa-5x" />
                            </div>
                            <div className="widget-container">
                                <Widget name="Documents" count="12" icon_name="fa fa-leanpub fa-5x" />
                            </div>
                            <div className="widget-container">
                                <Widget name="Team Member" count="27" icon_name="fa fa-users fa-5x" />
                            </div>
                            <div className="widget-container">
                                <Widget name="To-Dos" count="27" icon_name="fa fa-address-card-o fa-5x" />
                            </div>
                            <div className="widget-container">
                                <Widget name="My Case Diary" count="27" icon_name="fa fa-book fa-5x" />
                            </div>
                            <div className="widget-container">
                                <Widget name="Team 1" count="27" icon_name="fa fa-heart fa-5x" />
                            </div>
                            <div className="widget-container">
                                <Widget name="Team 2" count="27" icon_name="fa fa-envelope-o fa-5x" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
