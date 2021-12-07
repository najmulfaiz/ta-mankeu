import React, { useState } from 'react'
import App from '../../Layouts/App'

export default function NilaiSekarangAnnuity() {
    const [values, setValues] = useState({
        a: null,
        i: null,
        n: null,
        fv: null,
    });

    const inputHandler = (e) => {
        setValues({ ...values, [e.target.id]: e.target.value })
    }

    const submitHandler = (e) => {
        e.preventDefault();

        const i = (parseFloat(values.i) / 100)
        const pv = (parseFloat(values.a) / i) * (1 - (1 / ((1 + i) ** parseFloat(values.n))))
        setValues({ ...values, pv: pv })
    }

    return (
        <>
            <div className="card">
                <div className="card-body">
                    <form onSubmit={submitHandler}>
                        <div className="row mb-4">
                            <label htmlFor="a" className="col-sm-3 col-form-label">Nilai Masa Depan (A)</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control" id="a" placeholder="0" onChange={inputHandler} />
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
                            <label htmlFor="fv" className="col-sm-3 col-form-label">Nilai Anuitas (FV(A))</label>
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

NilaiSekarangAnnuity.layout = (page) => <App children={page} title="Nilai Sekarang Annuity" />