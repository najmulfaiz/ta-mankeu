import { Link } from '@inertiajs/inertia-react'
import React from 'react'
import Pagination from '../../Components/Pagination';
import App from '../../Layouts/App'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Inertia } from '@inertiajs/inertia';

const MySwal = withReactContent(Swal)

export default function Index(props) {
    const { data: users, from, links } = props.users;

    const deleteHandler = (user_id) => {
        MySwal.fire({
            title: 'Apakah anda yakin?',
            text: "Data yang telah dihapus tidak dapat dikembalikan!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#34c38f",
            cancelButtonColor: "#f46a6a",
            confirmButtonText: 'Ya, hapus data!',
            cancelButtonText: 'Batal'
        }).then((result) => {
            if (result.value) {
                Inertia.delete(route('users.destroy', user_id));
            }
        })
    }

    return (
        <>
            <div className="card">
                <div className="card-header bg-light">
                    <Link href={route('users.create')} className="btn btn-primary waves-effect btn-label waves-light btn-sm"><i className="bx bx-plus label-icon" /> Tambah</Link>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-striped table-bordered mb-0">
                            <thead>
                                <tr>
                                    <th scope="col" className="fit-column text-center">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">E-Mail</th>
                                    <th scope="col" className="fit-column text-center">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, index) => (
                                    <tr key={index}>
                                        <th scope="row" className="fit-column text-center">{from + index}</th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td className="fit-column text-center">
                                            <div className="d-flex gap-1">
                                                <Link href={route('users.edit', user.id)} className="btn btn-warning waves-effect waves-light btn-sm"><i className="bx bx-edit" /></Link>
                                                {/* <Link as="button" method="post" className="btn btn-danger waves-effect waves-light btn-sm" href={route('users.destroy', user.id)}>
                                                    <i className="bx bx-trash" />
                                                </Link> */}
                                                <button className="btn btn-danger waves-effect waves-light btn-sm" onClick={() => deleteHandler(user.id)}>
                                                    <i className="bx bx-trash" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <Pagination links={links} />
                </div>
            </div>
        </>
    )
}

Index.layout = (page) => <App children={page} title="Users" />
