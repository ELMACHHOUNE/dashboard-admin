import React, { Component } from 'react';
import Nav from '../../../components/Nav';
import Header from '../../../components/Header';
import PageTitle from '../../../components/PageTitle';
import AdsForm from './AdsForm';

class AddAds extends Component {
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
                        {/* Page Title */}
                        <PageTitle page_headline="Add New Ads" />

                        {/* Ads Form */}
                        <div className="bg-white shadow rounded-lg p-6 mt-4">
                            <AdsForm />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddAds;
