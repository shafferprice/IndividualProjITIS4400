<template>
            <div>
            <h1>Connect</h1>

        <a href="https://www.instagram.com/shafferprice/" target="_blank">
        <img src="../assets/pictures/InstaLogo.png" alt="failed" class="logo" id="insta">
        </a>
        <a href="https://www.facebook.com/shaffer.price" target="_blank">
            <img src="../assets/pictures/FBLogo.png" alt="failed" class="logo" id="FB">
        </a>
        <a href="https://www.linkedin.com/in/shaffer-price-9061611bb/" target="_blank">
                <img src="../assets/pictures/LinkedInLogo.png" alt="failed" class="logo" id="Li">
                </a>
            <img src="../assets/pictures/EmailLogo.png" alt="failed" class="logo" id="Mail" onclick="alert('Feel free to email me! sprice61@uncc.edu')">
                
            </div>
</template>

<style>
body{
    background-color: #e8ded1;
}
a:visited{
    color: #FFFFFF;
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
h1{
    text-align: center;
    position: absolute;
    left: 600px;
    font-family: "American Typewriter";
    font-size: 65px;
    top: 10px;
    color: #142D0A;
}
#insta{
    position: absolute;
    left: 150px;
    height: 300px;
    width: 300px;
}
#Li{
    position: relative;
    top: 500px;
    left: 400px;
    height: 350px;
    width: 400px;
}
#FB{
    position: relative;
    top: 100px;
    left: 500px;
    height: 250px;
    width: 250px;
}
#Mail{
    position: absolute;
    top: 450px;
    left: 25px;
    height: 300px;
    width: 400px;
}
</style>