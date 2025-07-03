<?php

$headers = apache_request_headers();
if (isset($headers["Authorization"])) {
    $authHeader = $headers["Authorization"];

    if (preg_match("/Bearer\s(\S+)/", $authHeader, $matches)) {
        $tokenId = $matches[1];
    } else {
        http_response_code(400);
        echo json_encode(array(
            "message" => "Authorization header format is incorrect",
        ));
        exit();
    }
} else {
    http_response_code(401);
    echo json_encode(array(
        "message" => "Unauthorized",
    ));
    exit();
}
