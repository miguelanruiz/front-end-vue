<template>
  <div class="home">
    <nav class="navbar navbar-expand-md navbar-dark bg-primary">
      <a class="navbar-expand-md navbar-dark bg-primary" href="#">  <img src="../assets/logoBrand.png" width="30" height="30" class="d-inline-block align-top" alt=""></a>
      <a class="navbar-dark style">MicroSleep</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" v-on:click="home()" >Inicio <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" v-on:click="about()" >Quiénes somos <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" v-on:click="products()" >Productos<span class="sr-only">(current)</span></a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <button v-on:click="singin()" class="btn btn:focus btn:hover z-depth-1a my-2 my-sm-0" type="submit">Iniciar Sesión</button>
          <button v-on:click="register()" class="btn btn:focus btn:hover z-depth-1a my-2 my-sm-0" type="submit">Registrarse</button>
        </form>
      </div>
    </nav>
      <div class="jumbotron fixed">
        <div class="container">
          <h-1 class="display-3">Bienvenidos</h-1>
          <p  align="justify">
          MicroSleep es un proyecto académico desarrollado por estudiantes de la Universidad Sergio Arboleda que buscan disminuir la tasa 
          de accidentalidad vehicular en eventos de microsueño. El dispositivo tipo manilla brinda acompañamiento 
          a conductor alertándolo de posible fatiga mientras este conduce. La acción de la manilla es realizar 
          vibraciones y sonidos eficientes para hacerle entender al usuario que está en peligro.
          </p>
          <p><a class="btn btn:focus btn-primary btn-lg" v-on:click="register()" role="button">Conecta con nosotros &raquo;</a></p>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-4 style">
            <h-2>Conductores</h-2>
            <p  align="justify">Identificar los consumidores de potencial dependencia a medicamentos de acuerdo a su
            comportamiento al volante.</p>
          </div>
          <div class="col-md-4 style">
            <h-2>Concecionarios</h-2>
            <p  align="justify">Centro de análisis o soporte para la fabricación, diseño e implementación de alternativas
            en los vehiculos.</p>
          </div>
          <div class="col-md-4 style">
            <h-2>Sector Movilidad</h-2>
            <p  align="justify">Disminuir las cifras de accidentalidad como consecuencia del 
            sueño repentido debido a gran carga laboral.</p>
          </div>
        </div>
        <hr>
      </div>
    <footer class="container fixed-center">
      <p>&copy; Company 2020-2021</p>
    </footer>
  </div>
</template>

<script>
    export default {
        name: 'singin',
        data(){
            return{
                mensaje: 'Inicia Sesión',
                email: null,
                clave: null,
                typ: 0
            }
        },
        methods:{
            singin(){
                this.$router.push({ path: '/singin' })
            },
            register(){
                this.$router.push({ path: '/register' })
            },
            home(){
                this.$router.push({ path: '/' })
            },
            about(){
                this.$router.push({ path: '/about' })
            },
            products(){
                this.$router.push({ path: '/products' })
            }
        },
        mounted(){
           (function(d, m){
            var kommunicateSettings = 
            {"appId":"55ab2579f37f74348eb7edbed70992c7","popupWidget":true,"automaticChatOpenOnNavigation":true};
            var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
            s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
            var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
            window.kommunicate = m; m._globals = kommunicateSettings;
        })(document, window.kommunicate || {});
        }
    }
</script>
<style>
    .navbar .style{
      color: #ffffff; font-family: 'Lato', sans-serif; font-size: 30px; font-weight: 300; line-height: 10px; margin: 3 3 10px;
    }
    .form-inline .z-depth-1a {
        border: none;
        color: #f1f1f1;
        background-color: #0045c5; }

    .form-label-group .z-depth-1-half,
    .form-inline .btn:hover {
    -webkit-box-shadow: 0 5px 11px 0 rgba(85, 182, 255, 0.28), 0 4px 15px 0 rgba(36, 133, 255, 0.15);
    box-shadow: 0 5px 11px 0 rgba(85, 182, 255, 0.28), 0 4px 15px 0 rgba(36, 133, 255, 0.15); }
    .form-inline .btn:focus {
    background-color:#ffffff;   
    color: #575757;
    }
    h-2{
      color: #061555; font-family: 'Droid serif', serif; font-size: 36px; font-weight: 400; font-style: italic; line-height: 30px; margin: 0 0 4px; text-align: center; 
    }
    h-1{
      font-size: 30px; letter-spacing: -1px; color: #2c3e50; text-transform: uppercase; text-shadow: 1px 1px 0 #000; margin: 0 0 0; text-align: center; line-height: 50px;
    }
</style>