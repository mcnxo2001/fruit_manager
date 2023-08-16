'use client'

import React from 'react'
import Link from 'next/link'

export default function Regist() {
  return (
      <div className="d-flex flex-column justify-content-between h-100">
          <div className="theme d-flex flex-column justify-content-center align-content-center">
              <span className="fw-bold mb-2">Registion</span>
              <div className="title text-center">Welcome to the Fruit Management System</div>
          </div>
          <form className="loginForm px-4 d-flex flex-column justify-content-center">
              <div className="form-group">
                  <label>Full name</label>
                  <input type="email" className="form-control my-2" id="exampleInputEmail1"
                      aria-describedby="emailHelp" placeholder="Enter your name" />
              </div>
              <div className="form-group">
                  <label>Email address</label>
                  <input type="email" className="form-control my-2" id="exampleInputEmail1"
                      aria-describedby="emailHelp" placeholder="Enter email" />
              </div>
              <div className="form-group">
                  <label>Password</label>
                  <input type="password" className="form-control my-2" id="exampleInputPassword1"
                      placeholder="Enter your password" />
              </div>
              <div className="form-group">
                  <label>Confirm Password</label>
                  <input type="password" className="form-control my-2" id="exampleInputPassword1"
                      placeholder="Confirm your password" />
              </div>
              <button type="submit" className="btn btn-primary mt-2">Submit</button>
          </form>
          <div className="aboutUs text-center text-secondary d-flex flex-column justify-content-center">
              <div>
                  <i className="bi bi-google"></i>
                  <span className="text-warning">Sign in with Google</span>
              </div>
              <div>
                  Have a exist account
                  <Link href="/login/signin" className="text-decoration-none"><div className="text-success w-25 ms-auto me-auto" id="btLoginAccount">Login account</div></Link>
              </div>
          </div>
      </div>
  )
}
