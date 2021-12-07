import React from 'react'
import { Head, usePage } from '@inertiajs/inertia-react'
import toast, { Toaster } from 'react-hot-toast'

export default function Guest({ children, title }) {
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
        <>
            <Head title={`${title} | Aplikasi Manajemen Keuangan`} />
            <div className="account-pages my-5 pt-sm-5">
                <div className="container">
                    <Toaster />
                    {children}
                </div>
            </div>
        </>
    )
}
