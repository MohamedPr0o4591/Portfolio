<?php
include('../connect.php');

$stmt = $conn->prepare(
    "SELECT `cv`
    FROM `social`
    WHERE `id` = 1"
);

$stmt->execute();
$currentCV = $stmt->fetch(PDO::FETCH_ASSOC);

$fb = isset($_POST['fb']) ? filterReq("fb") : null;
$wb = isset($_POST['wb']) ? filterReq('wb') : null;
$tl = isset($_POST["tl"]) ? filterReq('tl') : null;
$insta = isset($_POST['insta']) ? filterReq("insta") : null;
$linkedIn = isset($_POST["linkedIn"]) ? filterReq("linkedIn") : null;
$github = isset($_POST['github']) ? filterReq("github") : null;
$cv = isset($_FILES['cv']) ? uploadFile("cv") : null;

$fields = [];
$params = [];

if (!empty($fb)) {
    $fields[] = "`fb` = ?";
    $params[] = $fb;
}

if (!empty($wb)) {
    $fields[] = "`wb` = ?";
    $params[] = $wb;
}

if (!empty($tl)) {
    $fields[] = "`tele` = ?";
    $params[] = $tl;
}

if (!empty($insta)) {
    $fields[] = "`insta` = ?";
    $params[] = $insta;
}

if (!empty($linkedIn)) {
    $fields[] = "`linkedIn` = ?";
    $params[] = $linkedIn;
}

if (!empty($github)) {
    $fields[] = "`github` = ?";
    $params[] = $github;
}

if (!empty($cv)) {
    $fields[] = "`cv` = ?";
    $params[] = $cv;
}

if (!empty($fields)) {
    $query = "UPDATE `social` SET " . implode(", ", $fields) . " WHERE `id` = 1";
    $stmt = $conn->prepare($query);
    $stmt->execute($params);
    $count = $stmt->rowCount();

    if ($count > 0) {

        if (!empty($cv) && $currentCV && !empty($currentCV["cv"])) {
            deleteFile("../upload", $currentCV["cv"]);
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
            "message" => "No data updated or data is empty"
        )
    );
}
