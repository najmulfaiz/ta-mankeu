import React from 'react'
import App from '../Layouts/App'

export default function Home() {
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h4>Anggota Kelompok</h4>
                    <ul>
                        <li>201953006 - WIE BAGUS WILLYANDO I.</li>
                        <li>201953032 - MUHAMMAD NAJMUL FAIZ</li>
                        <li>201953104 - MARLINA OKTAVIANI</li>
                        <li>201953107 - RAGIL CANDRA WARDHANI</li>
                        <li>201953118 - SURYADI ALFIANRENDRA D.A</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

Home.layout = (page) => <App children={page} title="Home" />