import React, { Component } from 'react';

class Widget extends Component {
    state = { }

    render() { 
        return (
            <div className="flex items-center p-4 bg-white shadow-md rounded-lg">
                {/* Icon Section */}
                <div className="flex-shrink-0">
                    <i className={`${this.props.icon_name} text-4xl text-gray-500`} />
                </div>

                {/* Content Section */}
                <div className="ml-4">
                    <span className="block text-gray-600">{this.props.name}</span>
                    <h2 className="font-bold text-2xl">{this.props.count}</h2>
                </div>
            </div>
        );
    }
}

export default Widget;
