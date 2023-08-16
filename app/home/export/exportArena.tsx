'use client'

import React from 'react'
import { useEffect } from 'react'
import '../../styles/Home.css'

export default function ExportArena() {

    useEffect(() => {
        typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null
    }, [])

    return (
        <div id="exportArena">
            <div className="themeArena">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 text-center mt-2 text-uppercase fw-semibold">
                            <div className="fs-5" style={{ fontFamily: 'cursive' }}><span className="text-success">Export</span> Arena
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
