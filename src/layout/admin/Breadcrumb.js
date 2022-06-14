import React from "react";

export default function Breadcrumb() {

    return (
        <div className="container px-4 breadcrumb my-1">
            <h4>
                Home
                <i className="fas fa-chevron-right fs-6"></i>
                <small className="text-muted">data-breadcrumb</small>
            </h4>
        </div>
    )
}