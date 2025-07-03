<?php

include '../connect.php';

$stmt = $conn->prepare(
    "SELECT *
    From `more_info`, `social`"
);

$stmt->execute();

$result = $stmt->fetch(PDO::FETCH_ASSOC);

if ($result) {
    http_response_code(200);
    echo json_encode(
        array(
            "status" => "success",
            "message" => "Data fetched successfully",
            "data" => $result,
        )
    );
} else {
    http_response_code(500);
    echo json_encode(
        array(

            "status" => "error",
            "message" => "Error while fetching data",
        )
    );
}
