import React, { Component } from 'react';

class AdsForm extends Component {
    constructor(props) {
        super(props);
        // Create refs for each input field
        this.titleRef = React.createRef();
        this.descriptionRef = React.createRef();
        this.linkRef = React.createRef();
    }

    render() { 
        return (
            <>
                <div className="ads_form">
                    <form>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label htmlFor="title">Ad Title</label>
                                    <input 
                                        type="text"
                                        className="form-control"
                                        id="title"
                                        ref={this.titleRef}  // Use the ref correctly here
                                        name="title"
                                        placeholder="Enter ad title"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label htmlFor="description">Description</label>
                                    <input 
                                        type="text"
                                        className="form-control"
                                        id="description"
                                        ref={this.descriptionRef}  // Use the ref correctly here
                                        name="description"
                                        placeholder="Enter description"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label htmlFor="link">Ad Link</label>
                                    <input 
                                        type="text"
                                        className="form-control"
                                        id="link"
                                        ref={this.linkRef}  // Use the ref correctly here
                                        name="link"
                                        placeholder="Enter ad link"
                                    />
                                </div>
                            </div>
                        </div>
                        <button className="btn btn-success btn-sm form-control mb-3 btn_custom">Save</button>
                    </form>
                </div>
            </>
        );
    }
}

export default AdsForm;
