
import "./Home.css";
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
function Add() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="box">
            <h4 className="title">Add A Project</h4>
            <div className="bgImage">
                <div className="borderLine">
                    <a href="http://localhost:3000/home">
                        <button type="button" class="btn btn-primary">
                            Home
                        </button>
                    </a>
                </div>
                <div className="form">
                    <form>
                        <div>
                            <label>Title</label>
                            <input type="text" class="form-control" name="Title" />
                        </div>
                        <div>
                            <label>Release Date</label>
                            <input type="date" class="form-control" name="date" />
                        </div>
                        <div>
                            <label>Description</label>
                            <textarea class="form-control" rows="3" id="comment" name="text"></textarea>
                        </div>
                        <div>
                            <label>Status</label>
                            <select class="form-select" >
                                <option>Select</option>
                                <option>Onprogress</option>
                                <option>Finished</option>
                            </select>
                        </div>
                        <div>
                            <label>Environment</label>
                            <select class="form-select" >
                                <option>Select</option>
                                <option>Pro</option>
                                <option>Pre</option>
                            </select>
                        </div>
                        <div>
                            <Button variant="primary" onClick={handleShow}>
                                Add

                            </Button>

                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Modal heading</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <form>
                                        <div>
                                            <label>Title</label>
                                            <input type="text" class="form-control" name="Title" />
                                        </div>
                                        <div>
                                            <label>Release Date</label>
                                            <input type="date" class="form-control" name="date" />
                                        </div>
                                        <div>
                                            <label>Description</label>
                                            <textarea class="form-control" rows="3" id="comment" name="text"></textarea>
                                        </div>
                                        <div>
                                            <label>Status</label>
                                            <select class="form-select" >
                                                <option>Select</option>
                                                <option>Onprogress</option>
                                                <option>Finished</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label>Environment</label>
                                            <select class="form-select" >
                                                <option>Select</option>
                                                <option>Pro</option>
                                                <option>Pre</option>
                                            </select>
                                        </div>

                                    </form>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                    <Button variant="primary" onClick={handleClose}>
                                       Add
                                    </Button>
                                </Modal.Footer>
                            </Modal>

                            
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default Add;
