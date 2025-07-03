<?php

include "../connect.php";

$id = fetchData("id");
$project_id = deleteData("id");

$stmt = $conn->prepare(
    "SELECT `projects`.`p_img`
    FROM `projects`
    WHERE `projects`.`p_id` = ?"
);

$stmt->execute([$id]);

$result = $stmt->fetch(PDO::FETCH_ASSOC);

if ($result) {
    deleteFile("../upload", $result["p_img"]);

    $stmt = $conn->prepare(
        "DELETE FROM `projects` WHERE `p_id` = ?"
    );

    $stmt->execute([$project_id]);

    $count = $stmt->rowCount();

    if ($count > 0) {
        http_response_code(200);
        echo json_encode(array("status" => "success", "message" => "Project deleted successfully"));
    } else {
        http_response_code(500);
        echo json_encode(array("status" => "error", "message" => "Error while deleting project"));
    }
} else {
    http_response_code(500);
    echo json_encode(array("status" => "error", "message" => "Error while deleting project"));
}
