<template>
    <div>
        <h1>Academics</h1>

        <div id="majorRect">
        <ul>
        <li>Major: Computer Science</li>
        <li>Concentration: Human Computer Interaction</li>
        <li>Graduating: Fall 2022</li>
    </ul>
</div>

    <div id="sageCircle">
            Chancellor's List<br>
            Fall 2021, Spring 2021, <br>
            Fall 2022
</div>
<div id="blushCircle">
             GPA for Fall 2022: 4.00
             Cumulative: 3.92
</div>
<div id="darkGreenCircle">
            Teacher's Assistant for Data Structures
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
h1{
    text-align: center;
    position: absolute;
    left: 500px;
    font-family: "American Typewriter";
    font-size: 65px;
    top: 10px;
    color: #142D0A;
}
#majorRect{
    height: 200px;
    width: 400px;
    background-color: #933A16;
    position: absolute;
    top: 145px;
    left: 450px;
    font-size: 17px;
    color: #CE897B;
    display: flex;
    justify-content: center;
    align-items: center;
}
#majorRect:hover{
    height: 300px;
    width: 400px;
    font-size: 30px;
}
#sageCircle{
    height: 300px;
    width: 300px;
    background-color: #B2AC88;
    border-radius: 50%;
    position: absolute;
    top: 200px;
    left: 75px;
    color: #BE5504;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}

#sageCircle:hover{
    height: 400px;
    width: 400px;
    font-size: 25px;
}
#blushCircle{
    height: 200px;
    width: 200px;
    background-color: #EACAC2;
    border-radius: 50%;
    position: absolute;
    top: 515px;
    left: 250px;
    color: #933A16;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}
#blushCircle:hover{
    height: 300px;
    width: 300px;
    font-size: 25px;
}
#darkGreenCircle{
    height: 200px;
    width: 200px;
    background-color: #142D0A;
    border-radius: 50%;
    position: absolute;
    left: 720px;
    top: 450px;
    color: #FFFFFF;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}
#darkGreenCircle:hover{
    height: 300px;
    width: 300px;
    font-size: 25px;
}
</style>