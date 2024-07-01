import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Authentication.css';
import { FcGoogle } from "react-icons/fc";
import { FaSquareFacebook } from "react-icons/fa6";
import Homepage from './Home';
import AddOwn from '../components/addOwn';
import SimpleComponent from '../components/simcomp';

const Authentication: React.FC = () => {
    return (
        <>
            <div className="container-fluid auth-container">
                <div className="row">
                    <div className="col-md-6 left-section">
                        <h1 className="explore-text">Explore your <span className="highlight">hobby</span> or <span className="highlight">passion</span></h1>
                        <p className="description">
                            Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers,
                            suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be
                            about visual or performing arts, sports, games, gardening, model making, cooking, indoor or
                            outdoor activities...
                        </p>
                        <p className="description">
                            If you are an expert or a seller, you can Add your Listing and promote yourself, your students,
                            products, services or events. Hop on your hobbyhorse and enjoy the ride.
                        </p>
                        <div className="illustration">
                            <img src='authimg.svg' />
                        </div>
                    </div>
                    <div className="col-md-6 right-section">
                        <div className="auth-card">
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="signIn-tab" data-bs-toggle="tab" data-bs-target="#signIn" type="button" role="tab" aria-controls="signIn" aria-selected="true">Sign In</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="joinIn-tab" data-bs-toggle="tab" data-bs-target="#joinIn" type="button" role="tab" aria-controls="joinIn" aria-selected="false">Join In</button>
                                </li>
                            </ul>
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="signIn" role="tabpanel" aria-labelledby="signIn-tab">
                                    <button className="btn btn-outline-secondary auth-button"><FcGoogle /> Continue with Google</button>
                                    <button className="btn btn-outline-secondary auth-button"><FaSquareFacebook className='text-primary' /> Continue with Facebook</button>
                                    <div className="separator">Or connect with</div>
                                    <form>
                                        <div className="mb-3">
                                            <input type="email" className="form-control" id="email" placeholder="Email" />
                                        </div>
                                        <div className="mb-3">
                                            <input type="password" className="form-control" id="password" placeholder="Password" />
                                        </div>
                                        <div className="d-flex justify-content-between mb-3">
                                            <div>
                                                <input type="checkbox" id="rememberMe" />
                                                <label htmlFor="rememberMe"> Remember me</label>
                                            </div>
                                            <a href="/forgot-password" className="forgot-password">Forgot password?</a>
                                        </div>
                                        <button type="submit" className="btn btn-primary auth-submit-button">Continue</button>
                                    </form>
                                </div>
                                <div className="tab-pane fade" id="joinIn" role="tabpanel" aria-labelledby="joinIn-tab">
                                    <button className="btn btn-outline-secondary auth-button"><FcGoogle /> Continue with Google</button>
                                    <button className="btn btn-outline-secondary auth-button"><FaSquareFacebook className='text-primary' /> Continue with Facebook</button>
                                    <div className="separator">Or connect with</div>
                                    <form>
                                        <div className="mb-3">
                                            <input type="email" className="form-control" id="email" placeholder="Email" />
                                        </div>
                                        <div className="mb-3">
                                            <input type="password" className="form-control" id="password" placeholder="Password" />
                                        </div>
                                        <button type="submit" className="btn btn-primary auth-submit-button">Continue</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <SimpleComponent />
            <AddOwn />
            
        </>
    );
};

export default Authentication;
