<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE, PATCH");
header("Content-Type: application/json; charset=UTF-8");

// Handling OPTIONS request (preflight request)
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200); // Send HTTP OK for preflight request
    exit();
}

$host = "localhost";
$dbname = "portfolio";
$user = "root";
$pass = "";

try {
    $conn = new PDO("mysql:host=$host", $user, $pass);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $conn->exec("CREATE DATABASE IF NOT EXISTS $dbname CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci");

    $conn = new PDO("mysql:host=$host;dbname=$dbname", $user, $pass);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $sql = [];

    $sql[] = "CREATE TABLE IF NOT EXISTS `manager` (
        `m_id` VARCHAR(255) NOT NULL UNIQUE,
        `manager` VARCHAR(255),
        `password` VARCHAR(255)
    )";


    $sql[] = "CREATE TABLE IF NOT EXISTS `projects` (
        `p_id` VARCHAR(255) NOT NULL,
        `p_title` VARCHAR(255),
        `p_subTitle` VARCHAR(255),
        `p_desc` VARCHAR(255),
        `p_img` VARCHAR(255)
    )";

    $sql[] = "CREATE TABLE IF NOT EXISTS `project_links` (
        `link_id` INT AUTO_INCREMENT PRIMARY KEY,
        `project_id` VARCHAR(255),
        `p_linkWeb` VARCHAR(255),
        `p_linkGithub` VARCHAR(255),
        `p_linkVideo` VARCHAR(255)
    )";

    $sql[] = "CREATE TABLE IF NOT EXISTS `project_types` (
        `p_typeId` INT AUTO_INCREMENT PRIMARY KEY,
        `project_id` VARCHAR(255),
        `p_type` VARCHAR(255)
    )";


    include "../actions.php";

    if (!empty($sql)) {
        foreach ($sql as $query) {
            $conn->exec($query);
        }
    }


    // إنشاء الجداول
    $createTables = [
        "social" => "CREATE TABLE IF NOT EXISTS social (
        id INT PRIMARY KEY,
        fb VARCHAR(255),
        wb VARCHAR(255),
        tele VARCHAR(255),
        insta VARCHAR(255),
        linkedIn VARCHAR(255),
        github VARCHAR(255),
        cv VARCHAR(255)
    )",

        "more_info" => "CREATE TABLE IF NOT EXISTS more_info (
        id INT PRIMARY KEY,
        title VARCHAR(255),
         sub_title VARCHAR(255),
          description VARCHAR(255),
           img VARCHAR(255),
            sub_img VARCHAR(255)
    )",

        "contact_info" => "CREATE TABLE IF NOT EXISTS contact_info (
        contact_id INT PRIMARY KEY,
        phone VARCHAR(20),
        email VARCHAR(255),
        address TEXT
    )",

        "about_manager" => "CREATE TABLE IF NOT EXISTS about_manager (
        id INT PRIMARY KEY,
        sub1 VARCHAR(255),
        sub2 VARCHAR(255),
        sub3 VARCHAR(255)
    )"
    ];

    // تنفيذ الإنشاء
    foreach ($createTables as $table => $sql) {
        try {
            $conn->exec($sql);
        } catch (PDOException $e) {
            echo "خطأ في إنشاء جدول $table: " . $e->getMessage() . "<br>";
        }
    }

    // دالة لإدخال صف فقط إذا لم يكن موجودًا
    function insertIfNotExists(PDO $conn, string $table, array $columns)
    {
        try {
            // استخراج اسم المفتاح الأساسي (نفترض أول مفتاح هو المفتاح الأساسي)
            reset($columns);
            $primaryKey = key($columns);
            $primaryValue = $columns[$primaryKey];

            // التحقق من وجود العمود
            $columnsResult = $conn->query("SHOW COLUMNS FROM $table LIKE '$primaryKey'");
            if ($columnsResult->rowCount() === 0) {
                echo "⚠️ العمود '$primaryKey' غير موجود في الجدول $table<br>";
                return;
            }

            // التحقق من وجود الصف
            $stmt = $conn->prepare("SELECT $primaryKey FROM $table WHERE $primaryKey = :pk");
            $stmt->execute([':pk' => $primaryValue]);

            if ($stmt->rowCount() === 0) {
                // تجهيز الإدخال
                $cols = implode(', ', array_keys($columns));
                $placeholders = ':' . implode(', :', array_keys($columns));
                $insert = $conn->prepare("INSERT INTO $table ($cols) VALUES ($placeholders)");
                $insert->execute($columns);
                echo "✅ تم إدخال صف في جدول $table<br>";
            }
        } catch (PDOException $e) {
            echo "خطأ في جدول $table: " . $e->getMessage() . "<br>";
        }
    }

    // إدخال صف id = 1 أو contact_id = 1 حسب الجدول
    insertIfNotExists($conn, 'social', [
        'id' => 1,
        'fb' => '',
        'wb' => '',
        'tele' => '',
        'insta' => '',
        'linkedIn' => '',
        'github' => '',
        'cv' => ''
    ]);

    insertIfNotExists($conn, 'more_info', [
        'id' => 1,
        'title' => '',
        'sub_title' => '',
        'description' => '',
        'img' => '',
        'sub_img' => ''
    ]);

    insertIfNotExists($conn, 'contact_info', [
        'contact_id' => 1,
        'phone' => '',
        'email' => '',
        'address' => ''
    ]);

    insertIfNotExists($conn, 'about_manager', [
        'id' => 1,
        'sub1' => '',
        'sub2' => '',
        'sub3' => ''
    ]);
} catch (PDOException $e) {
    echo "" . $e->getMessage();
}
