import React from "react";
import { shallowEqual, useSelector } from "react-redux";

export default function HeaderArsip() {
    const urlLocation = window.location.pathname

    const isAuthorized = useSelector(
        (state) => state.user !== null && Object.keys(state.user).length > 0,
        shallowEqual
    );

    return (
        <div className="header bg-white">
            <header className="d-flex flex-wrap border-bottom row">
                <div className="col-md-2 offset-md-1">
                    <a href="/" className="nav-link text-secondary">
                        <img className="mw-100" src="/img/logo.jpg" alt="logo" />
                    </a>
                </div>
                <div className="col-md-8">
                    <ul className="nav col-lg-auto my-2 justify-content-end my-md-0 text-small h-100 align-items-center">
                        <li className="text-center px-4 border-end">
                            <a href="/" className="nav-link text-dark fs-6 btn-hover">
                                Beranda
                            </a>
                        </li>
                        <li className="text-center px-4 border-end">
                            <a href="/archive" className={`nav-link fs-6 btn-hover ${urlLocation === "/archive" ? 'link-active' : 'text-dark'}`}>
                                Kearsipan
                            </a>
                        </li>
                        {isAuthorized ?
                            (
                                <li className="text-center px-4 border-end">
                                    <a href="/profile" className={`nav-link fs-6 btn-hover ${urlLocation === "/profile" ? 'link-active' : 'text-dark'}`}>
                                        Profil
                                    </a>
                                </li>
                            ) : (
                                <li className="text-center px-4 border-end">
                                    <a href="/daftar" className={`nav-link fs-6 btn-hover ${urlLocation === "/daftar" ? 'link-active' : 'text-dark'}`}>
                                        Daftar
                                    </a>
                                </li>
                            )
                        }
                        {isAuthorized ?
                            (
                                <li className="text-center px-4">
                                    <a href="/keluar" className={`nav-link fs-6 btn-hover ${urlLocation === "/keluar" ? 'link-active' : 'text-dark'}`}>
                                        Logout
                                    </a>
                                </li>
                            ) : (
                                <li className="text-center px-4">
                                    <a href="/masuk" className={`nav-link fs-6 btn-hover ${urlLocation === "/masuk" ? 'link-active' : 'text-dark'}`}>
                                        Masuk
                                    </a>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </header>
        </div>
    )
}