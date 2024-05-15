<?php
if(isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    $to = "leonard.betz@gmx.de";
    $subject = "Kontaktformular Nachricht von $name";
    $message = "Name: $name\nEmail: $email\n\n$message";
    
    // Senden der E-Mail
    mail($to, $subject, $message);
    
    // Weiterleitung nach dem Senden
    header("Location: danke.html");
}
?>
