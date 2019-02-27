<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use DB;
use Response;
class dust extends Controller
{


  public function func(Request $req)
    {
      $input=$req->all();
     $users=DB::table('users')->where('email',$input['email'])->where('password',$input['password'])->first();
      $collection = collect($users);
      $users=$collection->toArray();
   if($users!=null){
      $data=[
    'email'=>$users['email'],
    'name'=>$users['name'],
    'response'=>'success'
    
    
    ];}
    else{
$data=[
  'response'=>'fail'
];

}

    return response()->json($data);
  
  }



  public function func3(Request $req)
    {
     // $email = $req->input('email');
      //$pass= $req->input('password');;
      $json_str=file_get_contents('php://input');
      $obj=json_decode($json_str,true);
      $users=DB::table('users')->where('email',$obj['email'])->where('password',$obj['password'])->first();
      $collection = collect($users);
      $users=$collection->toArray();
   if($users!=null){
      $data=[
    'email'=>$users['email'],
    'name'=>$users['name'],
    'response'=>'success'
    
    
    ];}
    else{
$data=[
  'response'=>'fail'
];

}

  //  return response()->json($data);
  return response()->json($data);
  }




        //



        public function func2(Request $req)
        {
          $json_str=file_get_contents('php://input');
          $obj=json_decode($json_str,true);
         
          $users=DB::table('users')->where('email',$obj['email'])->where('password',$obj['password'])->first();
          $collection = collect($users);
          $users=$collection->toArray();
       if($users!=null){
          $data=[
        'email'=>$users['email'],
        'name'=>$users['name'],
        'response'=>'success'
        
        
        ];}
        else{
    $data=[
      'response'=>'fail'
    ];
    
    }   
        return Response::json($data);
        




      }

      public function jojo(Request $request)
      {
   
       echo $request['deff'];
      }
   /*
public function order(Request $req){

  $user_id=$req->session()->get('user_id');
  $rest_id=$req->session()->get('user_rest');
  
  $json_str=file_get_contents('php://input');
  $obj=json_decode($json_str,true);
  $i_ids=$obj['id'];
  $i=0;
  $array;
  
  foreach($i_ids as $ids)
  {
    $array[$i]['id']=$ids;
$i++;


  }



  return Response::json($array);

}
*/
   
      public function mojo()
      {
   
       return view('pages.about');
      }
   
   
   
    }