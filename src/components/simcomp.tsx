import React from "react";
import { BsFillBagHeartFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa6";
import { HiUserGroup } from "react-icons/hi";

const SimpleComponent: React.FC = () => {
    return (
        <>
            <div className="container my-5">
                <div className="text-center mb-5">
                    <h1>Explore your <span className="text-primary">hobby</span> or <span className="text-purple">passion</span></h1>
                    <p>
                        Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities...
                    </p>
                    <p>
                        If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products, services or events. Hop on your hobbyhorse and enjoy the ride.
                    </p>
                </div>
                <div className="row justify-content-md-center">
                    <div className="col-md-3">
                        <div className="card card-hover" id="UserSec">
                            <div className="card-body text-center">
                                <div className="d-flex align-items-center">
                                    <HiUserGroup className='Usersicon me-2' />
                                    <h5 className="card-title">People</h5>
                                </div>
                                <p className="card-text">Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist or collaborator.</p>
                                <a href="#" className="btn btn-outline-purple">Connect</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card card-hover" id="PlaceSec">
                            <div className="card-body text-center">
                                <div className="d-flex align-items-center">
                                    <FaMapMarkerAlt className='Placeicon me-2' />
                                    <h5 className="card-title">Place</h5>
                                </div>
                                <p className="card-text">Find a class, school, playground, auditorium, studio, shop or an event venue. Book a slot at venues that allow booking through hobbycue.</p>
                                <a href="#" className="btn btn-outline-purple">Meet up</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-md-center mt-4">
                    <div className="col-md-3">
                        <div className="card card-hover" id="ProductSec">
                            <div className="card-body text-center">
                                <div className="d-flex align-items-center">
                                    <BsFillBagHeartFill className='Producticon me-2' />
                                    <h5 className="card-title">Product</h5>
                                </div>
                                <p className="card-text">Find equipment or supplies required for your hobby. Buy, rent or borrow from shops, online stores or from community members.</p>
                                <a href="#" className="btn btn-outline-purple">Get it</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card card-hover" id="ProgramSec">
                            <div className="card-body text-center">
                                <div className="d-flex align-items-center">
                                    <FaCalendarCheck className='Programicon me-2' />
                                    <h5 className="card-title">Program</h5>
                                </div>
                                <p className="card-text">Find events, meetups and workshops related to your hobby. Register or buy tickets online.</p>
                                <a href="#" className="btn btn-outline-purple">Attend</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default SimpleComponent;