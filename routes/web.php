<?php

use App\Http\Controllers\AsesmenMedisGDController;
use App\Http\Controllers\AsesmenPerawatGDController;
use App\Http\Controllers\ListPasienController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\TimeValueOfMoneyController;
use App\Http\Controllers\TriaseController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::middleware('auth')->group(function() {
    Route::post('logout', [LoginController::class, 'destroy'])->name('logout');

    Route::get('/', function () {
        return Inertia::render('Home');
    });

    Route::resource('users', UserController::class)->middleware('can:read users');
    Route::get('time_value_of_money', [TimeValueOfMoneyController::class, 'index'])->name('time_value_of_money.index');
    
    Route::get('tvom_bunga_tetap', [TimeValueOfMoneyController::class, 'bungaTetap'])->name('tvom.bunga_tetap');
    Route::get('tvom_nilai_majemuk', [TimeValueOfMoneyController::class, 'nilaiMajemuk'])->name('tvom.nilai_majemuk');
    Route::get('tvom_nilai_sekarang', [TimeValueOfMoneyController::class, 'nilaiSekarang'])->name('tvom.nilai_sekarang');
    Route::get('tvom_nilai_majemuk_annuity', [TimeValueOfMoneyController::class, 'nilaiMajemukAnnuity'])->name('tvom.nilai_majemuk_annuity');
    Route::get('tvom_nilai_sekarang_annuity', [TimeValueOfMoneyController::class, 'nilaiSekarangAnnuity'])->name('tvom.nilai_sekarang_annuity');
});

Route::middleware('guest')->group(function() {
    Route::get('login', [LoginController::class, 'create'])->name('login');
    Route::post('login', [LoginController::class, 'store']);

    Route::get('register', function () {
        return Inertia::render('Auth/Register');
    })->name('register');
});
