<?php

include("../connect.php");


$sub1 = isset($_POST["sub1"]) ? filterReq("sub1") : null;
$sub2 = isset($_POST["sub2"]) ? filterReq("sub2") : null;
$sub3 = isset($_POST['sub3']) ? filterReq('sub3') : null;

$fields = [];
$params = [];

if (!empty($sub1)) {
    $fields[] = "`sub1` = ?";
    $params[] = $sub1;
}

if (!empty($sub2)) {
    $fields[] = "`sub2` = ?";
    $params[] = $sub2;
}

if (!empty($sub3)) {
    $fields[] = "`sub3` = ?";
    $params[] = $sub3;
}

if (!empty($fields)) {
    $query = "UPDATE `about_manager` 
    SET " . implode(", ", $fields) . " WHERE `id` = 1";
    $stmt = $conn->prepare($query);
    $stmt->execute($params);
    $count = $stmt->rowCount();

    if ($count > 0) {
        http_response_code(200);
        echo json_encode(
            array(
                "message" => "Data updated successfully"
            )
        );
    } else {
        http_response_code(401);
        echo json_encode(
            array(
                "message" => "No data updated"
            )
        );
    }
} else {
    http_response_code(400);
    echo json_encode(
        array(
            "message" => "All fields are required"
        )
    );
}
