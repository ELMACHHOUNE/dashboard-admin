import React, { Component } from 'react';

class Pagination extends Component {
    render() { 
        return (
            <div className="flex justify-center mt-4">
                <ul className="pagination flex list-none space-x-2">
                    {/* Previous Page */}
                    <li className="page-item">
                        <a className="page-link px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100" href="#0">Previous</a>
                    </li>
                    {/* Page Numbers */}
                    <li className="page-item">
                        <a className="page-link px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-blue-500 hover:text-white" href="#0">1</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-blue-500 hover:text-white" href="#0">2</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-blue-500 hover:text-white" href="#0">3</a>
                    </li>
                    {/* Next Page */}
                    <li className="page-item">
                        <a className="page-link px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100" href="#0">Next</a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Pagination;
