<?php
if(isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    $to = "hello@leobetz.com";
    $subject = "Kontaktformular Nachricht von $name";
    $message = "Name: $name\nEmail: $email\n\n$message";
    
    // Senden der E-Mail
    mail($to, $subject, $message);
    
    // Weiterleitung nach dem Senden
    header("Location: index.html");
}
?>
