<?php
//Source: http://www.w3schools.com/php/php_mysql_connect.asp
function connect()
{
    $host = "localhost";
    $username = "applicationUser";
    $password = "gibbiX12345";
    $database = "dbgradebook";

    // Create connection
    $conn = mysqli_connect($host, $username, $password, $database);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    return $conn;
}

//Inspiration for insert, delete, update from: http://www.evoluted.net/thinktank/web-development/time-saving-database-functions

function insert($connection, $table, $fieldsAndValues)
{
    if (!empty($table) && !empty($fieldsAndValues) && !empty($connection)) {
        $qryFields = " (";
        $qryValues = " (";
        foreach ($fieldsAndValues as $field => $value) {
            $qryFields .= $field . ",";
            $qryValues .= "'" . $value . "',";
        }
        $qryFields = substr($qryFields, 0, strlen($qryFields) - 1);
        $qryValues = substr($qryValues, 0, strlen($qryValues) - 1);
        $qryFields .= ") ";
        $qryValues .= ") ";
        return mysqli_query($connection, "INSERT INTO " . $table . $qryFields . "VALUES" . $qryValues);
    }
    return false;
}

function delete($connection, $table, $where)
{
    if (!empty($where)) {
        $whereSQL = " WHERE " . trim($where);
    }
    $sql = $connection->prepare("DELETE FROM" . $table . $whereSQL);
    return $sql->execute();
}

function update($connection, $table, $fieldsAndValues, $where)
{
    if (!empty($where)) {
        $whereSQL = " WHERE " . trim($where);
    }
    $sql = "UPDATE " . $table . " SET ";
    $sets = array();
    foreach ($fieldsAndValues as $column => $data) {
        $sets[] = "'" . $column . "' = '" . $data . "'";
    }
    $sql .= implode(', ', $sets);
    $sql .= $whereSQL;
    $sql = $connection->prepare($sql);
    return $sql->execute();
}

function select($connection, $table, $lookingFor, $criteriaAndValues)
{
    if (!empty($table) && !empty($connection)) {
        $search = "";
        if (!is_array($lookingFor)) {
            $search = "*";
        } else {
            foreach ($lookingFor as $item) {
                $search .= $item . ",";
            }
            $search = substr($search, 0, strlen($search) - 1);
        }
        $criteriaAndValue = "";
        if (is_array($criteriaAndValues)) {
            $criteriaAndValue = " WHERE ";
            foreach ($criteriaAndValues as $field => $value) {
                $criteriaAndValue .= $field . " = '" . $value . "' AND ";
            }
        }
        $criteriaAndValue = substr($criteriaAndValue, 0, strlen($criteriaAndValue) - 5);
        return mysqli_query($connection, "SELECT " . $search . " FROM " . $table . $criteriaAndValue);
    }
    return false;
}




