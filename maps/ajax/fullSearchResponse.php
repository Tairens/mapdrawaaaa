<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$array = array();

$obj = new stdClass();
$obj->id = 1;
$obj->description = 'Mini Description 1 one';
$obj->img = 'http://lorempixel.com/50/50/nature/';
$obj->title = 'Mini Title 1';
$obj->url = 'some url 1';
$array[] = $obj;

$obj = new stdClass();
$obj->id = 2;
$obj->description = 'Mini Description 2 second';
$obj->img = 'http://lorempixel.com/50/50/people/';
$obj->title = 'Mini Title 2';
$obj->url = 'some url 2';
$array[] = $obj;


$obj = new stdClass();
$obj->id = 3;
$obj->description = 'Mini Description 3 third';
$obj->img = 'http://lorempixel.com/50/50/people/';
$obj->title = 'Mini Title 3"';
$obj->url = 'some url 3';
$array[] = $obj;

$obj = new stdClass();
$obj->id = 4;
$obj->description = 'Mini Description 4 fourth';
$obj->img = 'http://lorempixel.com/50/50/nature/';
$obj->title = 'Mini Title 4"';
$obj->url = 'some url 4';
$array[] = $obj;

echo json_encode($array);
die;