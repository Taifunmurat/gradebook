<?php
include '../database-utils/databaseUtils.php';

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$userid = $request->userid;
$module = $request->module;
$semester = $request->semester;
$test = $request->test;
$school = $request->school;