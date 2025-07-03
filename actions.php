<?php

function filterReq($req)
{
    return htmlspecialchars(strip_tags($_POST[$req]));
}

function fetchData($req)
{
    return htmlspecialchars(strip_tags($_GET[$req]));
}

function patchData($req)
{
    parse_str(file_get_contents("php://input"), $patchData);

    if (isset($patchData[$req])) {
        return htmlspecialchars(strip_tags($patchData[$req]));
    }

    return null;
}

function deleteData($req)
{
    return htmlspecialchars(strip_tags($_REQUEST[$req]));
}

define("MB", (1024 * 1024));

function uploadFile($req)
{

    global $msgErr;

    $name = $_FILES[$req]["name"];
    $tmp = $_FILES[$req]['tmp_name'];
    $size = $_FILES[$req]["size"];

    $allowedExt = array(
        "png",
        "jpg",
        "jpeg",
        "webp",
        "gif",
        "pdf",
    );

    $randName = rand(1000, 10000) . $name;

    $strToArray  = explode(".", $name);
    $ext = end($strToArray);
    $ext = strtolower($ext);

    if (!empty($req) && !in_array($ext, $allowedExt)) {
        $msgErr = "File type not allowed";
    }

    if ($size > 1 * MB) {
        $msgErr = "File too large";
    }

    if (empty($msgErr)) {
        move_uploaded_file($tmp, "../upload" . $randName);

        return $randName;
    } else return $msgErr;
}

function deleteFile($dir, $file)
{

    if (file_exists($dir . '/' . $file)) {
        unlink($dir . '/' . $file);
    }
}
