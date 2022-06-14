import React from "react";

export default function BreadcrumbArsip(props) {
    const { breadcrumTitle } = props

    return (
        <div className="breadcrumb" style={{ backgroundColor: "#616365" }}>
            <div className="col-md-11 offset-md-1">
                <h2 className="h2 m-0 ps-3 py-4 text-light">{breadcrumTitle}</h2>
            </div>
        </div>
    )
}