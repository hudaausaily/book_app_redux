<?php require('./config.php');?>
<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods:*");

$object = new crud;
$conn = $object->connect();

    $email =  $_REQUEST['email'];
    $password = $_REQUEST['password'];


    try {
        $sql = "SELECT * FROM users WHERE email='$email' AND password='$password'";
    
        $stmt = $conn->query($sql);
        $stmt->setFetchMode(PDO::FETCH_ASSOC);
    } catch (PDOException $error) {
        die($error->getMessage());
    }
     while ($row = $stmt->fetch()): 
            echo $row['id'];
     endwhile; 
     ?>