<template>

<div class="stage-container">

<h1>Code Stage</h1>

<p>
In this stage developers write the application code using Vue.js and push it to GitHub repository.
The CI/CD pipeline starts automatically after the code commit.
</p>

<div class="box">

<h3>Technologies Used</h3>

<ul>
<li>Vue.js</li>
<li>Git</li>
<li>GitHub</li>
</ul>

</div>

</div>

</template>

<script>
export default {
name:"CodeStage"
}
</script>

<style>

.stage-container{
text-align:center;
padding:60px;
font-family:Arial;
}

.box{
margin-top:30px;
background:#f4f6f8;
padding:20px;
border-radius:10px;
width:300px;
margin-left:auto;
margin-right:auto;
}

</style>