'use client'

import React, { useRef, useState } from 'react'
import DataJson from '../../data/data.json'
import ReactDOM from 'react-dom/client'
import { useEffect } from 'react'
import '../../styles/Home.css'
import { handleClickDelete } from '../function'
import { fnAddForm } from '../function'

export default function ImportArena() {

    useEffect(() => {
        typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null
    }, [])

    const [checkText, setCheckText] = useState('')
    const checkExist = useRef(false)

    useEffect(() => {
        let reportCode = document.getElementById('reportCode') as HTMLInputElement
        let checkingExist = document.getElementById('checkingExist') as HTMLLabelElement
        for (let i = 0; i < DataJson.length; i++) {
            if (reportCode.value === DataJson[i].reportName) {
                checkingExist.innerHTML = 'The reportName has been existed !!!'
                checkExist.current = true
                break
            }
            else {
                checkingExist.innerHTML = ''
                checkExist.current = false
            }
        }
    }, [checkText])

    return (
        <div id="importArena">
            <div className="themeArena">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 text-center mt-2 text-uppercase fw-semibold">
                            <div className="fs-5" style={{ fontFamily: 'cursive' }}><span className="text-success">Import</span> Arena
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="btSubmitArena">
                <div className="container">
                    <div className="row">
                        <div className="col-2 col-sm-2 col-md-2 col-lg-2">
                            <button type="button" className="btn btn-success my-3" id="btSubmitInformation">SUBMIT</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row mx-1">
                    <div className="col-12 col-sm-12 col-lg-4 col-md-4 p-0">
                        <form className="border p-3 rounded-3 border-success mb-2">
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1" className="fw-semibold">Mã báo cáo</label>
                                <input type="text" className="form-control mt-2" id="reportCode" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCheckText(e.currentTarget.value)} />
                                <label htmlFor="exampleInputPassword1" className="fw-semibold text-danger mt-2 d-block" id="checkingExist"></label>
                            </div>
                            <div className="form-group mt-2">
                                <label htmlFor="exampleInputEmail1" className="fw-semibold">Tên nhà vườn</label>
                                <input type="text" className="form-control mt-2" id="farmName" aria-describedby="emailHelp" />
                            </div>
                            <div className="form-group mt-2">
                                <label htmlFor="exampleInputPassword1" className="fw-semibold">Mã nhập hàng</label>
                                <input type="text" className="form-control mt-2" id="importCode" />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row mx-1 mt-2">
                    <div className="col-12 col-sm-12 col-lg-12 col-md-12">
                        <div className="row" id="formContent">
                            <form id="formItem1" className="border p-3 rounded-3 border-primary mb-2">
                                <div className="row">
                                    <div className="col-12 col-sm-12 col-md-2 col-lg-2">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1" className="fw-semibold">Tên loại quả</label>
                                            <input type="text" className="form-control mt-2" id="fruitName1"
                                                aria-describedby="emailHelp" />
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-2 col-lg-2">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword1" className="fw-semibold">Số lượng thùng</label>
                                            <input type="text" className="form-control mt-2" id="amountBoxFruit1" />
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-2 col-lg-2">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword1" className="fw-semibold">Trọng lượng mỗi
                                                thùng</label>
                                            <input type="text" className="form-control mt-2" id="weightFruit1" />
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-2 col-lg-2">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword1" className="fw-semibold">Trọng lượng hàng
                                                tốt</label>
                                            <input type="text" className="form-control mt-2" id="perfectweightFruit1" />
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-2 col-lg-2 coverbtn d-flex flex-column justify-content-end">
                                        <button className="btn btDelete mt-3 btn-danger" id="btDeleteForm1" type="button" onClick={handleClickDelete}>Delete Form</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <button type="button" className="btn btn-primary my-3" id="btAddNewForm" onClick={fnAddForm}>Add New Form</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
