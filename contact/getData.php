<?php

include "../connect.php";

$stmt = $conn->prepare(
    "SELECT * 
    FROM `contact_info`"
);

$stmt->execute();

$result = $stmt->fetch(PDO::FETCH_ASSOC);

if ($result) {
    http_response_code(200);
    echo json_encode(
        array(
            "message" => "Success",
            "data" => $result,
        )
    );
} else {
    http_response_code(500);
    echo json_encode(array("message" => "Error while fetching data"));
}
