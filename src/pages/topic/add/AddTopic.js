import React, { Component } from 'react';
import Nav from '../../../components/Nav';
import Header from '../../../components/Header';
import PageTitle from '../../../components/PageTitle';
import TopicForm from './TopicForm';

class AddTopic extends Component {
    render() {
        return (
            <>
                <div className="flex min-h-screen bg-gray-100">
                    {/* Sidebar */}
                    <Nav />

                    {/* Main Content */}
                    <div className="flex-1">
                        {/* Header */}
                        <div className="border-b bg-white shadow">
                            <Header />
                        </div>

                        {/* Content Wrapper */}
                        <div className="p-6">
                            {/* Page Title */}
                            <div className="mb-4">
                                <PageTitle page_headline="Add New Topic" />
                            </div>

                            {/* Topic Form */}
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <TopicForm />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default AddTopic;
