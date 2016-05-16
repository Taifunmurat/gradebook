<?php
include '../database-utils/databaseUtils.php';

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$email = $request->mail;
$password = $request->password;

$connection = connect();
$account = array('E_Mail' => $email, 'Passwort' => $password);

$existingAccounts = select($connection, "person", null, $account);
$error = true;
if ($existingAccounts) {
    $register = insert($connection, "person", $account);
    $error = false;
}
header('Content-type: application/json');
$response = array(
    'error' => $error,
    'exists' => $existingAccounts
);
echo json_encode($existingAccounts);