'use client'

import React from 'react'
import Link from 'next/link'
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-5">
            <a className="navbar-brand fw-semibold fs-4 brandFont" href="">
                <span className="text-danger fw-semibold">Fruit</span>System</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item d-flex justify-content-center active">
                        <Link href="/home/import" className="text-decoration-none"><span className="nav-link fs-6 ms-auto me-auto" id="btImport">Import</span></Link>
                    </li>
                    <li className="nav-item d-flex justify-content-center">
                        <Link href="/home/edit" className="text-decoration-none"><span className="nav-link fs-6 ms-auto me-auto" id="btEdit">Edit</span></Link>
                    </li>
                    <li className="nav-item d-flex justify-content-center">
                        <Link href="/home/export" className="text-decoration-none"><span className="nav-link fs-6 ms-auto me-auto" id="btExport">Export</span></Link>
                    </li>
                    <li className="nav-item d-flex justify-content-center">
                        <Link href="/login/signin" className='d-flex flex-column justify-content-center'>
                            <i className="bi bi-box-arrow-right fs-4"></i>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
