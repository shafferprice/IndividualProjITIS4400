<script setup>

</script>

<template>
<div>
  <h1>Shaffer's Live <br>
Resume
</h1>
<div id="rustBack">
    <img src="../assets/pictures/pic1.JPG" alt="picofMe" class="mySlides">
</div>
<div id="blush">
</div>
<div id="sageCircleHome">
</div>
<img src="../assets/pictures/greenvine.png" alt="greenVine" id="vine2">
<img src="../assets/pictures/greenvine.png" alt="greenVine" id="vine">
<div id="blush2">

</div>
</div>
</template>

<style>
@import '../assets/base.css';
body{
    background-color: #e8ded1;
}
a:visited{
    color: #FFFFFF;
}
#sageCircleHome{
    border: solid #B2AC88;
    background:#B2AC88;
    border-radius:50%;
    width:300px;
    text-align:center;
    color:#B2AC88;
    padding:150px 0;
    font-size:16px;
    position: absolute;
    left: 525px;
    top: 300px;
}
#rustBack{
    height: 600px;
    width: 545px;
    background-color: #933A16;
    position: absolute;
    left: 0px;
    top: 0px;
}
#blush
{
    height: 350px;
    width: 500px;
    background-color: #CE897B;
    float: right;
    position: absolute;
    right: 0px;
    bottom: 0px;
}
#blush
{
    height: 200px;
    width: 500px;
    background-color: #CE897B;
    float: left;
    position: absolute;
    right: 0px;
    top: 630px;
}

h1{
    text-align: center;
    position: absolute;
    font-family: "American Typewriter";
    left: 650px;
    font-size: 65px;
    color: #142D0A;
}
.mySlides{
    height: 500px;
    width: 425px;
    border: solid #CE897B;
    border-width: 5px;
    position: absolute;
    margin-left: 25px;
    margin-top: 25px;

}
#vine{
    width: 575px;
    height: 275px;
    position: absolute;
    top: 545px;
}
#vine2{
    width: 600px;
    height: 275px;
    position: absolute;
    right: 15px;
    top: 100px;
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
}
</style>

