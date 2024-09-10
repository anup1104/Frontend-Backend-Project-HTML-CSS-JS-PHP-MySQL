<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "information";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    if (isset($_POST['submit_action'])) {
    
        $stmt = $conn->prepare("INSERT INTO information (first_name, last_name, email, info) VALUES (?, ?, ?, ?)");
        $stmt->bind_param("ssss", $_POST['first-name'], $_POST['last-name'], $_POST['email'], $_POST['info']);
        
        if ($stmt->execute()) {
            echo "New question submitted successfully.";
        } else {
            echo "Error: " . $stmt->error;
        }

        $stmt->close();

    } elseif (isset($_POST['withdraw_action'])) {
        // Handle Withdraw a Question form
        $stmt = $conn->prepare("DELETE FROM information WHERE email=?");
        $stmt->bind_param("s", $_POST['withdraw-email']);
        
        if ($stmt->execute()) {
            echo "Question(s) withdrawn successfully.";
        } else {
            echo "Error: " . $stmt->error;
        }

        $stmt->close();

    } elseif (isset($_POST['view_action'])) {
        // Handle View All Questions form
        $stmt = $conn->prepare("SELECT first_name, last_name, info FROM information WHERE email=?");
        $stmt->bind_param("s", $_POST['view-email']);
        $stmt->execute();
        
        $result = $stmt->get_result();
        
        if ($result->num_rows > 0) {
            echo "<h3>Your Questions:</h3>";
            while($row = $result->fetch_assoc()) {
                echo "Name: " . $row["first_name"]. " " . $row["last_name"]. " - Question: " . $row["info"]. "<br>";
            }
        } else {
            echo "No questions found for this email.";
        }

        $stmt->close();
    }
}

$conn->close();
?>
