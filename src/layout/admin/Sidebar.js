import React from "react";

export default function Sidebar() {

    return (
        <div className="col-12 col-sm-3 col-xl-2 px-sm-2 px-0 bg-dark d-flex sticky-top">
            <div className="d-flex flex-sm-column flex-row flex-grow-1 align-items-center align-items-sm-start px-3 pt-2 text-white">
                <a href="/" className="d-flex align-items-center pb-sm-3 mb-md-0 me-md-auto text-white text-decoration-none text-center mx-auto pb-md-0">
                    <span className="fs-4">D<span className="d-none d-sm-inline">ispusip Admin</span></span>
                </a>
                <hr className="custom-w-100"></hr>
                <ul className="nav nav-pills flex-sm-column flex-row flex-nowrap w-100 flex-shrink-1 flex-sm-grow-0 flex-grow-1 mb-sm-auto mb-0 justify-content-center align-items-center align-items-sm-start" id="menu">
                    <li className="nav-item active custom-w-100">
                        <a href="/admin/menu" className="nav-link px-2 text-white {{$data->sidebar == 'home' ? 'active' : ''}}">
                            <i className="fas fa-home me-2"></i>
                            <span className="ms-1 d-none d-sm-inline">Home</span>
                        </a>
                    </li>
                    <li className="nav-item custom-w-100">
                        <a href="/admin/menu/all_user/1/" className="nav-link px-2 text-white {{$data->sidebar == 'user' ? 'active' : ''}}">
                            <i className="fas fa-user me-2"></i>
                            <span className="ms-1 d-none d-sm-inline">User</span>
                        </a>
                    </li>
                    <li className="nav-item custom-w-100">
                        <a href="/admin/menu/archive_all/1/" className="nav-link px-2 text-white {{$data->sidebar == 'archive' ? 'active' : ''}}">
                            <i className="fas fa-book me-2"></i>
                            <span className="ms-1 d-none d-sm-inline">Archive</span>
                        </a>
                    </li>
                    <li className="nav-item custom-w-100">
                        <a href="/admin/menu/category" className="nav-link px-2 text-white {{$data->sidebar == 'category' ? 'active' : ''}}">
                            <i className="fas fa-archive me-2"></i>
                            <span className="ms-1 d-none d-sm-inline">Category</span>
                        </a>
                    </li>
                </ul>
                <hr className="custom-w-100"></hr>
            </div>
        </div>
    )
}