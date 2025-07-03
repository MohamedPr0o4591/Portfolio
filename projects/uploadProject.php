<?php

include('../connect.php');

$id = bin2hex(random_bytes(16));
$title = filterReq("title");
$subTitle = filterReq("subTitle");
$desc = filterReq("desc");
$img = uploadFile("project");

// links
$linkWeb = filterReq("web");
$linkGithub = filterReq("github");
$linkVideo = filterReq("video");

// types
$projectType = filterReq('types');

$msgErr = '';

$stmt1 = $conn->prepare(
    "INSERT INTO `projects` (`p_id` ,`p_title` ,`p_subTitle` ,`p_desc` ,`p_img`) VALUES (? ,? ,? ,? ,?)  "
);

$stmt1->execute(
    array(
        $id,
        $title,
        $subTitle,
        $desc,
        $img,
    )
);

$count1 = $stmt1->rowCount();

if ($count1 <= 0) {
    $msgErr = "Error while uploading project data.";
}

if (empty($msgErr)) {
    $stmt2 = $conn->prepare(
        "INSERT INTO `project_links` (`project_id`, `p_linkWeb`, `p_linkGithub`, `p_linkVideo`) 
         VALUES (:id, :linkWeb, :linkGithub, :linkVideo)"
    );

    $stmt2->execute(
        array(
            ":id" => $id,
            ":linkWeb" => $linkWeb,
            ":linkGithub" => $linkGithub,
            ":linkVideo" => $linkVideo,
        )
    );

    $count2 = $stmt2->rowCount();

    if ($count2 <= 0) {
        $msgErr = "Error while uploading project links.";
    }
}

if (empty($msgErr)) {
    $stmt3 = $conn->prepare(
        "INSERT INTO `project_types` (`project_id`, `p_type`) 
         VALUES (:id, :projectType)"
    );

    $stmt3->execute(
        array(
            ":id" => $id,
            ":projectType" => $projectType,
        )
    );

    $count3 = $stmt3->rowCount();

    if ($count3 <= 0) {
        $msgErr = "Error while uploading project types.";
    }
}

if (empty($msgErr)) {
    http_response_code(200);
    echo json_encode(
        array(
            "status" => "success",
            "message" => "Project uploaded successfully"
        )
    );
} else {
    http_response_code(401);
    echo json_encode(
        array(
            "status" => "failed",
            "message" => $msgErr
        )
    );
}
