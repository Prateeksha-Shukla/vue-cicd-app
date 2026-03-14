<template>
  <div class="container">

    <header class="header">
      <h1>CI/CD Automation Dashboard</h1>
      <p>Continuous Integration and Deployment for Vue.js Application</p>
    </header>

    <!-- Cards Section -->
    <div class="card-container">

      <div class="card" @click="showInfo('code')">
        <i class="fas fa-code icon"></i>
        <h2>Application Code</h2>
        <p>Frontend developed using Vue.js and managed with GitHub.</p>
      </div>

      <div class="card" @click="showInfo('pipeline')">
        <i class="fas fa-gears icon"></i>
        <h2>Automation Pipeline</h2>
        <p>CI/CD workflow implemented using GitHub Actions.</p>
      </div>

      <div class="card" @click="showInfo('docker')">
        <i class="fab fa-docker icon"></i>
        <h2>Containerization</h2>
        <p>Application packaged into Docker containers.</p>
      </div>

      <div class="card" @click="showInfo('aws')">
        <i class="fas fa-cloud icon"></i>
        <h2>Cloud Deployment</h2>
        <p>Docker container deployed on AWS EC2 infrastructure.</p>
      </div>

    </div>

    <!-- Pipeline Flow -->
    <section class="pipeline">

      <h2>CI/CD Pipeline Flow</h2>

      <div class="flow">

        <div class="flow-step" @click="showPipeline('code')">
          <i class="fas fa-code-branch"></i>
          <p>Code</p>
        </div>

        <div class="arrow"><i class="fas fa-arrow-right"></i></div>

        <div class="flow-step" @click="showPipeline('build')">
          <i class="fas fa-hammer"></i>
          <p>Build</p>
        </div>

        <div class="arrow"><i class="fas fa-arrow-right"></i></div>

        <div class="flow-step" @click="showPipeline('docker')">
          <i class="fab fa-docker"></i>
          <p>Docker</p>
        </div>

        <div class="arrow"><i class="fas fa-arrow-right"></i></div>

        <div class="flow-step" @click="showPipeline('aws')">
          <i class="fas fa-cloud"></i>
          <p>AWS</p>
        </div>

        <div class="arrow"><i class="fas fa-arrow-right"></i></div>

        <div class="flow-step success" @click="openLiveApp">
          <i class="fas fa-rocket"></i>
          <p>Live</p>
        </div>

      </div>

    </section>

    <!-- Deployment Message -->
    <div v-if="deploymentMessage" class="deploy-message">
      <h2>Deployment Successful ✅</h2>
      <p>Opening Live Application...</p>
    </div>

    <!-- Technology Stack -->
    <section class="tech">

      <h2>Technology Stack</h2>

      <div class="tech-icons">

        <i class="fab fa-vuejs"
           title="Vue.js"
           @click="openTech('vue')"></i>

        <i class="fab fa-github"
           title="GitHub"
           @click="openTech('github')"></i>

        <i class="fab fa-docker"
           title="Docker"
           @click="openTech('docker')"></i>

        <i class="fab fa-aws"
           title="AWS"
           @click="openTech('aws')"></i>

      </div>

    </section>

    <footer>
      <p>DevOps Project | CI/CD Automation using Vue.js</p>
    </footer>

  </div>
</template>

<script>
export default {
  name: "App",

  data(){
    return{
      deploymentMessage:false
    }
  },

  methods: {

    showInfo(type) {

      if (type === "code") {
        alert("Developer writes Vue.js code and pushes it to GitHub repository.");
      }

      else if (type === "pipeline") {
        alert("GitHub Actions automatically runs CI/CD pipeline.");
      }

      else if (type === "docker") {
        alert("Docker builds container images for deployment.");
      }

      else if (type === "aws") {
        alert("Docker container deployed on AWS EC2 cloud server.");
      }

    },

    showPipeline(stage){

      if(stage === "code"){
        window.open("https://github.com","_blank")
      }

      else if(stage === "build"){
        alert("Build Stage: CI pipeline builds the application.")
      }

      else if(stage === "docker"){
        window.open("https://www.docker.com","_blank")
      }

      else if(stage === "aws"){
        window.open("https://aws.amazon.com","_blank")
      }

    },

    openLiveApp(){

      this.deploymentMessage = true

      setTimeout(()=>{
        window.open("http://localhost:8080","_blank")
      },3000)

    },

    openTech(tech){

      if(tech === "vue"){
        window.open("https://vuejs.org","_blank")
      }

      else if(tech === "github"){
        window.open("https://github.com","_blank")
      }

      else if(tech === "docker"){
        window.open("https://www.docker.com","_blank")
      }

      else if(tech === "aws"){
        window.open("https://aws.amazon.com","_blank")
      }

    }

  }

}
</script>

<style>

body{
  margin:0;
  font-family: Arial, Helvetica, sans-serif;
  background:#f4f6f8;
}

.container{
  text-align:center;
}

.header{
  background:linear-gradient(135deg,#42b983,#2c3e50);
  color:white;
  padding:40px;
}

.card-container{
  display:flex;
  justify-content:center;
  flex-wrap:wrap;
  margin:40px;
}

.card{
  background:white;
  padding:25px;
  margin:15px;
  width:240px;
  border-radius:12px;
  box-shadow:0px 6px 15px rgba(0,0,0,0.1);
  transition:0.3s;
  cursor:pointer;
}

.card:hover{
  transform:translateY(-10px) scale(1.05);
}

.icon{
  font-size:40px;
  color:#42b983;
  margin-bottom:15px;
}

.pipeline{
  margin-top:30px;
}

.flow{
  display:flex;
  justify-content:center;
  align-items:center;
  flex-wrap:wrap;
  margin-top:20px;
}

.flow-step{
  background:#2563eb;
  color:white;
  padding:14px 22px;
  margin:10px;
  border-radius:8px;
  font-weight:bold;
  cursor:pointer;
  transition:0.3s;
}

.flow-step i{
  font-size:24px;
  display:block;
  margin-bottom:5px;
}

.flow-step:hover{
  background:#1e40af;
  transform:scale(1.1);
}

.arrow{
  font-size:20px;
  margin:10px;
  color:#333;
}

.success{
  background:#16a34a;
}

.success:hover{
  background:#15803d;
}

.deploy-message{
  background:#16a34a;
  color:white;
  padding:20px;
  margin:30px auto;
  width:300px;
  border-radius:10px;
}

.tech{
  margin-top:40px;
}

.tech-icons i{
  font-size:50px;
  margin:20px;
  color:#2c3e50;
  cursor:pointer;
  transition:0.3s;
}

.tech-icons i:hover{
  transform:scale(1.2);
  color:#42b983;
}

footer{
  margin-top:40px;
  padding:20px;
  background:#222;
  color:white;
}

</style>