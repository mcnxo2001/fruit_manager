'use client'

import React from 'react'
import '../styles/Home.css'
import { useEffect } from 'react'
import Page from './import/page'

export default function Home() {

    useEffect(() => {
        typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null
    }, [])

    return (
        <>
            <Page/>
        </>
    )
}
