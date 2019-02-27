<!DOCTYPE HTML>
<!--
	Introspect by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
-->

<html>
	<head>
  <style>
  #del
  {

position:absolute;
left:110px;

  }
#drop_menu
 { background-color:black;
  height: 800px;
    width: 300px;
    width: 500px;
    
    opacity: 0.7;;
    
    display:none;
  padding-left:0px;
  }
    
  #drop_menu li{
    
border-style:ridge;
border-color:grey;
border-width:0.5px;
display:block;

  }

  #drop_menu li p{
float:none;
color:white;
display:inline-block;
position:relative;
padding-left:0px;
text-align:left;
font-size: 15px;
}
#drop_menu li button{
position:absolute;

right:395px;
}
 
 #deletebut
 {
   
 }
 
  .show {display:inline-block;}
</style>


		<title>Manager Home</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
		<link rel="stylesheet" href="assets1/css/main.css" />
	
	<title>Home</title>
  <meta name="description" content="">
  <title>Home</title>
  <link rel="stylesheet" href="assets2/tether/tether.min.css">
  <link rel="stylesheet" href="assets2/bootstrap/css/bootstrap.min.css">
  <link rel="stylesheet" href="assets2/bootstrap/css/bootstrap-grid.min.css">
  <link rel="stylesheet" href="assets2/bootstrap/css/bootstrap-reboot.min.css">
  <link rel="stylesheet" href="assets2/datatables/data-tables.bootstrap4.min.css">
  <link rel="stylesheet" href="assets2/theme/css/style.css">
  <link rel="stylesheet" href="assets2/mobirise/css/mbr-additional.css" type="text/css">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

	</head>
	<body>

		<!-- Header -->
			<header id="header">
				<div class="inner">
					<a href="index.html" class="logo">Dine In Time</a>
					<nav id="nav">
        <ul class="nav navbar-nav">
            <li class="dropdown" id="drop">
            <a class="dropdown-toggle" data-toggle="dropdown" id="readData" >Order</a>
				  	  <ul  id="drop_menu">
              </ul>
            </li>
            
        </ul>
  
					</nav>
      
      	</div>
			</header>
			<a href="#menu" class="navPanelToggle"><span class="fa fa-bars"></span></a>

		<!-- Banner -->
			<section id="banner">
				<div class="inner">
					<h1>Manager's Dashboard: <span><?php echo session()->get('name'); ?>
        <br/>
				</span></h1>
					<ul class="actions">
						<li><a href="#" class="button alt">Get Started</a></li>
					</ul>
				</div>
			</section>
		
	  <section class="section-table cid-qT9xoM0Q6q" id="table1-2">

  
  
  <div class="container container-table">
      <h2 class="mbr-section-title mbr-fonts-style align-center pb-3 display-2">
          Table
      </h2>
      
      <div class="table-wrapper">
        <div class="container">
          <div class="row search">
            <div class="col-md-6"></div>
            <div class="col-md-6">
                <div class="dataTables_filter">
                  <label class="searchInfo mbr-fonts-style display-7">Search:</label>
                  <input class="form-control input-sm" disabled="">
                </div>
            </div>
          </div>
        </div>

        <div class="container scroll">
          <table class="table isSearch" cellspacing="0">
            <thead>
              <tr class="table-heads ">
                  
                  
                  
                  
              <th class="head-item mbr-fonts-style display-7">
                      NAME</th><th class="head-item mbr-fonts-style display-7">Time</th><th class="head-item mbr-fonts-style display-7">Price</th><th class="head-item mbr-fonts-style display-7">Check Order</th><th class="head-item mbr-fonts-style display-7">After Ready</th></tr>
            </thead>

            <tbody>
              <?php
              
              $manager_id=session()->get('manager_id');
              $orders=DB::table('the_table')->where('r_id',$manager_id)->where('status','Accepted')->get();
                //select('id','name','image','location');
                

              ?>
              
              
              <?php foreach($orders as $ods){ ?>
              
              
              



              <?php
              
              $collect = collect($ods);
              $mods=$collect->toArray();
              $uid=$mods['u_id'];

                $users=DB::table('users')->select('name')->where('user_id',$uid)->first();
                $collect = collect($users);
                $users=$collect->toArray();
             
                $name=$users['name'];
                ?>

               <tr> 
             <td class="body-item mbr-fonts-style display-7"><?php echo $name;?></td><td class="body-item mbr-fonts-style display-7">44</td><td class="body-item mbr-fonts-style display-7"><?php echo $mods['total'];  ?></td><td class="body-item mbr-fonts-style display-7">$317.000</td><td class="body-item mbr-fonts-style display-7"><a href="#">View Order</a></td>
              </tr>
              
              <?php } ?>
                
          </table>
        </div>
        <div class="container table-info-container">
          <div class="row info">
            <div class="col-md-6">
              <div class="dataTables_info mbr-fonts-style display-7">
                <span class="infoBefore">Showing</span>
                <span class="inactive infoRows"></span>
                <span class="infoAfter">entries</span>
                <span class="infoFilteredBefore">(filtered from</span>
                <span class="inactive infoRows"></span>
                <span class="infoFilteredAfter"> total entries)</span>
              </div>
            </div>
            <div class="col-md-6"></div>
          </div>
        </div>
      </div>
    </div>
</section>

<script type="text/javascript">
$('#readData').on('click',function(){
  $('#drop_menu').empty();
document.getElementById("drop_menu").classList.toggle("show");

var the_id = {!! json_encode($manager_id) !!}
$.get('logged/'+the_id,function(data){
$.each(data,function(i,value){
var li=$("<li/>");
li.id='lies';
var txt="";
var mat=JSON.parse(value.orders);
var x;

for(x in mat){

txt+=mat[x].product_name+"x"+mat[x].quantity+",";
}

li.append($("<button/>",{
text:"accept",
click:function(){

  var id=value.id;
  //$blink=$.get("{{URL::to('/accepted/id')}}");
$.get('accepted/'+id);

}

}))

li.append($("<button/>",{
id:"del",
text:"delete",
click:function(){

var id=value.id;
$.get('rejected/'+id);
}



}))




li.append($("<p/>",{
text:txt
}))
$('#drop_menu').append(li);
})


})
})

</script>

			
		<!-- Footer -->
			
		<!-- Scripts -->
			<script src="assets1/js/jquery.min.js"></script>
			<script src="assets1/js/skel.min.js"></script>
			<script src="assets1/js/util.js"></script>
			<script src="assets1/js/main.js"></script>
<script src="assets2/popper/popper.min.js"></script>
  
  <script src="assets2/tether/tether.min.js"></script>
  <script src="assets2/bootstrap/js/bootstrap.min.js"></script>
  <script src="assets2/smoothscroll/smooth-scroll.js"></script>
  <script src="assets2/datatables/jquery.data-tables.min.js"></script>
  <script src="assets2/datatables/data-tables.bootstrap4.min.js"></script>
  <script src="assets2/theme/js/script.js"></script>
   



	</body>
</html>