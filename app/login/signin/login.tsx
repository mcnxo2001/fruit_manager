'use client'

import React from 'react'
import Link from 'next/link'

export default function LoginArena() {
    return (
        <div className="d-flex flex-column justify-content-between h-100">
            <div className="theme d-flex flex-column justify-content-center align-content-center">
                <span className="fw-bold mb-2">Login</span>
                <div className="title text-center">Welcome to the Fruit Management System</div>
            </div>
            <form className="loginForm px-4 d-flex flex-column justify-content-center">
                <div className="form-group">
                    <label>Email address</label>
                    <input type="text" className="form-control my-2" id="ipAccountArena"
                        aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control my-2" id="ipPasswordArena"
                        placeholder="Password" />
                </div>
                <Link href="../../home/import"><button type="submit" className="btn btn-primary my-3 w-100" id="btLogin">Submit</button></Link>
            </form>
            <div className="aboutUs text-center text-secondary d-flex flex-column justify-content-center">
                <div>
                    <i className="bi bi-google"></i>
                    <span>Sign in with Google</span>
                </div>
                <div>
                    New account?
                    <Link href="/login/regist" className="text-decoration-none"><div className="text-success w-25 ms-auto me-auto" id="btCreateAccount">Create account</div></Link>
                </div>
            </div>
        </div>
    )
}
