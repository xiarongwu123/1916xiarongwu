<?php
     header("content-Type: text/html; charset=utf-8");
 
     $connect = mysqli_connect('localhost','root','root','xrw',3306);
     if(mysqli_connect_error()){
         die("连接数据库失败");
     }
     //获取请求中的用户名和密码
     $un = $_REQUEST['username'];
     $pw = $_REQUEST['password'];
     //查询数据库
     //书写sql语句
     $sql = "SELECT * FROM info WHERE username='$un' AND password='$pw'";
     //执行sql语句
     $result = mysqli_query($connect,$sql);
     $row = mysqli_num_rows($result);
     if($row>0){
         echo "1";
     }else{
         echo "0";
     }
     
?>