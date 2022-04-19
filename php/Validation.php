<?php

    class Validation{

        function validateX($X,array $arrayX){
            if (!in_array($X,$arrayX)){
                return "Выберите число из списка";
            }elseif (!is_numeric($X)){
                return "X должен являться числом";
            }else{
                return "Все хорошо !";
            }
        }

        function validateY($Y){
            if (!is_numeric($Y)){
                return "Y должен являться числом";
            }elseif ($Y < -5 || $Y > 5){
                return "Выберите число из диапазона";
            }else{
                return "Все хорошо !";
            }
        }

        function validateR($R,array $arrayR){
            if (!in_array($R,$arrayR)){
                return "Выберите R из списка";
            }elseif (!is_numeric($R)){
                return "R должно являться числом";
            }else{
                return "Все хорошо !";
            }
        }

        function EEEXEP($exep_X,$exep_y,$exep_R){
            if (strcmp($exep_X,"Все хорошо !") !== 0 || strcmp($exep_y,"Все хорошо !") !== 0 || strcmp($exep_R,"Все хорошо !") !== 0){
                return 0;
            }else{
                return 1;
            }
        }
    }
