<?php
  header('content-type:text/html:charset="utf-8"');
  $username = $_POST['username'];
  $password = $_POST['password'];
  $link = mysql_connect("127.0.0.1","root","123456");
  if(!$link){
    echo "服务器忙";
    exit;
  }
  mysql_set_charset("utf8");
  mysql_select_db("realme");

  $sql = "SELECT * FROM USER where username = '{$username}'";
	$res = mysql_query($sql);
  $rows = mysql_fetch_assoc($res);
  if($rows){
    echo 0;
  }else{
    $res = mysql_query("insert into user (username,password) values ('{$username}','{$password}')");
		echo 1;
  }
  mysql_close($link);
?>