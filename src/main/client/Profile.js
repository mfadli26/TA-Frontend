import React, { useState, useEffect, useCallback } from 'react';
import HeaderArsip from "../../layout/client/HeaderArsip";
import FooterArsip from "../../layout/client/FooterArsip";
import { shallowEqual, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { get_user_information } from "../../service/service";
import useToast from "../../component/toast";
import { useDispatch } from 'react-redux';

export default function Home() {

    const userId = useSelector(
        (state) => state.user.id,
        shallowEqual
    );

    const userData = useSelector(
        (state) => state.user,
        shallowEqual
    );

    const [loading, setLoading] = useState(true)
    const [finish, setFinish] = useState(false)

    const [Toast, setToast] = useToast();

    const getData = useCallback(() => {
        get_user_information(userId)
            .then((response) => {
                console.log(response.data.data)
            })
            .catch((error) => {
                setToast("Terjadi Kesalahan!", "error", 5000)
            })
        setLoading(false)
    }, [setToast, userId])

    useEffect(getData, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <React.Fragment>
            <main className="flex-shrink-0">
                <HeaderArsip />
                <div className="container-fluid">
                    <div className="wrapper py-3 pt-5" style={{ paddingBottom: "100px !important" }}>
                        <div className="container">
                            <div className="card box-shadow">
                                <div className="card-body py-5">
                                    <div className="row">
                                        <div className="col-md-4 offset-md-1">

                                        </div>
                                        <div className="col-md-7">
                                            <div className="container d-flex h-100">
                                                <div className="row justify-content-center align-self-center">

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-5">
                                            <div className="col-md-7 mx-auto">
                                                <img src="" className="w-100" />
                                            </div>
                                            <div className="col-md-9 mx-auto py-4">
                                                <h3 className="h3 text-center">
                                                    <b> name</b>
                                                </h3>
                                                <h5 className="h5 text-center">
                                                    ktp_number
                                                </h5>
                                                <h5 className="h5 text-center">
                                                    birth_city, birth_date
                                                </h5>
                                                <h5 className="h5 mt-4 text-center">
                                                    Pengguna sejak join_at
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="col-md-7">
                                            <nav className="mb-4">
                                                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                                    <button className="nav-link col-md-6 active" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</button>
                                                    <button className="nav-link col-md-6" id="nav-password-tab" data-bs-toggle="tab" data-bs-target="#nav-password" type="button" role="tab" aria-controls="nav-password" aria-selected="true">Password</button>
                                                </div>
                                            </nav>
                                            <div className="tab-content" id="nav-tabContent">
                                                <div className="tab-pane fade show active" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                                    <form action="/profile" method="post">
                                                        <div className="row mb-3">
                                                            <div className="col-md-3 d-flex align-items-center">
                                                                <span className="form-label m-0">Nomor Telepon :</span>
                                                            </div>
                                                            <div className="col-md-9">
                                                                <input type="text" className="form-control " placeholder="nomor telepon" name="phone_number" />
                                                            </div>
                                                        </div>
                                                        <div className="row mb-3">
                                                            <div className="col-md-3 d-flex align-items-center">
                                                                <span className="form-label m-0">Alamat Lengkap :</span>
                                                            </div>
                                                            <div className="col-md-9">
                                                                <textarea className="form-control" placeholder="alamat lengkap rumah" name="address"></textarea>
                                                            </div>
                                                        </div>
                                                        <div className="row mb-3">
                                                            <div className="col-md-3 d-flex align-items-center">
                                                                <span className="form-label m-0">Alamat Email :</span>
                                                            </div>
                                                            <div className="col-md-9">
                                                                <input type="email" className="form-control" placeholder="alamat email" name="email" />
                                                            </div>
                                                        </div>
                                                        <button type="submit" className="btn btn-primary text-white col-md-3 float-end">Ubah Profil</button>
                                                    </form>
                                                </div>
                                                <div className="tab-pane fade" id="nav-password" role="tabpanel" aria-labelledby="nav-password-tab">
                                                    <form action="/update_password" method="post">
                                                        <div className="row mb-3">
                                                            <div className="col-md-3 d-flex align-items-center">
                                                                <span className="form-label m-0">Kata Sandi Lama :</span>
                                                            </div>
                                                            <div className="col-md-9">
                                                                <input type="password" className="form-control" placeholder="kata sandi lama" name="password_old" />
                                                            </div>
                                                        </div>
                                                        <div className="row mb-3">
                                                            <div className="col-md-3 d-flex align-items-center">
                                                                <span className="form-label m-0">Kata Sandi Baru :</span>
                                                            </div>
                                                            <div className="col-md-9">
                                                                <input type="password" className="form-control" placeholder="kata sandi baru" name="password_new" />
                                                            </div>
                                                        </div>
                                                        <div className="row mb-3">
                                                            <div className="col-md-3 d-flex align-items-center">
                                                                <span className="form-label m-0">Konfirmasi Kata Sandi Baru :</span>
                                                            </div>
                                                            <div className="col-md-9">
                                                                <input type="password" className="form-control" placeholder="konfirmasi kata sandi baru" name="password_new_confirmation" />
                                                            </div>
                                                        </div>
                                                        <button type="submit" className="btn btn-primary text-white col-md-3 float-end">Ubah Kata Sandi</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <FooterArsip />
        </React.Fragment>
    )
}
