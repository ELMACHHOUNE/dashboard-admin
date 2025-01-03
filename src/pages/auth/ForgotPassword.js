import React, { Component } from 'react';

class ForgotPassword extends Component {
    state = { }

    render() { 
        return (
            <div className="modal-content bg-white rounded-lg shadow-lg">
                {/* Modal Header */}
                <div className="modal-header border-b p-4 flex justify-between items-center">
                    <h5 className="modal-title text-xl font-semibold">Forgot Password</h5>
                    <button type="button" className="close text-xl" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                {/* Modal Body */}
                <div className="modal-body p-4">
                    <form>
                        {/* Email Field */}
                        <div className="form-group mb-4">
                            <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                            <input 
                                className="form-control mt-2 p-2 w-full border rounded-md focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter valid email"
                                id="email"
                                type="email" 
                            />
                        </div>

                        {/* Buttons */}
                        <div className="text-right">
                            <button 
                                type="button" 
                                className="btn btn-danger btn-sm mr-2 py-1 px-4 text-sm text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none"
                                data-dismiss="modal"
                            >
                                Close
                            </button>
                            <button 
                                type="button" 
                                className="btn btn-success btn-sm py-1 px-4 text-sm text-white bg-green-500 rounded hover:bg-green-600 focus:outline-none"
                            >
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default ForgotPassword;
