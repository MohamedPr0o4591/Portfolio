<?php
include "../connect.php";

$stmt = $conn->prepare(
    "SELECT 
        projects.p_id, 
        projects.p_title, 
        projects.p_subTitle, 
        projects.p_desc, 
        projects.p_img, 
        project_links.p_linkWeb, 
        project_links.p_linkGithub, 
        project_links.p_linkVideo, 
        project_types.p_typeId, 
        project_types.p_type
    FROM `projects`
    JOIN `project_links` ON projects.p_id = project_links.project_id
    JOIN `project_types` ON projects.p_id = project_types.project_id"
);

$stmt->execute();
$result = $stmt->fetchAll(PDO::FETCH_ASSOC);

$organizedResult = [];

foreach ($result as $row) {
    $p_id = $row['p_id'];

    if (!isset($organizedResult[$p_id])) {
        $organizedResult[$p_id] = [
            "p_id" => $row["p_id"],
            "p_title" => $row["p_title"],
            "p_subTitle" => $row["p_subTitle"],
            "p_desc" => $row["p_desc"],
            "p_img" => $row["p_img"],
            "p_linkWeb" => $row["p_linkWeb"],
            "p_linkGithub" => $row["p_linkGithub"],
            "p_linkVideo" => $row["p_linkVideo"],
            "p_types" => []
        ];
    }

    $organizedResult[$p_id]["p_types"] = [
        "p_typeId" => $row["p_typeId"],
        "p_type" => json_decode(html_entity_decode($row["p_type"]), true),
    ];
}

$finalResult = array_values($organizedResult);

http_response_code(200);
echo json_encode(array("result" => $finalResult));
