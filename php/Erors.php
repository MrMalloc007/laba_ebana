<?php
    class Erors{
        protected $exep_messege_for_X;
        protected $exep_messege_for_Y;
        protected $exep_messege_for_R;

        public function __construct($exep_messege_for_X,$exep_messege_for_Y,$exep_messege_for_R){
            $this->exep_messege_for_X = $exep_messege_for_X;
            $this->exep_messege_for_Y = $exep_messege_for_Y;
            $this->exep_messege_for_R = $exep_messege_for_R;
        }


        public function getExepMessegeForX()
        {
            return $this->exep_messege_for_X;
        }


        public function setExepMessegeForX($exep_messege_for_X)
        {
            $this->exep_messege_for_X = $exep_messege_for_X;
        }


        public function getExepMessegeForY()
        {
            return $this->exep_messege_for_Y;
        }


        public function setExepMessegeForY($exep_messege_for_Y)
        {
            $this->exep_messege_for_Y = $exep_messege_for_Y;
        }


        public function getExepMessegeForR()
        {
            return $this->exep_messege_for_R;
        }

        public function setExepMessegeForR($exep_messege_for_R)
        {
            $this->exep_messege_for_R = $exep_messege_for_R;
        }

    }