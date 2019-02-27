<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('login','apicontroller@login');
Route::post('signup','apicontroller@signup');
Route::get('restaurants','apicontroller@rests');

Route::post('list','apicontroller@lists');

Route::post('theorder','apicontroller@order');
Route::post('order_return','apicontroller@returnOrder');
Route::get('order_response','apicontroller@orderResponse');


