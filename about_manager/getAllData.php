<?php
include "../connect.php";

$stmt = $conn->prepare(
    "SELECT *
    FROM `about_manager`"
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
    http_response_code(400);
    echo json_encode(
        array(
            "message" => "Error while fetching data",
        )
    );
}
