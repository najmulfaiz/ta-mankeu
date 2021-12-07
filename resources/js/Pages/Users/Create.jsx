import { Inertia } from '@inertiajs/inertia'
import { Link } from '@inertiajs/inertia-react'
import React, { useState } from 'react'
import App from '../../Layouts/App'

export default function Create({ errors }) {
    const [values, setValues] = useState({
        name: '', email: '', password: '', password_confirmation: ''
    })

    const changeHandler = (e) => {
        setValues({ ...values, [e.target.id]: e.target.value })
    }

    const submitHandler = (e) => {
        e.preventDefault();

        Inertia.post(route('users.store'), values);
    }

    return (
        <>
            <div className="row">
                <div className="col-sm-6 col-xs-12">
                    <div className="card">
                        <form className="form-horizontal" onSubmit={submitHandler}>
                            <div className="card-body">
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" name="name" id="name" className="form-control" placeholder="Enter Name" value={values.name} onChange={changeHandler} />
                                    {errors.name && (<div className="text-danger mt-1">{errors.name}</div>)}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">E-Mail</label>
                                    <input type="email" name="email" id="email" className="form-control" placeholder="Enter E-Mail" value={values.email} onChange={changeHandler} />
                                    {errors.email && (<div className="text-danger mt-1">{errors.email}</div>)}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" name="password" id="password" className="form-control" placeholder="Enter Password" value={values.password} onChange={changeHandler} />
                                    {errors.password && (<div className="text-danger mt-1">{errors.password}</div>)}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password Confirmation</label>
                                    <input type="password" name="password_confirmation" id="password_confirmation" className="form-control" placeholder="Enter Password Confirmation" value={values.password_confirmation} onChange={changeHandler} />
                                    {errors.password_confirmation && (<div className="text-danger mt-1">{errors.password_confirmation}</div>)}
                                </div>
                            </div>
                            <div className="card-footer d-flex justify-content-between">
                                <Link href={route('users.index')} className="btn btn-secondary waves-effect waves-light btn-sm">Back</Link>
                                <button className="btn btn-primary waves-effect waves-light btn-sm">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

Create.layout = (page) => <App children={page} title="Add User" />
