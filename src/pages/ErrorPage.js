import React, { Component } from 'react';

class ErrorPage extends Component {
    render() {
        return (
            <div className="grid h-screen place-content-center bg-white px-6">
                <div className="space-y-6">
                    <h1 className="text-9xl font-extrabold text-gray-200 animate-bounce">404</h1>
                    <p className="text-3xl font-semibold text-gray-900 sm:text-4xl">Uh-oh!</p>
                    <p className="text-lg text-gray-500">We can't find the page you're looking for.</p>
                    <a
                        href="/"
                        className="inline-block rounded-lg bg-indigo-600 px-6 py-3 text-lg font-medium text-white transition-all duration-300 ease-in-out transform hover:bg-indigo-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        aria-label="Go back to the homepage"
                    >
                        Go Back Home
                    </a>
                </div>
            </div>
        );
    }
}

export default ErrorPage;
