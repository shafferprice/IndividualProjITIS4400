<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
<div>
<RouterView></RouterView>
<div id="navCircle">

    <button class="button"><RouterLink to="/">Home</RouterLink></button><br><br>
    <button class="button"><RouterLink to="/aboutMe"> About Me</RouterLink></button><br><br>
    <button class="button"><RouterLink to="/academics">Academics</RouterLink></button><br><br>
    <button class="button"><RouterLink to="/connect">Connect</RouterLink></button><br><br>
</div>
</div>
</template>

<style>
@import './assets/base.css';
a:visited{
    color: #FFFFFF;
}
#navCircle{
    border: solid #E4BA73;
    background:#E4BA73;
    border-radius:50%;
    width:400px;
    text-align:center;
    color:#E4BA73;
    padding:65px 0;
    font-size:16px;
    position: absolute;
    right: 75px;
    top: 200px;

}

.button{
    background-color: #142D0A;
    border: none;
    color: #FFFFFF;
    padding: 10px;
    display: inline-block;
    border-radius: 8px;
}
.button:hover{
    background-color: #F0F0F0;
    color: #142D0A;
}

</style>
