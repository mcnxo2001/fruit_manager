'use client'

import React from 'react'
import Regist from './regist'
import Carousel from '../carousel'
import '../../styles/Login.css'

export default function Page() {
  return (
      <>
          <div className="loginForm h-100">
              <div className="container-fluid h-100">
                  <div className="row h-100">
                      <div className="loginFormInfor col-lg-8 col-md-12 col-sm-12 m-0 p-0">
                          <Carousel />
                      </div>
                      <div className="col-12 col-lg-4 col-md-12 col-sm-12 py-3" id="LoginArena">
                          <Regist />
                      </div>
                  </div>
              </div>
          </div>
      </>
  )
}
