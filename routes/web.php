<?php

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

Route::group(['prefix' => 'app'], function () {
    Route::get('/', function() {
      return view('calculator.calculator');
    })->name('home');

    Route::any('/{any}', function($any) {
      return view('calculator.calculator');
    })->where('any', '.*');
});

Route::redirect('/', '/app', 301);

Auth::routes();