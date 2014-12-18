<?php
$urls = array();
$u = include PATH_BASE.'urls/gd.php';
$urls = array_merge($u, $urls);
$u = include PATH_BASE.'urls/ycd.php';
$urls = array_merge($u, $urls);
$u = include PATH_BASE.'urls/preparing.php';
$urls = array_merge($u, $urls);
