<?php
ob_start();
if(!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $location = $_POST['location'];
    $message = $_POST['message'];

    $formatted_message =
        "Visitor name: $name 

Visitor email: $email 

Visitor location: $location 

Visitor message to you: $message";

    if (isset($name) && isset($email) && isset($location) && isset($message)) {
        mail("info@illinoisrack.com", "You have a new message from website visitor(name: $name)", $formatted_message);
    }
} else {
    header("location: contact.html");
}
ob_flush();

