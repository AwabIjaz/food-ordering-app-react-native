<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<form action="http://localhost:80/firstproject/public/forms" method="post" enctype="multipart/form-data">
<input type="hidden" name="_token" value="{{csrf_token()}}">
</br></br>
</br>
</br>
<h3>email</h3>
<input type="text" name="email"/>
</br></br><h3>password</h3>
<input type="text"  name="password"/>
</br><h3>Name<h3></br><input type="text" name="aj"/>
</br></br> <h3>Image </h3><input type="text"  name="image"/>
</br></br><h3>Location</h3><input type="text"  name="location"/>

<input type="submit">

</form>


</body>
</html>
