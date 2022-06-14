import React from "react";

export default function Navbar() {

    return (
        <header className="d-flex flex-wrap justify-content-end px-4 py-1 mb-3 border-bottom sticky-top bg-light">
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <div className="dropdown">
                        <button className="btn dropdown-toggle profile-button btn-default" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Admin Dispusip
                            <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded ms-2 me-1"></img>
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="#">Logout</a></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </header>
    )
}