import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest, FaGooglePlusG, FaYoutube, FaTelegram, FaEnvelope } from 'react-icons/fa';
import '../css/footer.css';
const Footer: React.FC = () => {
    return (

        <footer className="bg-light py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h5>Hobbycue</h5>
                        <ul className="list-unstyled">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Our Services</a></li>
                            <li><a href="#">Work with Us</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>How Do I</h5>
                        <ul className="list-unstyled">
                            <li><a href="#">Sign Up</a></li>
                            <li><a href="#">Add a Listing</a></li>
                            <li><a href="#">Claim Listing</a></li>
                            <li><a href="#">Post a Query</a></li>
                            <li><a href="#">Add a Blog Post</a></li>
                            <li><a href="#">Other Queries</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#">Listings</a></li>
                            <li><a href="#">Blog Posts</a></li>
                            <li><a href="#">Shop / Store</a></li>
                            <li><a href="#">Community</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>Social Media</h5>
                        <ul className="list-unstyled d-flex">
                            <li className="mr-2"><a href="#"><FaFacebookF /></a></li>
                            <li className="mr-2"><a href="#"><FaTwitter /></a></li>
                            <li className="mr-2"><a href="#"><FaInstagram /></a></li>
                            <li className="mr-2"><a href="#"><FaPinterest /></a></li>
                            <li className="mr-2"><a href="#"><FaGooglePlusG /></a></li>
                            <li className="mr-2"><a href="#"><FaYoutube /></a></li>
                            <li className="mr-2"><a href="#"><FaTelegram /></a></li>
                            <li className="mr-2"><a href="#"><FaEnvelope /></a></li>
                        </ul>
                        <h5 className="mt-4">Invite Friends</h5>
                        <div className="input-group mb-3">
                            <input type="email" className="form-control" placeholder="Email ID" />
                            <div className="input-group-append">
                                <button className="btn btn-primary" type="button">Invite</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-4">
                    <p>© Purple Cues Private Limited</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;