<?php
include '../connect.php';
include "../bearerAuth.php";


$title = isset($_POST["title"]) ? filterReq("title") : null;
$subTitle = isset($_POST["subTitle"]) ? filterReq("subTitle") : null;
$desc = isset($_POST["desc"]) ? filterReq("desc") : null;
$img = isset($_FILES["img"]) ? uploadFile("img") : null;

// links
$web = isset($_POST["web"]) ? filterReq("web") : null;
$github = isset($_POST["github"]) ? filterReq("github") : null;
$video = isset($_POST["video"]) ? filterReq("video") : null;

// types
$types = isset($_POST['types']) ? filterReq('types') : null;

$fields = [];
$params = [];

// links 
$fieldLinks = [];
$paramLinks = [];

// types
$fieldTypes = [];
$paramTypes = [];

$msgErr = "";

if (isset($types)) {
    $fieldTypes[] = "`p_type` = ?";
    $paramTypes[] = $types;
}

if (isset($web)) {
    $fieldLinks[] = "`p_linkWeb` = ?";
    $paramLinks[] = $web;
}

if (isset($github)) {
    $fieldLinks[] = "`p_linkGithub` = ?";
    $paramLinks[] = $github;
}

if (isset($video)) {
    $fieldLinks[] = "`p_linkVideo` = ?";
    $paramLinks[] = $video;
}

if (isset($title)) {
    $fields[] = "`p_title` = ?";
    $params[] = $title;
}

if (isset($subTitle)) {
    $fields[] = "`p_subTitle` = ?";
    $params[] = $subTitle;
}

if (isset($desc)) {
    $fields[] = "`p_desc` = ?";
    $params[] = $desc;
}

if (isset($img)) {

    $stmt = $conn->prepare(
        "SELECT `p_img`
        FROM `projects`
        WHERE `p_id` = ?"
    );
    $stmt->execute([$tokenId]);
    $result = $stmt->fetch(PDO::FETCH_ASSOC);
    if ($result) {
        deleteFile("../upload", $result["p_img"]);
    }

    $fields[] = "`p_img` = ?";
    $params[] = $img;
}

if (!empty($fields) || !empty($fieldLinks) || !empty($fieldTypes)) {

    if (!empty($fields)) {
        $query = "UPDATE `projects` SET " . implode(", ", $fields) . " WHERE `p_id` = ?";
        $stmt = $conn->prepare($query);
        $stmt->execute([...$params, $tokenId]);
        $count = $stmt->rowCount();

        if ($count <= 0) {
            $msgErr = "Error while updating project.";
        }
    }

    if (!empty($fieldLinks)) {
        $query = "UPDATE `project_links` SET " . implode(", ", $fieldLinks) . " WHERE `project_id` = ?";
        $stmt = $conn->prepare($query);
        $stmt->execute([...$paramLinks, $tokenId]);
        $count = $stmt->rowCount();

        if ($count <= 0) {
            $msgErr = "Error while updating project links.";
        }
    }

    if (!empty($fieldTypes)) {
        $query = "UPDATE `project_types` SET " . implode(", ", $fieldTypes) . " WHERE `project_id` = ?";
        $stmt = $conn->prepare($query);
        $stmt->execute([...$paramTypes, $tokenId]);
        $count = $stmt->rowCount();

        if ($count <= 0) {
            $msgErr = "Error while updating project types.";
        }
    }


    if (empty($msgErr)) {
        http_response_code(200);
        echo json_encode(
            array(
                "status" => "success",
                "message" => "Project updated successfully"
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
} else {
    http_response_code(501);
    echo json_encode(
        array(
            "status" => "failed",
            "message" => "No data updated"
        )
    );
}
