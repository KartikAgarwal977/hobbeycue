import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCirclePlus } from "react-icons/fa6";
import "../css/AddOwn.css"
import { FaPlayCircle } from 'react-icons/fa';
import { RiDoubleQuotesL } from "react-icons/ri";
import Footer from './footer';

const AddOwn: React.FC = () => {
    return (
        <>
        <div className="container my-5">
            <div className="card add-own-card">
                <div className="card-body text-center">
                    <div className="icon-wrapper mb-3">
                        <FaCirclePlus className='Plusicon'/>
                    </div>
                    <h5 className="card-title">Add your own</h5>
                    <p className="card-text">Are you a teacher or expert? Do you sell or rent out equipment, venue or event tickets? Or, you know someone who should be on hobbycue? Go ahead and Add your Own page</p>
                    <a href="#" className="btn btn-outline-purple">Add new</a>
                </div>
            </div>
        </div>
        <div className="containerTest my-5">
            <div className="card p-4">
                <div className="card-body">
                    <RiDoubleQuotesL className='rounded-circle m-2 doublequote'/>
                    <h5 className="card-title">Testimonials</h5>
                    <p className="card-text">
                        In a fast-growing and ever-changing city like Bangalore, it sometimes becomes very difficult to find or connect with like-minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.
                    </p>
                    <div className="audio-section d-flex align-items-center">
                        <FaPlayCircle size={24} className="me-2" />
                        <div className="audio-bar flex-grow-1 bg-light position-relative">
                            <div className="audio-progress bg-primary position-absolute" style={{ width: '0%' }}></div>
                        </div>
                        <span className="ms-2">0:00</span>
                        <span className="ms-2"><img src='playimage.png' alt='thumbnail' className='rounded-circle me-3' style={{width:"20px", height: "20px"}}/></span>
                    </div>
                </div>
                <div className="card-footer d-flex align-items-center">
                    <img src="playimage.png" alt="Author Image" className="rounded-circle me-3" style={{ width: '50px', height: '50px' }} />
                    <div>
                        <h6 className="mb-0">Shubha Nagarajan</h6>
                        <small className="text-muted">Classical Dancer</small>
                    </div>
                </div>
            </div>
        </div>
        <div className="container text-center my-5">
            <h1 className="mb-4">
                Your <span className="text-purple">Hobby</span>, Your <span className="text-blue">Community</span>...
            </h1>
            <button className="btn btn-primary mb-4">Get started</button>
            <div className="d-flex justify-content-center">
                <img src="dance.svg" alt="Hobby" className="img-fluid mx-2" style={{ maxHeight: '150px' }} />
            </div>
        </div>
        <Footer/>

        </>
    );
}

export default AddOwn;
