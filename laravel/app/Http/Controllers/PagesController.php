<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
    // 
use DB;
use Response;
use Session;
class PagesController extends Controller
{


   public function restcontrol()
   {

    return view('admin.uploadrest');
   }

   public function loginprocessor(Request $req)
{


    $email=$_POST['email'];
    $pass=$_POST['pass'];
    $manager=DB::table('restaurants')->where('email',$email)->where('password',$pass)->first();
    
    $collect = collect($manager);
    $manager=$collect->toArray();
    if($manager!=null){
        $name=$manager['name'];
        $id=$manager['id'];
        $req->session()->put('manager_id',$id);
        $req->session()->put('name',$name);
    
    return view('managers.manager_dashbord');


    }
else {
    $req->session()->flash('error', 'error');  
    alert()->error('Sweet Alert with error.');
    return view('login');
    //return Redirect()->back();//error

}

}


   public function addrest(Request $req)
   {

    //$loc='C:\\wamp64\\www\\firstproject\\resources\\';
    //$loc='C:\\Users\\AWAB\\Desktop\\React Native\\dine\\images\\'.$_FILES['image']['name'];
    
    
    DB::table('restaurants')->insert(
        ['name' => $_POST['aj'],'email'=>$_POST['email'],'password'=>$_POST['password'],'image' =>$_POST['image'],'location' =>$_POST['location']]);
//$data=['naam'=>$loc];
//return Response::json($data);

    }
    public function myNotification($type)
    {
        switch ($type) {
            case 'message':
                alert()->message('Sweet Alert with message.');
                break;
            case 'basic':
                alert()->basic('Sweet Alert with basic.','Basic');
                break;
            case 'info':
                alert()->info('Sweet Alert with info.');
                break;
            case 'success':
                alert()->success('Sweet Alert with success.','Welcome to ItSolutionStuff.com')->autoclose(3500);
                break;
            case 'error':
                alert()->error('Sweet Alert with error.');
                break;
            case 'warning':
                alert()->warning('Sweet Alert with warning.');
                break;
            default:
                # code...
                break;
        }

        return view('notification');
    }

    public function getData($id)
    {

        $request=DB::table('the_table')->where('r_id',$id)->where('status','Pending')->get();
       return response($request);


    }


    public function accepted($id,Request $req){
        DB::table('the_table')
        ->where('id', $id)
        ->update(['status' => 'Accepted']);
  
        
        $veg="s".$id."s";
  session()->put($veg,'Accepted');
  


    }
    public function rejected($id,Request $req){

        DB::table('the_table')
        ->where('id', $id)
        ->update(['status' => 'Rejected']);
        

        $veg="s".$id."s";
  session()->put($veg,'Rejected');
    

    }




}
