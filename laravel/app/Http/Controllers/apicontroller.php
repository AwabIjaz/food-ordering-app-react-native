<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\PagesController;
use routes\web;
use Redirect;
use DB;
use Response;
use sessions;
class apicontroller extends Controller
{




        public function login(Request $req)
        {
          $json_str=file_get_contents('php://input');
          $obj=json_decode($json_str,true);
         
          $users=DB::table('users')->where('email',$obj['email'])->where('password',$obj['password'])->first();
          $collection = collect($users);
          $users=$collection->toArray();
          if($users!=null){
            //Session()->put('user_id', $users['name']);
            //session(['user_id' => $users['user_id']]);
            $req->session()->put('user_id', $users['user_id']);
            $data=[
            'name'=>$users['name'],
            'res'=>'success'
            ];
           }
          else{
            $data=[
            'res'=>'Wrong email or password'
            ];
          }   
        return Response::json($data);


      }


      public function signup(Request $req)
        {
          $json_str=file_get_contents('php://input');
          $obj=json_decode($json_str,true);
         
          
          DB::table('users')->insert(
            ['user_id' => 6, 'name' => $obj['name'],'email' => $obj['email'], 'password' => $obj['password']]
          );
         
        return Response::json("okay");


      }



      public function rests(){


        $users=DB::table('restaurants')->select('id','name','image','location')->get();
        return Response::json($users);

      }

      public function lists(Request $req){
        $json_str=file_get_contents('php://input');
        $obj=json_decode($json_str,true);
       $id=$obj['id'];

       $req->session()->put('user_rest', $id);
        
       //$name=$obj['name'];
       $items=DB::table('items')->select('item_id','product_name','price','category')->where('r_id',$id)->get();
       //$items=DB::table('items')->select('item_id','product_name')->where('r_id',$name)->get();
       
       return Response::json($items);

      }
  /*$data=[
          'id'=>$user_id,
          'rest_id'=>$rest_id,

        ];  
        return Response::json($data);*/
        //$value = ->session()->get('key', 'default');





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
    $array[$i]['quantity']=$obj['quantity'][$ids];
    //$i]['quantity']=$obj['quantity'][$array[$i]['id']];
    
    
    $i++;


  }
  $i=0;
  $total=0;
  $each_total=0;
  foreach($array as $ods){
  $id=$ods['id'];
  
  $item=DB::table('items')->select('item_id','price','product_name')->where('item_id',$id)->first();
  $collect = collect($item);
  $item=$collect->toArray();
  $array[$i]['product_name']=$item['product_name'];
  $array[$i]['price']=$item['price'];
  $each_total=$item['price']*$ods['quantity'];
  $total=$each_total+$total;
  $i++;


  
}


$req->session()->put('total', $total);
        
$req->session()->put('order', $array);

return Response::json($array);

}



public function returnOrder(Request $req){


  $user_id=$req->session()->get('user_id');
  $rest_id=$req->session()->get('user_rest');
  $json_str=file_get_contents('php://input');
  $obj=json_decode($json_str,true);
  //$total=$obj['total'];


  $total=$req->session()->get('total');
  $final=json_encode(session()->get('order'),true);
  DB::table('the_table')->insert(
    [ 'r_id'=>$rest_id,'u_id'=>$user_id,'orders' =>$final,'status'=>'Pending','total'=>$total]);
   
    $table=DB::table('the_table')->orderBy('id', 'desc')->first();
    $collect = collect($table);
    $table=$collect->toArray();
    $id_of=$table['id'];
  
   $req->session()->put('order_id',$id_of);
   // $req->session()->put($veg,'Pending');
  
    return Response::json($id_of);
    
  }



  public function orderResponse(Request $req){
   

   $the_id=$req->session()->get('order_id');
   $table=DB::table('the_table')->where('id', $the_id)->first();
   $collect = collect($table);
    $table=$collect->toArray();
     
   $status=$table['status'];




return response::json($status);




  }




    }