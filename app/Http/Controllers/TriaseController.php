<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class TriaseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return inertia('Users/Index', [
            'users' => User::paginate(10)
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'tanggal' => 'required',
            'jam' => 'required',
            'petugas' => 'required',
            'keluhan_utama' => 'required',
            'keputusan' => 'required',
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return inertia('Triase/Show', [
            'idxdaftar' => $id,
            'petugas' => [
                ['value' => 1, 'label' => 'dr. Ahmad'],
                ['value' => 2, 'label' => 'dr. Bisri'],
                ['value' => 3, 'label' => 'dr. Choirul'],
            ]
        ]);
    }
}
