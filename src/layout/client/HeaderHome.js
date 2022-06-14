import React from "react";
import { shallowEqual, useSelector, connect } from "react-redux";

function HeaderHome() {

    const isAuthorized = useSelector(
        (state) => state.user !== null && Object.keys(state.user).length > 0,
        shallowEqual
    );

    const handleLogout = () => {
        localStorage.removeItem("persist:earchive");
        window.location.replace(window.location.origin + "/");
    };

    return (
        <div className="header">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between border-bottom row">
                <div className="col-md-3">
                    <a href="/" className="nav-link text-secondary">
                        <img className="mw-100" src="/img/logo.jpg" alt="logo" />
                    </a>
                </div>
                <div className="col-md-9">
                    <ul className="nav col-lg-auto my-2 justify-content-end my-md-0 text-small h-100 align-items-center">
                        <li className="text-center px-6 border-end">
                            <a href="/" className="nav-link  link-active fs-5 btn-hover">
                                Beranda
                            </a>
                        </li>
                        <li className="text-center px-6 border-end">
                            <a href="/archive" className="nav-link text-dark fs-5 btn-hover">
                                Kearsipan
                            </a>
                        </li>
                        {!isAuthorized ?
                            (
                                <li className="text-center px-6 border-end">
                                    <a href="/daftar" className="nav-link text-dark fs-5 btn-hover">
                                        Daftar
                                    </a>
                                </li>
                            )
                            :
                            <li className="text-center px-6 border-end">
                                <a href="/profile" className="nav-link text-dark fs-5 btn-hover">
                                    Profil
                                </a>
                            </li>
                        }
                        {!isAuthorized ?
                            (
                                <li className="text-center px-6">
                                    <a href="/masuk" className="nav-link text-dark fs-5 btn-hover">
                                        Masuk
                                    </a>
                                </li>
                            )
                            :

                            <li className="text-center px-6 border-end">
                                <a href="/#" className="nav-link text-dark fs-5 btn-hover" onClick={handleLogout}>
                                    Keluar
                                </a>
                            </li>
                        }
                    </ul>
                </div>
            </header>
        </div>
    )
}

export default connect()(HeaderHome);