<?php
session_start();
if ($_REQUEST['action'] == 'set') {
    $_SESSION['user'] = serialize($_REQUEST['data']);
} else if($_REQUEST['action'] == 'get'){
	if (isset($_SESSION['user'])){
	    echo json_encode(unserialize($_SESSION['user']));
	}else {
	    echo 0;
	}
}else {
	session_destroy();
}