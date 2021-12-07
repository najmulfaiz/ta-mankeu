import { Link, usePage } from '@inertiajs/inertia-react'
import React from 'react'

export default function Sidebar() {
    const { auth } = usePage().props;

    return (
        <div className="vertical-menu">
            <div data-simplebar className="h-100">
                {/*- Sidemenu */}
                <div id="sidebar-menu">
                    {/* Left Menu Start */}
                    <ul className="metismenu list-unstyled" id="side-menu">
                        <li className="menu-title" key="t-menu">Menu</li>
                        <li>
                            <Link href="/" className="waves-effect">
                                <i className="bx bx-home" />
                                <span key="t-dashboard">Home</span>
                            </Link>
                        </li>

                        <li>
                            <a href="#" className="has-arrow waves-effect">
                                <i className="bx bx-aperture"></i>
                                <span key="t-tvom">Time Value Of Money</span>
                            </a>
                            <ul className="sub-menu" aria-expanded="false">
                                <li>
                                    <Link href={route('tvom.bunga_tetap')}>
                                        Bunga Tetap
                                    </Link>
                                </li>
                                <li>
                                    <Link href={route('tvom.nilai_majemuk')}>
                                        Nilai Majemuk
                                    </Link>
                                </li>
                                <li>
                                    <Link href={route('tvom.nilai_sekarang')}>
                                        Nilai Sekarang
                                    </Link>
                                </li>
                                <li>
                                    <Link href={route('tvom.nilai_majemuk_annuity')}>
                                        Nilai Majemuk dari Annuity
                                    </Link>
                                </li>
                                <li>
                                    <Link href={route('tvom.nilai_sekarang_annuity')}>
                                        Nilai Sekarang dari Annuity
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                {/* Sidebar */}
            </div>
        </div>
    )
}
