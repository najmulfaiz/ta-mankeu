import React, { useState } from 'react'
import App from '../../Layouts/App'

export default function NilaiSekarang() {
    const [values, setValues] = useState({
        pv: null,
        i: null,
        n: null,
        fv: "",
    });

    const inputHandler = (e) => {
        setValues({ ...values, [e.target.id]: e.target.value })
    }

    const submitHandler = (e) => {
        e.preventDefault();

        const pv = (parseFloat(values.fv) / (( 1 + (parseFloat(values.i) / 100)) ** parseFloat(values.n))).toFixed(0)
        setValues({ ...values, pv: pv })
    }

    return (
        <>
            <div className="card">
                <div className="card-body">
                    <form onSubmit={submitHandler}>
                        <div className="row mb-4">
                            <label htmlFor="fv" className="col-sm-3 col-form-label">Nilai Masa Depan (FV)</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control" id="fv" placeholder="0" onChange={inputHandler} />
                            </div>
                        </div>
                        <div className="row mb-4">
                            <label htmlFor="i" className="col-sm-3 col-form-label">Suku Bunga (i) / tahun</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control" id="i" placeholder="0" onChange={inputHandler} />
                            </div>
                        </div>
                        <div className="row mb-4">
                            <label htmlFor="n" className="col-sm-3 col-form-label">Jumlah Periode (n)</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control" id="n" placeholder="0" onChange={inputHandler} />
                            </div>
                        </div>
                        <div className="row mb-4">
                            <label htmlFor="fv" className="col-sm-3 col-form-label">Nilai Sekarang (PV)</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control" id="fv" placeholder="0" value={values.pv} readOnly />
                            </div>
                        </div>

                        <div className="row justify-content-end">
                            <div className="col-sm-9">
                                <div>
                                    <button type="submit" className="btn btn-primary w-md">Hitung</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

NilaiSekarang.layout = (page) => <App children={page} title="Nilai Sekarang" />