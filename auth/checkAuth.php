<?php

include("../connect.php");
include('../bearerAuth.php');

$stmt = $conn->prepare(
    "SELECT *
    FROM `manager`
    WHERE `m_id` = ?"
);

$stmt->execute(
    array(
        $tokenId,
    )
);

$result = $stmt->fetch(PDO::FETCH_ASSOC);

if ($result) {
    http_response_code(200);
    echo json_encode(array(
        "message" => "Success",
        "user" => $result,
    ));
} else {
    http_response_code(401);
    echo json_encode(array(
        "message" => "Unauthorized",
    ));
}
