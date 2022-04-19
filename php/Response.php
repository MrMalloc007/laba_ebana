<?php
    class Response{
        protected $X;
        protected $Y;
        protected $R;
        protected $currentTime;
        protected $executionTime;
        protected $RES;


        public function __construct($X, $Y, $R, $currentTime, $executionTime, $RES)
        {
            $this->X = $X;
            $this->Y = $Y;
            $this->R = $R;
            $this->currentTime = $currentTime;
            $this->executionTime = $executionTime;
            $this->RES = $RES;
        }


        public function getX()
        {
            return $this->X;
        }

        public function setX($X)
        {
            $this->X = $X;
        }

        public function getY()
        {
            return $this->Y;
        }

        public function setY($Y)
        {
            $this->Y = $Y;
        }

        public function getR()
        {
            return $this->R;
        }

        public function setR($R)
        {
            $this->R = $R;
        }

        public function getCurrentTime()
        {
            return $this->currentTime;
        }

        public function setCurrentTime($currentTime)
        {
            $this->currentTime = $currentTime;
        }

        public function getExecutionTime()
        {
            return $this->executionTime;
        }

        public function setExecutionTime($executionTime)
        {
            $this->executionTime = $executionTime;
        }

        public function getRES()
        {
            return $this->RES;
        }

        public function setRES($RES)
        {
            $this->RES = $RES;
        }
    }



