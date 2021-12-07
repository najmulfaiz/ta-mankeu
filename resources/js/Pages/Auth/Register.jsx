import { Inertia } from '@inertiajs/inertia'
import { Link } from '@inertiajs/inertia-react'
import React, { useState } from 'react'

export default function Login({ errors }) {
    const [values, setValues] = useState({
        email: '', password: '', remember: ''
    })

    const changeHandler = (e) => {
        setValues({...values, [e.target.id]: e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(values);
        
        // Inertia.post(route('login'), values);
    }
    
    return (
        <div className="account-pages my-5 pt-sm-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6 col-xl-5">
                        <div className="card overflow-hidden">
                            <div className="card-body">
                                <div className="p-2">
                                    <h4>Register</h4>
                                    <form className="form-horizontal" onSubmit={submitHandler}>
                                        <div className="mb-3">
                                            <label htmlFor="email" className="form-label">E-Mail</label>
                                            <input type="email" name="email" id="email" className="form-control" placeholder="Enter E-Mail" value={values.email} onChange={changeHandler} />
                                            { errors.email && (<div className="text-danger mt-1">{errors.email}</div>) }
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Password</label>
                                            <div className="input-group auth-pass-inputgroup">
                                                <input type="password" name="password" id="password" className="form-control" placeholder="Enter Password" aria-label="Password" aria-describedby="password-addon" value={values.password} onChange={changeHandler} />
                                                <button className="btn btn-light" type="button" id="password-addon"><i className="mdi mdi-eye-outline" /></button>
                                            </div>
                                            { errors.password && (<div className="text-danger mt-1">{errors.password}</div>) }
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="remember" name="remember" value={values.checkbox} onChange={(e) => setValues({...values, 'remember': e.target.checked}) } />
                                            <label className="form-check-label" htmlFor="remember-check">
                                                Remember me
                                            </label>
                                        </div>
                                        <div className="mt-3 d-grid">
                                            <button className="btn btn-primary waves-effect waves-light" type="submit">Log In</button>
                                        </div>
                                        <div className="mt-4 text-center">
                                            <Link href={route('login')} className="text-muted"><i className="mdi mdi-lock me-1" /> Forgot your password?</Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5 text-center">
                            <div>
                                <p>Don't have an account ? <a href="auth-register.html" className="fw-medium text-primary"> Signup now </a> </p>
                                <p>©  Skote. Crafted with <i className="mdi mdi-heart text-danger" /> by Themesbrand</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}