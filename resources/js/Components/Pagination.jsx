import { Link } from '@inertiajs/inertia-react'
import React from 'react'

export default function Pagination({ links }) {
    return (
        <nav className="mt-3">
            <ul className="pagination">
                {links.map((link, k) => (
                    <li key={k} className={`page-item ${link.active && 'active'} ${link.url === null && 'disabled'}`}>
                        <Link disabled={link.url === null ? true : false } className="page-link" href={link.url} dangerouslySetInnerHTML={{ __html: link.label }} />
                    </li>
                ))}
            </ul>
        </nav>
    )
}
