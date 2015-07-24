<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$array = array();

for($i = 0; $i < 5; $i++){
    $obj = new stdClass();
    $obj->locationArea = "Zone " + (16 + $i * 2);
    $obj->locationCity = "Warsaw";
    $obj->price = "$" . (150 + $i * 5);
    $obj->pictures = array();
    $obj->pictures[] = "/images/properties/prop1.jpg";
    $obj->pictures[] = "/images/properties/prop2.jpg";
    $obj->ownerImage = "http://www.panic.com/blog/wp-content/themes/panic/images/icon_smile2.png";
    $array[$i * 2] = $obj;
    
    $obje = new stdClass();
    $obje->locationArea = "Zone " + (16 + $i * 5);
    $obje->locationCity = "Poznan";
    $obje->price = "$" . (300 + $i * 10);
    $obje->pictures = array();
    $obje->pictures[] = "/images/properties/prop1.jpg";
    $obje->pictures[] = "/images/properties/prop2.jpg";
    $obje->ownerImage = "http://www.panic.com/blog/wp-content/themes/panic/images/icon_smile2.png";
    $array[$i * 2 + 1] = $obje;
}

echo json_encode($array);
die;