import React from 'react'
import { fnAddForm } from '../function'
import { handleClickDelete } from '../function'


interface DataContain {
    id: number,
    reportName: string,
    nameFarm: string,
    importCode: string,
    property: {
        id: number,
        nameFruit: string,
        amount: number,
        weightOfBox: number,
        perfectWeightBox: number
    }[]
}

export default function Properties(props: DataContain) {
    return (
        <div key={props.id}>
            <div className="row">
                <div className="col-12 col-sm-12 col-lg-5 col-md-5 p-0" id="EditArena">
                    <form className="border p-3 rounded-3 border-success my-1" id="formEditArena">
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1" className="fw-semibold">Mã báo cáo</label>
                            <input type="text" className="form-control mt-2" id="reportCode" defaultValue={props.reportName}/>
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="exampleInputEmail1" className="fw-semibold">Tên nhà vườn</label>
                            <input type="text" className="form-control mt-2" id="farmName" aria-describedby="emailHelp" defaultValue={props.nameFarm}/>
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="exampleInputPassword1" className="fw-semibold">Mã nhập hàng</label>
                            <input type="text" className="form-control mt-2" id="importCode" defaultValue={props.importCode}/>
                        </div>
                    </form>
                </div>
            </div>

            <div className="row mt-2">
                <div className="col-12 col-sm-12 col-lg-12 col-md-12">
                    <div className="row" id="formContent" key={JSON.stringify(props.property)}>
                        {props.property.map((props) => {
                            return (
                                <form id={`formItem${props.id}`} className="border p-3 rounded-3 border-primary mb-2" key={props.id}>
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-3 col-lg-2">
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1" className="fw-semibold">Tên loại quả</label>
                                                <input type="text" className="form-control mt-2" id={`fruitName${props.id}`}
                                                    aria-describedby="emailHelp" defaultValue={props.nameFruit} />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-3 col-lg-2">
                                            <div className="form-group">
                                                <label htmlFor="exampleInputPassword1" className="fw-semibold">Số lượng thùng</label>
                                                <input type="text" className="form-control mt-2" id={`amountBoxFruit${props.id}`} defaultValue={props.amount} />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-3 col-lg-2">
                                            <div className="form-group">
                                                <label htmlFor="exampleInputPassword1" className="fw-semibold">Trọng lượng mỗi
                                                    thùng</label>
                                                <input type="text" className="form-control mt-2" id={`weightFruit${props.id}`} defaultValue={props.weightOfBox} />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-3 col-lg-2">
                                            <div className="form-group">
                                                <label htmlFor="exampleInputPassword1" className="fw-semibold">Trọng lượng hàng
                                                    tốt</label>
                                                <input type="text" className="form-control mt-2" id={`perfectweightFruit${props.id}`} defaultValue={props.perfectWeightBox} />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-2 col-md-3 col-lg-2 coverbtn d-flex flex-column justify-content-end">
                                            <button className="btn btDelete mt-3 btn-danger" id={`btDeleteForm${props.id}`} type="button" onClick={handleClickDelete}>Delete Form</button>
                                        </div>
                                    </div>
                                </form>
                            )
                        })}
                    </div>
                </div>
            </div>

            <div>
                <button type="button" className="btn btn-primary my-3" id="btAddNewForm" onClick={fnAddForm}>Add New Form</button>
            </div>
        </div>
    )
}

