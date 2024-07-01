import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { IoIosNotifications, IoMdBookmark } from 'react-icons/io';
import { FaSearch, FaCompass, FaShoppingCart } from 'react-icons/fa';
import { MdStars, MdOutlineMenu } from 'react-icons/md';
import '../css/navibar.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const NavigationBar: React.FC = () => {
    return (
        <>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">
                <img
                  src="logo.svg"
                  alt="Logo"
                  width="325"
                  height="50"
                  className="d-inline-block align-top"
                />
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                <MdOutlineMenu />
              </button>
              <div className="collapse navbar-collapse d-flex flex-row-reverse" id="navbarContent">
                <ul className="navbar-nav d-flex justify-content-end pr-0">
                  <li className="nav-item p-2">
                    <Link className="nav-link" to="/explore">
                      <FaCompass /> Explore
                    </Link>
                  </li>
                  <li className="nav-item p-2">
                    <Link className="nav-link" to="/hobbies">
                      <MdStars /> Hobbies
                    </Link>
                  </li>
                  <li className="nav-item p-2">
                    <Link className="nav-link" to="/bookmarks">
                      <IoMdBookmark />
                    </Link>
                  </li>
                  <li className="nav-item p-2">
                    <Link className="nav-link" to="/notifications">
                      <IoIosNotifications />
                    </Link>
                  </li>
                  <li className="nav-item p-2">
                    <Link className="nav-link" to="/cart">
                      <FaShoppingCart />
                    </Link>
                  </li>
                  <li className="nav-item p-2">
                    <a className="nav-link sign-in-button" href="/signin">
                      Sign In
                    </a>
                  </li>
                </ul>
              </div>
              <form className="d-flex my-2 my-lg-0 ml-auto">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search here..."
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-primary my-2 my-sm-0"
                  type="submit"
                >
                  <FaSearch />
                </button>
              </form>
            </div>
          </nav>
          <Outlet />
        </>
      );
};

export default NavigationBar;