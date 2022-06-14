import React, { useState } from "react";
import HeaderArsip from "../../layout/client/HeaderArsip";
import BreadcrumbArsip from "../../layout/client/BreadcrumbArsip";
import FooterArsip from "../../layout/client/FooterArsip";
import { useFormik } from "formik";
import * as Yup from "yup";
import { login } from "../../service/service";
import { addTodo } from '../../redux/actions';
import { connect, useDispatch } from 'react-redux';
import useToast from "../../component/toast";

function Login() {

    const [loading, setLoading] = useState(false)
    const [finish, setFinish] = useState(false)

    const dispatch = useDispatch();

    const [Toast, setToast] = useToast();

    const initialValues = {
        email: "",
        password: "",
    };

    const LoginSchema = Yup.object().shape({
        email: Yup.string()
            .required(
                "Kolom Wajib Diisi"
            ),
        password: Yup.string()
            .required(
                "Kolom Wajib Diisi"
            ),
    });

    const formik = useFormik({
        initialValues,
        validationSchema: LoginSchema,
        onSubmit: async (values, { setStatus, setSubmitting }) => {
            setLoading(true);
            login(values.email, values.password)
                .then((response) => {
                    setLoading(false);
                    setFinish(true)
                    setTimeout(() => {
                        dispatch(addTodo(response.data.data));
                      }, 1500);
                })
                .catch((error) => {
                    setToast("Terjadi Kesalahan!", "error", 3000)
                    setLoading(false);
                });
        },
    });

    return (
        <React.Fragment>
            <Toast />
            <main className="flex-shrink-0">
                <HeaderArsip />
                <BreadcrumbArsip breadcrumTitle="Masuk" />
                <div className="container-fluid">
                    <div className="wrapper py-3 pt-5" style={{ paddingBottom: "100px !important" }} >
                        <div className="container">
                            <div className="card box-shadow">
                                <div className="card-body">
                                    <div className="row align-items-center">
                                        <div className="col-md-5">
                                            <div className="col-md-9 mx-auto">
                                                <img src="/img/login.png" className="w-100" alt="login" />
                                            </div>
                                        </div>
                                        <div className="col-md-7">
                                            {/* @if (\Session::has('success'))
                                            <div className="alert alert-success">
                                                <div className="m-0">
                                                    <span>Login berhasil</span>
                                                </div>
                                            </div>
                                            @endif
                                            @if (\Session::has('fail'))
                                            <div className="alert alert-danger">
                                                <div className="m-0">
                                                    <span>Gagal masuk, silahkan cek kembali username dan kata sandi anda</span>
                                                </div>
                                            </div>
                                            @endif */}
                                            <form noValidate autoComplete="off" onSubmit={formik.handleSubmit}>
                                                <div className="row mb-3 d-flex justify-content-center">
                                                    <div className="col-md-3 d-flex">
                                                        <span className="form-label m-0">Alamat Email :</span>
                                                    </div>
                                                    <div className="col-md-9">
                                                        <input
                                                            type="email"
                                                            disabled={loading || finish}
                                                            className="form-control"
                                                            placeholder="example@email.com"
                                                            {...formik.getFieldProps("email")}
                                                        />
                                                        {formik.touched.email && formik.errors.email ? (
                                                            <div className="text-center">
                                                                <small className="text-danger">
                                                                    {formik.errors.email}
                                                                </small>
                                                            </div>
                                                        ) : null}
                                                    </div>
                                                </div>
                                                <div className="row mb-3 d-flex justify-content-center">
                                                    <div className="col-md-3 d-flex">
                                                        <span className="form-label m-0">Kata Sandi :</span>
                                                    </div>
                                                    <div className="col-md-9">
                                                        <input
                                                            type="password"
                                                            disabled={loading || finish}
                                                            className="form-control"
                                                            placeholder="kata sandi"
                                                            {...formik.getFieldProps("password")}
                                                        />

                                                    </div>
                                                    <div className="col-md-9 offset-md-3">
                                                        {formik.touched.password && formik.errors.password ? (
                                                            <div className="text-center">
                                                                <small className="text-danger">
                                                                    {formik.errors.password}
                                                                </small>
                                                            </div>
                                                        ) : null}
                                                    </div>
                                                </div>
                                                <button
                                                    type="submit"
                                                    className="btn btn-primary text-white col-md-3 mt-3"
                                                    disabled={loading || finish}
                                                >
                                                    Masuk
                                                    {loading && <div className="spinner-border spinner-border-sm ms-2" role="status"></div>}
                                                    {finish && <i className="fas fa-check ms-2"></i>}
                                                </button>
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

export default connect()(Login);