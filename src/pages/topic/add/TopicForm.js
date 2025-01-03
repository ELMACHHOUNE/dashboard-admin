import React, { Component } from 'react';

class TopicForm extends Component {
    constructor(props) {
        super(props);
        this.nameRef = React.createRef();
        this.subjectRef = React.createRef();
        this.subTopicRef = React.createRef();
    }

    handleSubmit = (e) => {
        e.preventDefault();

        // Access values from refs
        const name = this.nameRef.current.value;
        const subject = this.subjectRef.current.value;
        const subTopic = this.subTopicRef.current.value;

        console.log('Form Data:', { name, subject, subTopic });

        // Reset fields after submission
        this.nameRef.current.value = '';
        this.subjectRef.current.value = '';
        this.subTopicRef.current.value = '';
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="topic-form">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="form-group">
                            <label htmlFor="name">Your Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                ref={this.nameRef}
                                placeholder="Enter your name"
                            />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input
                                type="text"
                                className="form-control"
                                id="subject"
                                ref={this.subjectRef}
                                placeholder="Enter subject"
                            />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="form-group">
                            <label htmlFor="sub_topic">Sub Topic</label>
                            <input
                                type="text"
                                className="form-control"
                                id="sub_topic"
                                ref={this.subTopicRef}
                                placeholder="Enter sub-topic"
                            />
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-success">
                    Save
                </button>
            </form>
        );
    }
}

export default TopicForm;
