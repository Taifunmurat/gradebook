<?php
include '../database-utils/databaseUtils.php';

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$userid = $request->userid;
$password = $request->password;
    