import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PageTitle extends Component {
    render() {
        return (
            <div className="flex justify-between items-center mb-4">
                <div className="flex-1">
                    <p className="text-lg font-semibold">{this.props.page_headline}</p>
                </div>
                <div>
                    <Link
                        to="/dashboard"
                        className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                        Dashboard
                    </Link>
                </div>
            </div>
        );
    }
}

export default PageTitle;
