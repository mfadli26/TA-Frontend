import React from "react";
import HeaderArsip from "../../layout/client/HeaderArsip";
import FooterArsip from "../../layout/client/FooterArsip";

export default function Archive() {
    return (
        <React.Fragment>
            <main className="flex-shrink-0">
            <HeaderArsip />
                <div className="container-fluid">
                    <div className="wrapper py-3 pt-5" style={{ paddingBottom: "100px !important" }} >
                        <div className="container">
                            <div className="text-center text-dark" style={{ paddingBottom: "100px !important" }}>
                                <h1 className="h1">SELAMAT DATANG DI SISTEM LAYANAN KEARSIPAN ONLINE</h1>
                            </div>
                            <div className="col-md-8 mx-auto pt-5" style={{ paddingBottom: "100px !important" }}>
                                <form action="/archive/main" method="post">
                                    <div className="input-group input-group-lg">
                                        <input type="text" className="form-control" name="search" placeholder="Masukkan Nama atau Nomor Arsip" />
                                        <button className="btn btn-success text-white" type="submit">Cari Arsip</button>
                                    </div>
                                </form>
                            </div>
                            <div>
                                <div className="text-center text-dark py-4">
                                    <h1 className="h1">Panduan Penggunaan Layanan Kearsipan Online</h1>
                                </div>
                                <div className="col-md-7 mx-auto">
                                    <img src="/img/panduan.jpg" className="w-100 border border-secondary" style={{ borderWidth: "10px" }} alt="panduan" />
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
