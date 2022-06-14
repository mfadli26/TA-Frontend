import React from "react";
import HeaderHome from "../../layout/client/HeaderHome";
import FooterHome from "../../layout/client/FooterHome";
import "../../assets/css/home.css"
import { toAbsoluteUrl } from "../../helper/AssetsHelper";

export default function Home() {
    return (
        <div className="antialiased">
            <div className="container-fluid bg-image" style={{backgroundImage: `url(${toAbsoluteUrl("/img/bg.jpg")})` }}>
                <div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center py-4 sm:pt-0" style={{background: "transparent"}}>
                    <div className="mx-auto sm:px-6 lg:px-8">
                        <div className="mt-8 bg-white dark:bg-gray-800 overflow-hidden shadow">
                            <HeaderHome />
                            <div className="grid grid-cols-1">
                                <div id="carouselExampleControls" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="false">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src="/img/banner-1.jpg" className="d-block w-100" alt="banner-1" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="/img/banner-2.jpg" className="d-block w-100" alt="banner-2" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="/img/banner-3.jpg" className="d-block w-100" alt="banner-3" />
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 position-relative">
                                <img className="position-absolute" src="https://dispusip.jakarta.go.id/dispusip/wp-content/uploads/2019/05/BACKGROUND-02.jpg" alt="background" style={{width: 1920, height: 1080}}
                                // style="width: 1920px; height: 1080px;"
                                />
                                <div className="wrapper position-relative">
                                    <div className="text-center py-3 pt-5">
                                        <h2 className="h2">Latest Archive</h2>
                                    </div>
                                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="false">
                                        <div className="carousel-indicators carousel-indicators-bottom">
                                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                        </div>
                                        <div className="button-event p-3 text-end pe-5">
                                            <button className="px-4 py-2 rounded-pill" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                                Prev
                                            </button>
                                            <button className="px-4 py-2 rounded-pill" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                                Next
                                            </button>
                                        </div>
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <div className="row row-cols-1 row-cols-md-4 g-4 px-5">
                                                    <div className="col-md">
                                                        <div className="card px-2 rounded-0">
                                                            <img src="/img/banner-3.jpg" className="card-img-top rounded-0 pt-2" alt="event-1" />
                                                            <div className="card-body px-0">
                                                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                                                <a href="/#" className="btn btn-success text-light float-end">Go somewhere</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md">
                                                        <div className="card px-2 rounded-0">
                                                            <img src="/img/banner-3.jpg" className="card-img-top rounded-0 pt-2" alt="event-1" />
                                                            <div className="card-body px-0">
                                                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                                                <a href="/#" className="btn btn-success text-light float-end">Go somewhere</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md">
                                                        <div className="card px-2 rounded-0">
                                                            <img src="/img/banner-3.jpg" className="card-img-top rounded-0 pt-2" alt="event-1" />
                                                            <div className="card-body px-0">
                                                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                                                <a href="/#" className="btn btn-success text-light float-end">Go somewhere</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md">
                                                        <div className="card px-2 rounded-0">
                                                            <img src="/img/banner-3.jpg" className="card-img-top rounded-0 pt-2" alt="event-1" />
                                                            <div className="card-body px-0">
                                                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                                                <a href="/#" className="btn btn-success text-light float-end">Go somewhere</a>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="carousel-item">
                                                <div className="row row-cols-1 row-cols-md-4 g-4 px-5">
                                                    <div className="col-md">
                                                        <div className="card px-2 rounded-0">
                                                            <img src="/img/banner-2.jpg" className="card-img-top rounded-0 pt-2" alt="event-1" />
                                                            <div className="card-body px-0">
                                                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                                                <a href="/#" className="btn btn-success text-light float-end">Go somewhere</a>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className="col-md">
                                                        <div className="card px-2 rounded-0">
                                                            <img src="/img/banner-2.jpg" className="card-img-top rounded-0 pt-2" alt="event-1" />
                                                            <div className="card-body px-0">
                                                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                                                <a href="/#" className="btn btn-success text-light float-end">Go somewhere</a>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className="col-md">
                                                        <div className="card px-2 rounded-0">
                                                            <img src="/img/banner-2.jpg" className="card-img-top rounded-0 pt-2" alt="event-1" />
                                                            <div className="card-body px-0">
                                                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                                                <a href="/#" className="btn btn-success text-light float-end">Go somewhere</a>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className="col-md">
                                                        <div className="card px-2 rounded-0">
                                                            <img src="/img/banner-2.jpg" className="card-img-top rounded-0 pt-2" alt="event-1" />
                                                            <div className="card-body px-0">
                                                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                                                <a href="/#" className="btn btn-success text-light float-end">Go somewhere</a>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="carousel-item">
                                                <div className="row row-cols-1 row-cols-md-4 g-4 px-5">
                                                    <div className="col-md">
                                                        <div className="card px-2 rounded-0">
                                                            <img src="/img/banner-1.jpg" className="card-img-top rounded-0 pt-2" alt="event-1" />
                                                            <div className="card-body px-0">
                                                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                                                <a href="/#" className="btn btn-success text-light float-end">Go somewhere</a>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className="col-md">
                                                        <div className="card px-2 rounded-0">
                                                            <img src="/img/banner-1.jpg" className="card-img-top rounded-0 pt-2" alt="event-1" />
                                                            <div className="card-body px-0">
                                                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                                                <a href="/#" className="btn btn-success text-light float-end">Go somewhere</a>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className="col-md">
                                                        <div className="card px-2 rounded-0">
                                                            <img src="/img/banner-1.jpg" className="card-img-top rounded-0 pt-2" alt="event-1" />
                                                            <div className="card-body px-0">
                                                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                                                <a href="/#" className="btn btn-success text-light float-end">Go somewhere</a>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className="col-md">
                                                        <div className="card px-2 rounded-0">
                                                            <img src="/img/banner-1.jpg" className="card-img-top rounded-0 pt-2" alt="event-1" />
                                                            <div className="card-body px-0">
                                                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                                                <a href="/#" className="btn btn-success text-light float-end">Go somewhere</a>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <FooterHome />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <script src="/js/app.js"></script> */}
        </div>
    )
}
