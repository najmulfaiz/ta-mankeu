<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class TimeValueOfMoneyController extends Controller
{
    public function index()
    {
        return Inertia::render('TimeValueOfMoney/Index');
    }

    public function bungaTetap()
    {
        return Inertia::render('TimeValueOfMoney/BungaTetap');
    }

    public function nilaiMajemuk()
    {
        return Inertia::render('TimeValueOfMoney/NilaiMajemuk');
    }

    public function nilaiSekarang()
    {
        return Inertia::render('TimeValueOfMoney/NilaiSekarang');
    }

    public function nilaiMajemukAnnuity()
    {
        return Inertia::render('TimeValueOfMoney/NilaiMajemukAnnuity');
    }

    public function nilaiSekarangAnnuity()
    {
        return Inertia::render('TimeValueOfMoney/NilaiSekarangAnnuity');
    }
}
