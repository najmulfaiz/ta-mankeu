import React from 'react'
import { Head, usePage } from '@inertiajs/inertia-react'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'
import toast, { Toaster } from 'react-hot-toast'

export default function App({ children, title }) {
    const { flash } = usePage().props;

    flash.type && toast[flash.type](flash.message, {
        icon: '👏',
        style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
        },
    });

    return (
        <div>
            <Head title={`${title} | Najmul Faiz`} />
            <div id="layout-wrapper">
                <Header/>
                <Sidebar/>

                {/* ============================================================== */}
                {/* Start right Content here */}
                {/* ============================================================== */}
                <div className="main-content">
                    <div className="page-content">
                        <div className="container-fluid">
                            <Toaster/>

                            {/* start page title */}
                            <div className="row">
                                <div className="col-12">
                                    <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                                        <h4 className="mb-sm-0 font-size-18">{title}</h4>
                                    </div>
                                </div>
                            </div>
                            {/* end page title */}

                            {children}
                        </div> {/* container-fluid */}
                    </div>
                    {/* End Page-content */}
                    <footer className="footer">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-sm-6">
                                    {/* © Sistem Informasi Manajemen Rumah Sakit. */}
                                </div>
                                <div className="col-sm-6">
                                    <div className="text-sm-end d-none d-sm-block">
                                        {/* Develop by Tim IT UPT RSUD RAA Soewondo Pati */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
                {/* end main content*/}
            </div>
        </div>

    )
}
