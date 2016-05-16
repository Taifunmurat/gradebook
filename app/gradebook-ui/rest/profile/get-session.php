<?php
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

if (isset($_SESSION)) {
    $data = array(
        'E_Mail' => $_SESSION['mail'],
        'ID_Person' => $_SESSION['uid']
    );
}else{
    $data = false;
};
$response = array(
    'data' => $data
);
echo json_encode($response);