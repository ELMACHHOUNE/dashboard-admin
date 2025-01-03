import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ForgotPassword from './ForgotPassword';

class Login extends Component {
    constructor(props) {
        super(props);
        this.emailRef = React.createRef();
        this.passwordRef = React.createRef();
    }

    loginHandler = (event) => {
        event.preventDefault();  // Prevent page refresh on form submit
        this.props.history.push('/dashboard');
        window.location.reload();
    }

    render() {
        return (
            <div className="fullsheet bg-gray-50 flex justify-center items-center h-screen">
                <div className="auth-form w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
                    <div className="mb-6">
                        <h4 className="text-3xl font-semibold text-gray-700">Login to Your Account</h4>
                    </div>

                    <form onSubmit={this.loginHandler} className="space-y-4">
                        {/* Email Input */}
                        <div className="form-group">
                            <input
                                type="email"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                                ref={this.emailRef}
                                name="email"
                                placeholder="Enter your email"
                                required
                                aria-label="Email address"
                            />
                        </div>

                        {/* Password Input */}
                        <div className="form-group">
                            <input
                                type="password"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                                ref={this.passwordRef}
                                name="password"
                                placeholder="***********"
                                required
                                aria-label="Password"
                            />
                        </div>

                        {/* Remember me and Forgot Password */}
                        <div className="flex items-center justify-between">
                            <label className="inline-flex items-center text-gray-700">
                                <input type="checkbox" className="form-checkbox" />
                                <span className="ml-2">Remember me</span>
                            </label>
                            <button
                                type="button"
                                className="text-indigo-600 text-sm"
                                data-toggle="modal"
                                data-target="#model"
                            >
                                Forgot Password?
                            </button>
                        </div>

                        {/* Login Button */}
                        <button
                            type="submit"
                            className="w-full py-3 mt-6 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition-colors"
                        >
                            Login
                        </button>
                    </form>

                    {/* Sign up link */}
                    <div className="mt-4 text-sm text-gray-600">
                        Don't have an account?{' '}
                        <Link to="/singup" className="text-indigo-600 hover:text-indigo-700">
                            Sign up
                        </Link>
                    </div>
                </div>

                {/* Modal for Forgot Password */}
                <div className="modal fade" id="model" role="dialog" aria-labelledby="model" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <ForgotPassword />
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
