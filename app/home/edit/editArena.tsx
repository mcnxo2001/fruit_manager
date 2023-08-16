'use client'

import React, { useState } from 'react'
import { useEffect } from 'react'
import DataJson from '../../data/data.json'
import Properties from './properties'
import { KeyboardEvent } from 'react';
import Suggetion from './suggetion'

export default function EditArena() {

    useEffect(() => {
        typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null
    }, [])

    const [inputTextContent, setinputTextContent] = useState('')
    const [selectSuggetion, setselectSuggetion] = useState(0)
    const [arraySucggettion, setArraySuccggettion] = useState<{ id: number, reportName: string }[]>([])
    const [indexSelected, setIndexSelected] = useState(0)

    // onchange effect input report code
    useEffect(() => {
        setArraySuccggettion([])
        DataJson.map((props) => {
            if (props.reportName.substring(0, inputTextContent.length).toLowerCase() === inputTextContent.toLowerCase() && inputTextContent.length !== 0) {
                setArraySuccggettion(preData => [...preData, {
                    id: props.id,
                    reportName: props.reportName
                }])
            }
        })
    }, [inputTextContent, selectSuggetion])

    useEffect(() => {
        if (inputTextContent === '') {
            setIndexSelected(-1)
        }
    }, [inputTextContent])

    // onchange key board event function of input reportcode
    const fnKeyDownRetrive = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            event.preventDefault()
            setselectSuggetion(arraySucggettion[indexSelected].id)
        }
        else if (event.key === 'ArrowDown') {
            event.preventDefault()
            if (indexSelected + 1 < arraySucggettion.length) {
                setIndexSelected(a => a + 1)
            }

        }
        else if (event.key === 'ArrowUp') {
            event.preventDefault()
            if (indexSelected !== -1) {
                setIndexSelected(a => a - 1)
            }
        }
    }

    return (
        <div id="editArena">
            <div className="themeArena">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 text-center mt-2 text-uppercase fw-semibold">
                            <div className="fs-5" style={{ fontFamily: 'cursive' }}><span className="text-success">Edit</span> Arena
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="btArena">
                <div className="container">
                    <div className="row">
                        <div className="col-2 col-sm-2 col-md-2 col-lg-2 d-flex flex-row">
                            <button type="button" className="btn btn-success my-3 me-2"
                                id="btSubmitEditInformation">SUBMIT</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-lg-4 col-md-4 p-0">
                        <form className="border p-3 rounded-3 border-success mb-2">
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1" className="fw-semibold">Mã báo cáo</label>
                                <div className='d-flex flex-row justify-content-start mt-2'>
                                    <div className='autocomplete-inline'>
                                        <input type="text" className="form-control me-2" id="reportCode" autoComplete='off' onKeyDown={fnKeyDownRetrive} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setinputTextContent(e.currentTarget.value)} />
                                        <div id='containSuggestion'>
                                            <Suggetion index={indexSelected} setselectSuggetion={setselectSuggetion} property={arraySucggettion} />
                                        </div>
                                    </div>
                                </div>
                                <label htmlFor="exampleInputPassword1" className="fw-semibold text-danger d-block" id="checkingExist"></label>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-12 col-lg-12 col-md-12">
                        <div className="row" id="formContentEdit">
                            {
                                selectSuggetion !== 0 ? <Properties
                                    id={DataJson[selectSuggetion - 1].id}
                                    reportName={DataJson[selectSuggetion - 1].reportName}
                                    nameFarm={DataJson[selectSuggetion - 1].nameFarm}
                                    importCode={DataJson[selectSuggetion - 1].importCode}
                                    property={DataJson[selectSuggetion - 1].property}
                                /> : null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
