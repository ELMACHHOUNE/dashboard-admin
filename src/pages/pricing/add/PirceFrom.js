import React, { Component } from 'react';

class PirceFrom extends Component {
    constructor(props) {
        super(props);
        // Create refs for each input field
        this.banned1Ref = React.createRef();
        this.banned2Ref = React.createRef();
        this.userRef = React.createRef();
    }

    render() {
        return (
            <>
                <div className="topic_form">
                    <form>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label htmlFor="banned1">Price for Banned 1</label>
                                    <input 
                                        type="number"
                                        className="form-control"
                                        id="banned1"
                                        ref={this.banned1Ref}  // Using the ref correctly
                                        name="banned1"
                                        placeholder="price for banned 1"
                                    />
                                    {/* <small className="text-danger">{this.state.banned1}</small> */}
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label htmlFor="banned2">Price for Banned 2</label>
                                    <input 
                                        type="number"
                                        className="form-control"
                                        id="banned2"
                                        ref={this.banned2Ref}  // Using the ref correctly
                                        name="banned2"
                                        placeholder="price for banned 2"
                                    />
                                    {/* <small className="text-danger">{this.state.banned2}</small> */}
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label htmlFor="user">Price for User</label>
                                    <input 
                                        type="number"
                                        className="form-control"
                                        id="user"
                                        ref={this.userRef}  // Using the ref correctly
                                        name="user"
                                        placeholder="price for user"
                                    />
                                    {/* <small className="text-danger">{this.state.user}</small> */}
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

export default PirceFrom;
