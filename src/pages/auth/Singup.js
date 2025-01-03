import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Singup extends Component {
    constructor(props) {
        super(props);
        // Create refs for the inputs
        this.usernameRef = React.createRef();
        this.nameRef = React.createRef();
        this.emailRef = React.createRef();
        this.passwordRef = React.createRef();
        this.password2Ref = React.createRef();
    }

    render() {
        return (
            <div className="fullsheet bg-gray-50 flex justify-center items-center h-screen">
                <div className="auth-form w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
                    <div className="mb-6">
                        <h4 className="text-3xl font-semibold text-gray-700">Create an Account</h4>
                    </div>

                    <form className="space-y-4">
                        {/* Username Input */}
                        <div className="form-group">
                            <input
                                type="text"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                                ref={this.usernameRef}
                                name="username"
                                placeholder="Enter your username"
                                required
                                aria-label="Username"
                            />
                        </div>

                        {/* Name Input */}
                        <div className="form-group">
                            <input
                                type="text"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                                ref={this.nameRef}
                                name="your_name"
                                placeholder="Your Name"
                                required
                                aria-label="Name"
                            />
                        </div>

                        {/* Email Input */}
                        <div className="form-group">
                            <input
                                type="email"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                                ref={this.emailRef}
                                name="email"
                                placeholder="Enter your email"
                                required
                                aria-label="Email"
                            />
                        </div>

                        {/* Password Input */}
                        <div className="form-group">
                            <input
                                type="password"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                                ref={this.passwordRef}
                                name="password"
                                placeholder="Password"
                                required
                                aria-label="Password"
                            />
                        </div>

                        {/* Confirm Password Input */}
                        <div className="form-group">
                            <input
                                type="password"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                                ref={this.password2Ref}
                                name="password2"
                                placeholder="Confirm Password"
                                required
                                aria-label="Confirm Password"
                            />
                        </div>

                        {/* Sign Up Button */}
                        <button
                            type="submit"
                            className="w-full py-3 mt-6 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition-colors"
                        >
                            Sign Up
                        </button>
                    </form>

                    {/* Login link */}
                    <div className="mt-4 text-sm text-gray-600">
                        Already have an account?{' '}
                        <Link to="/" className="text-indigo-600 hover:text-indigo-700">
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Singup;
