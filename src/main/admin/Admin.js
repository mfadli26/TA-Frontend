import React, { useState } from "react";
import { createTheme } from "@mui/material/styles";
import Sidebar from "../../layout/Sidebar";
import Navbar from "../../layout/Navbar";
import Breadcrumb from "../../layout/admin/Breadcrumb";
import Footer from "../../layout/Footer";

const mdTheme = createTheme();

export default function Admin() {
    return (
        <main>
            <div className="container-fluid overflow-hidden">
                <div className="row vh-100 overflow-auto">
                    <Sidebar/>
                    <div className="col d-flex flex-column h-sm-100 p-0">
                        <Navbar/>
                        <Breadcrumb/>
                        <div className="wrapper p-4 h-100">

                        </div>
                        <Footer/>
                    </div>
                </div>
            </div>
        </main>
    );
}