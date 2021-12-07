import { Link, usePage } from '@inertiajs/inertia-react';
import React from 'react'

export default function Header() {
    const { auth } = usePage().props;

    return (
        <header id="page-topbar">
            <div className="navbar-header">
                <div className="d-flex">
                    {/* LOGO */}
                    <div className="navbar-brand-box">
                        <Link href="/" className="logo logo-dark">
                            <span className="logo-sm text-white h4">
                                MANKEU
                            </span>
                            <span className="logo-lg text-white h4">
                                MANKEU
                            </span>
                        </Link>
                        <Link href="/" className="logo logo-light">
                            <span className="logo-sm text-white h4">
                                MANKEU
                            </span>
                            <span className="logo-lg text-white h4">
                                MANKEU
                            </span>
                        </Link>
                    </div>
                    <button type="button" className="btn btn-sm px-3 font-size-16 header-item waves-effect" id="vertical-menu-btn">
                        <i className="fa fa-fw fa-bars" />
                    </button>
                </div>
                <div className="d-flex">
                    <div className="dropdown d-inline-block">
                        <button type="button" className="btn header-item waves-effect" id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img className="rounded-circle header-profile-user" src="/assets/images/users/avatar-1.jpg" alt="Header Avatar" />
                            <span className="d-none d-xl-inline-block ms-1" key="t-henry">{auth.user.name}</span>
                            <i className="mdi mdi-chevron-down d-none d-xl-inline-block" />
                        </button>
                        <div className="dropdown-menu dropdown-menu-end">
                            {/* item*/}
                            <a className="dropdown-item" href="#"><i className="bx bx-user font-size-16 align-middle me-1" /> <span key="t-profile">Profile</span></a>
                            <div className="dropdown-divider" />
                            <Link as="button" method="post" className="dropdown-item text-danger" href={route('logout')}>
                                <i className="bx bx-power-off font-size-16 align-middle me-1 text-danger" /> <span key="t-logout">Logout</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
