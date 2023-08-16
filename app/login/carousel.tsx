'use client'

import React from 'react'
import Image from 'next/image'

export default function Carousel() {
  return (
      <div id="carouselExampleCaptions" className="carousel slide h-100">
          <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0"
                  className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                  aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                  aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner h-100">
              <div className="carousel-item active">
                  <Image fill={true} src="/img/img-login-1.jpg" alt="" />
                  <div className="carousel-caption">
                      <h5>Hệ thống quản lý xuất nhập trái cây</h5>
                      <p>Quản lý hàng hóa hiệu quả</p>
                  </div>
              </div>
              <div className="carousel-item">
                  <Image fill={true} src="/img/img-login-2.jpg" alt='' />
                  <div className="carousel-caption">
                      <h5>Theo dõi thông tin xuất nhập trái cây</h5>
                      <p>Thông tin hàng hóa được lưu trữ và theo dõi hiệu quả</p>
                  </div>
              </div>
              <div className="carousel-item">
                  <Image fill={true} src="/img/img-login-3.jpg" alt='' />
                  <div className="carousel-caption">
                      <h5>Thống kê, báo cáo hàng hóa</h5>
                      <p>Kiểm soát, quản lý hàng hóa hiệu quả</p>
                  </div>
              </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
          </button>
      </div>
  )
}
