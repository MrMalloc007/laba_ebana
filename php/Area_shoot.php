<?php
    class Area_shoot{

        function checkArea($X,$Y){
            if ($X > 0 && $Y > 0){
                return 1;
            }elseif ($X < 0 && $Y > 0){
                return 2;
            }elseif ($X < 0 && $Y < 0){
                return 3;
            }elseif ($X > 0 && $Y < 0){
                return 4;
            }elseif ($X == 0 || $Y == 0) {
                return 5;
            }
        }

        function shoot($Area,$X,$Y,$R){
            switch ($Area){
                case 1: if (sqrt(pow($X,2) + pow($Y,2)) <= $R){
                    return "Есть пробитие !";
                }else{
                    return "Рикошет";
                }
                case 2: if ($X <= 0 && $Y >= 0 && $Y <= $X + ($R/2)){
                    return "Есть пробитие !";
                }else{
                    return "Рикошет !";
                }
                case 3: return "Эм...Можно и поточнее стрелять...";
                case 4: if (abs($X) <= abs($R) && abs($Y) <= abs($R)){
                    return "Есть пробитие !";
                }else{
                    return "Рикошет !";
                }
                case 5: if ($X > $R || $X < -$R/2 || $Y > $R || $Y < $R){
                    return "Эм...Можно и поточнее стрелять...";
                }else{
                    return "Есть пробитие !";
                }
            }
        }
    }
