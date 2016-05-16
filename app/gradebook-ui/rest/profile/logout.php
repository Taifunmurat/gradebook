<?php
session_destroy();
$response = array(
    'error' => false
);
echo json_encode($response);