<?php
    //Source: http://www.w3schools.com/php/php_mysql_connect.asp
    function connect(){
        $servername = "localhost";
        $username = "username";
        $password = "password";

        // Create connection
        $conn = new mysqli($servername, $username, $password);

        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }
        return $conn;
    }

    //Inspiration for insert, delete, update from: http://www.evoluted.net/thinktank/web-development/time-saving-database-functions

    function insert($connection, $table, $fieldsAndValues){
        if(!empty($table) && !empty($fieldsAndValues) && !empty($connection)){
            $fields = array_keys($fieldsAndValues);
        }
        $sql = $connection->prepare("INSERT INTO ".$table." (".implode(', ', $fields).") VALUES (".implode(', ', $fieldsAndValues).")");
        return $sql->execute();
    }

    function delete($connection, $table, $where){
        if(!empty($where)){
            $whereSQL = " WHERE ".trim($where);
        }
        $sql = $connection->prepare("DELETE FROM".$table.$whereSQL);
        return $sql->execute();
    }

    function update($connection, $table, $fieldsAndValues, $where){
        if(!empty($where)){
            $whereSQL = " WHERE ".trim($where);
        }
        $sql = "UPDATE ".$table." SET ";
        $sets = array();
        foreach ($fieldsAndValues as $column => $data){
            $sets[] = "'".$column."' = '".$data."'";
        }
        $sql .= implode(', ',$sets);
        $sql .= $whereSQL;
        $sql = $connection->prepare($sql);
        return $sql->execute();
    }

    function select($connection, $table, $criteria){
        if(empty($criteria)){
            $criteria = "*";
        }
        $sql = $connection->prepare("SELECT ".$criteria." FROM ".$table);
        return $sql->execute();
    }

?> 