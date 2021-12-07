<?php

namespace App\Http\Controllers;

use App\Models\Pendaftaran;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class ListPasienController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return inertia('Pendaftaran/Index', [
            'pendaftarans' => Pendaftaran::paginate(10)
        ]);
    }
}
