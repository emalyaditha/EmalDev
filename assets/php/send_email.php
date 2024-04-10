<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form data
    $fullName = $_POST["full-name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Set the recipient email address
    $to = "emalyaditha@gmail.com";

    // Set the email subject
    $subject = "New Contact Form Submission";

    // Set the email headers
    $headers = "From: $fullName <$email>";

    // Send the email
    if (mail($to, $subject, $message, $headers)) {
        // Email sent successfully
        echo "Thank you! Your message has been sent.";
    } else {
        // Email failed to send
        echo "Sorry, there was an error sending your message.";
    }
} else {
    // Invalid request method
    echo "Invalid request method.";
}
?>
