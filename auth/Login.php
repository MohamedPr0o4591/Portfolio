<?php

include("../connect.php");

$username = filterReq("username");
$pass = filterReq("password");

$stmt = $conn->prepare(
    "SELECT *
    FROM `manager`
    WHERE `manager` = ? AND `password` = ?"
);

$stmt->execute(
    array(
        $username,
        $pass,
    )
);

$userData = $stmt->fetch(PDO::FETCH_ASSOC);

if ($userData) {
    http_response_code(200);
    echo json_encode(
        array(
            "message" => "Success",
            "user" => $userData,
        )
    );
} else {
    http_response_code(404);
    echo json_encode(
        array(
            "message" => "User not found",
        )
    );
}
