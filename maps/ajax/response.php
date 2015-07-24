<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$array = array();

$obj = new stdClass();
$obj->lat = $_POST['xmin'];
$obj->lng = $_POST['ymin'];
$obj->title = "Pictures";
$obj->pictures = array();
$obj->pictures[] = "/images/properties/prop1.jpg";
$obj->marker =  "/images/icons/accountancy.png";
$array[] = $obj;

$obj = new stdClass();
$obj->lat = $_POST['xmax'];
$obj->lng = $_POST['ymax'];
$obj->title = "Main seller here - centered on the map";
$obj->pictures = array();
$obj->pictures[] = "/images/properties/prop2.jpg";
$obj->pictures[] = "/images/properties/prop3.jpg";
$obj->marker = "/images/icons/community.png";
$array[] = $obj;

echo json_encode($array);
die;
