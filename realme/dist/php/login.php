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

  $sql = "SELECT * FROM USER where username = '{$username}' and password = '{$password}'";
	$res = mysql_query($sql);
    $rows = mysql_fetch_assoc($res);
    if($rows){
      echo "1";
    }else{
      echo "0";
    }
  mysql_close($link);
?>