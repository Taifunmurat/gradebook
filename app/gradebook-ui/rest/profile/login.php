<?php
include '../database-utils/databaseUtils.php';
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$email = $request->mail;
$password = $request->password;

$connection = connect();
$data = array('E_Mail' => $email, 'Passwort' => $password);
$login = select($connection, "person", null, $data);
$error = true;
$row = $login->fetch_array();
if($login != false && !is_null($row[0])){
    session_start();
    $_SESSION['uid'] = $row[0];
    $_SESSION['mail'] = $row[1];
    $error = false;
};
header('Content-type: application/json');
$response = array(
    'error' => $error,
    'data' => $row
);
echo json_encode($response);