'use client'

import '../styles/Login.css'
import { useEffect } from 'react'
import Page from './signin/page'

export default function Login() {

    useEffect(() => {
        typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null
    }, [])

    return (
        <>
            <Page/>
        </>
    )
}
