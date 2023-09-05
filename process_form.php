<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "sachidapalace@gmail.com";
    $subject = "Contact Form Submission";
    $headers = "From: $email";

    $messageBody = "Name: $name\n";
    $messageBody .= "Email: $email\n";
    $messageBody .= "Message:\n$message";

    $mailSuccess = mail($to, $subject, $messageBody, $headers);

    if ($mailSuccess) {
        echo json_encode(array("success" => true));
    } else {
        echo json_encode(array("success" => false));
    }
}
?>
