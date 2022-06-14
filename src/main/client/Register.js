import React from "react";
import HeaderArsip from "../../layout/client/HeaderArsip";
import BreadcrumbArsip from "../../layout/client/BreadcrumbArsip";
import FooterArsip from "../../layout/client/FooterArsip";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Home() {
    return (
        <React.Fragment>
            <main className="flex-shrink-0">
                <HeaderArsip />
                <BreadcrumbArsip breadcrumTitle="Pendaftaran" />
                <div className="container-fluid">
                    <div className="wrapper py-3 pt-5" style={{ paddingBottom: "100px !important" }} >
                        <div className="container">
                            <div className="card box-shadow">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-5">
                                            <img src="/img/signup.png" className="w-100" alt="signup"/>
                                        </div>
                                        <div className="col-md-7">
                                            {/* @if (count($errors) > 0)
                                    <div className="alert alert-danger">
                                        <ul className="m-0">
                                            @foreach ($errors->all() as $error)
                                            <li>{{ $error }}</li>
                                            @endforeach
                                        </ul>
                                    </div>
                                    @endif
                                    @if (\Session::has('success'))
                                    <div className="alert alert-success">
                                        <div className="m-0">
                                            <span>Akun berhasil dibuat, silahkan login</span>
                                        </div>
                                    </div>
                                    @endif */}
                                            <form action="/daftar/baru" method="post">
                                                {/* {{ csrf_field() }} */}
                                                <div className="row mb-3">
                                                    <div className="col-md-4 d-flex align-items-center">
                                                        <span className="form-label m-0">Nama Lengkap :</span>
                                                    </div>
                                                    <div className="col-md-8">
                                                        <input type="text" className="form-control " placeholder="nama lengkap" name="name" />
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <div className="col-md-4 d-flex align-items-center">
                                                        <span className="form-label m-0">Nomor KTP :</span>
                                                    </div>
                                                    <div className="col-md-8">
                                                        <input type="text" className="form-control " placeholder="nomor ktp" name="ktp_number" />
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <div className="col-md-4 d-flex align-items-center">
                                                        <span className="form-label m-0">Nomor Telepon :</span>
                                                    </div>
                                                    <div className="col-md-8">
                                                        <input type="text" className="form-control " placeholder="nomor telepon" name="phone_number" />
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <div className="col-md-4 d-flex align-items-center">
                                                        <span className="form-label m-0">Jenis Kelamin :</span>
                                                    </div>
                                                    <div className="col-md-8">
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-check-input" type="radio" value="pria" name="sex" />
                                                            <label className="form-check-label">Pria</label>
                                                        </div>
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-check-input" type="radio" value="wanita" name="sex" />
                                                            <label className="form-check-label">Wanita</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <div className="col-md-4 d-flex align-items-center">
                                                        <span className="form-label m-0">Tempat dan Tanggal Lahir :</span>
                                                    </div>
                                                    <div className="col-md-8 row">
                                                        <div className="col-md-6">
                                                            <input type="text" className="form-control col-md-6" placeholder="kota tempat lahir" name="birth_city" />
                                                        </div>
                                                        <div className="col-md-6">
                                                            <input type="date" className="form-control col-md-6" name="birth_date" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <div className="col-md-4 d-flex align-items-center">
                                                        <span className="form-label m-0">Alamat Lengkap :</span>
                                                    </div>
                                                    <div className="col-md-8">
                                                        <textarea className="form-control" placeholder="alamat lengkap rumah" name="address"></textarea>
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <div className="col-md-4 d-flex align-items-center">
                                                        <span className="form-label m-0">Alamat Email :</span>
                                                    </div>
                                                    <div className="col-md-8">
                                                        <input type="email" className="form-control" placeholder="example@email.com" name="email" />
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <div className="col-md-4 d-flex align-items-center">
                                                        <span className="form-label m-0">Kata Sandi :</span>
                                                    </div>
                                                    <div className="col-md-8">
                                                        <input type="password" className="form-control" placeholder="kata sandi" name="password" />
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <div className="col-md-4 d-flex align-items-center">
                                                        <span className="form-label m-0">Konfirmasi Kata Sandi :</span>
                                                    </div>
                                                    <div className="col-md-8">
                                                        <input type="password" className="form-control" placeholder="konfirmasi kata sandi" name="password_confirmation" />
                                                    </div>
                                                </div>
                                                <button type="submit" className="btn btn-primary text-white col-md-4">Daftar</button>
                                            </form>
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