<?php

include '../database-utils/databaseUtils.php';

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
if (isset($request->userid)) {
    $userid = $request->userid;
    $connection = connect();
    $results = mysqli_query($connection, "SELECT Name AS 'school', ID_Schule AS 'ID_School', SemesterName AS 'semester', ID_Semester, ModulName AS 'matter', ID_Modul AS 'ID_Matter', Test AS 'mark', ID_Test AS 'ID_Mark' FROM person JOIN schule ON schule.Person_ID = person.ID_Person JOIN semester ON semester.Schule_ID = schule.ID_Schule JOIN modul ON modul.SemesterModul_ID = semester.SemesterModul_ID JOIN test ON test.Modul_ID = modul.ID_Modul WHERE person.ID_Person = '" . $userid . "'");
    $overviewInfo = array();
    while ($result = $results->fetch_array()) {
        array_push($overviewInfo, $result);
    }
    echo json_encode($overviewInfo);
}