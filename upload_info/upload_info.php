<?php
include("../connect.php");

$stmt = $conn->prepare(
    "SELECT `img` , `sub_img`
    FROM `more_info`
    WHERE `id` = 1"
);

$stmt->execute();
$currentImg = $stmt->fetch(PDO::FETCH_ASSOC);

$title = isset($_POST['title']) ? filterReq("title") : null;
$subtitle = isset($_POST['sub']) ? filterReq("sub") : null;
$desc = isset($_POST['desc']) ? filterReq("desc") : null;
$img = isset($_FILES['img']) ? uploadFile("img") : null;
$subImg = isset($_FILES['sub_img']) ? uploadFile('sub_img') : null;

$fields = [];
$params = [];

if (!empty($title)) {
    $fields[] = "`title` = ?";
    $params[] = $title;
}

if (!empty($subtitle)) {
    $fields[] = "`sub_title` = ?";
    $params[] = $subtitle;
}

if (!empty($desc)) {
    $fields[] = "`description` = ?";
    $params[] = $desc;
}

if (!empty($img)) {
    $fields[] = "`img` = ?";
    $params[] = $img;
}

if (!empty($subImg)) {
    $fields[] = "`sub_img` = ?";
    $params[] = $subImg;
}

if (!empty($fields)) {
    $query = "UPDATE `more_info` SET " . implode(", ", $fields) . " Where `id` = 1";
    $stmt = $conn->prepare($query);
    $stmt->execute($params);
    $count = $stmt->rowCount();

    if ($count > 0) {

        if (!empty($img) && $currentImg && !empty($currentImg['img'])) {
            deleteFile("../upload", $currentImg["img"]);
        }

        if (!empty($subImg) && $currentImg && !empty($currentImg['sub_img'])) {
            deleteFile("../upload", $currentImg["sub_img"]);
        }

        http_response_code(200);
        echo json_encode(
            array(
                "status" => "success",
                "message" => "Data updated successfully"
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
    http_response_code(400);
    echo json_encode(
        array(
            "status" => "failed",
            "message" => "No data provided for update"
        )
    );
}
