<?php
session_start();
session_destroy();
setcookie(session_name(), '', time() - 3600, '/'); // Clear session cookie

// Redirect to login page
header("Location: login.html?logged_out=true");
exit();
?>
