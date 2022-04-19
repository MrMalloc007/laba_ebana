<?php
require_once "Area_shoot.php";
require_once "Validation.php";
require_once "Erors.php";
require_once "Response.php";

$X = $_POST["CORX"];
$Y = $_POST["CORY"];
$R = $_POST["CORR"];
$time = $_POST["time"];

$arrayX = array(-2, -1.5, -1, -0.5, 0, 0.5, 1, 1.5, 2);
$arrayR = array(1, 1.5, 2, 2.5, 3);

$Area = 0;
$RES  = "";
$main_exep = -1;

$exep_messege_for_X = "";
$exep_messege_for_Y = "";
$exep_messege_for_R = "";

$validator = new Validation();

$exep_messege_for_X = $validator->validateX($X, $arrayX);
$exep_messege_for_Y = $validator->validateY($Y);
$exep_messege_for_R = $validator->validateR($R, $arrayR);

$area_shoot = new Area_shoot();

$Area = $area_shoot->checkArea($X,$Y);
$RES = $area_shoot->shoot($Area,$X,$Y,$R);
$main_exep = $validator->EEEXEP($exep_messege_for_X,$exep_messege_for_Y,$exep_messege_for_R);

$currentTime = date('H:i:s', time()-$time*60);
$executionTime = round(microtime(true) - $_SERVER['REQUEST_TIME_FLOAT'], 7);

$response = new Response($X,$Y,$R,$currentTime,$executionTime,$RES);
$ER = new Erors($exep_messege_for_X,$exep_messege_for_Y,$exep_messege_for_R);

if ($main_exep == 1){
    echo json_encode($response);
}else{
    echo json_encode($ER);
}

