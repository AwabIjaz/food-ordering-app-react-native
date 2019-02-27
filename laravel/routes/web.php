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

Route::get('/', function () {
    return view('login');
});//for manager login

Route::get('/logged/{id}','pagescontroller@getData');



Route::post('/logged','PagesController@loginprocessor' );
Route::get('/rejected/{id}','PagesController@rejected' );
Route::get('/accepted/{id}','PagesController@accepted' );




Route::get('/black', function () {
 echo "<h1> Done </h1>";
});

Route::get('/black2','PagesController@jojo');

Route::get('/black3','PagesController@mojo');



Route::get('/jogi/{name}/{id}','postscontroller@jhon');
Route::get('/jogi','postscontroller@rhon');
Route::resource('posts','postscontroller');
Route::get('/addrest','pagescontroller@restcontrol');//for adding restaurants


/*Route::post('/forms',function(Request $req)
{

echo $_POST['name'];

 
});*/
Route::post('/forms','pagescontroller@addrest');

Route::get('/akbar',function()
{



    $users=DB::table('users')->where('email','akbar@gmail.com')->where('password','akbar123')->first();
    $collection = collect($users);
    $users=$collection->toArray();
    echo $users['email'];
});
Route::get('my-notification/{type}', 'PagesController@myNotification');
Route::get('/getrest',function()
{



    $users=DB::table('restaurants')->get();
    echo json_encode($users);
    $collection = collect($users);
    $users=$collection->toArray();
    
});

Route::get('/check',function(){
dd(DB::table('the_table')->get());


});
