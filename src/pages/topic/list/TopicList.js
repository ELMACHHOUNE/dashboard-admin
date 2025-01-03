import React, { Component } from 'react';
import Nav from '../../../components/Nav';
import Header from '../../../components/Header';
import Pagination from '../../../components/Pagination';
import PageTitle from '../../../components/PageTitle';
import TopicTable from './TopicTable';

class TopicList extends Component {
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
                        <PageTitle page_headline="Topic List" />

                        {/* Topic Table and Pagination */}
                        <div className="bg-white shadow rounded-lg p-6 mt-4">
                            <TopicTable />
                            <div className="mt-4">
                                <Pagination />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TopicList;
