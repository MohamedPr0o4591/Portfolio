<?php
include '../connect.php';

$phone = isset($_POST["phone"]) ? filterReq("phone") : null;
$email = isset($_POST["email"]) ? filterReq("email") : null;
$address = isset($_POST["address"]) ? filterReq("address") : null;

$fields = [];
$params = [];

if (isset($phone)) {
    $fields[] = "`phone` = ?";
    $params[] = $phone;
}

if (isset($email)) {
    $fields[] = "`email` = ?";
    $params[] = $email;
}

if (isset($address)) {
    $fields[] = "`address` = ?";
    $params[] = $address;
}

if (isset($fields)) {
    $query = "UPDATE `contact_info` SET " . implode(", ", $fields) . " WHERE `contact_id` = 1";
    $stmt = $conn->prepare($query);
    $stmt->execute($params);

    $count = $stmt->rowCount();

    if ($count > 0) {
        http_response_code(200);
        echo json_encode(
            array(
                "status" => "success",
                "message" => "Contact info updated successfully",
            )
        );
    } else {
        http_response_code(401);
        echo json_encode(
            array(
                "status" => "failed",
                "message" => "No data updated"
            )
        );
    }
} else {
    http_response_code(501);
    echo json_encode(
        array(
            "status" => "failed",
            "message" => "No data updated"
        )
    );
}
