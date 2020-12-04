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
                        <a class="nav-link" v-on:click="home()">Inicio <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"  v-on:click="about()">Quiénes somos <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" v-on:click="products()">Productos<span class="sr-only">(current)</span></a>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <button v-on:click="singin()" class="btn btn-outline-success btn:hover z-depth-1a my-2 my-sm-0" type="submit">Iniciar Sesión</button>
                    <button v-on:click="register()" class="btn btn-outline-success btn:hover z-depth-1a my-2 my-sm-0" type="submit">Registrarse</button>
                </form>
            </div>
        </nav>

        <main>
            <div class="container marketing" id="titulo">
                <div class="row featurette">
                    <div class="col-md-7" id="centrar">
                        <h2 class="featurette-heading">Somos un grupo. <span class="text-muted">De 4 prácticantes.</span></h2>
                        <p class="lead" align="justify">
                        Que buscan una solución para prevenir lapsos de microsueño en conductores usando ingeniería en el diseño de un dispositivo 
                        con un sensor de plestimografía y antena para comunicación WIFI.
                        </p>
                    </div>
                    <div class="col-md-5">
                        <img src="../assets/d_bloques.png" width="300" height="350" class="rounded float-left" alt="...">
                    </div>
                </div>
                <hr class="featurette-divider">
                <div class="row featurette">
                    <div class="col-md-7 order-md-2" id="centrar">
                        <h2 class="featurette-heading">Apoyados en la Academia. <span class="text-muted">Buscamos fortalecer nuestras habilidades.</span></h2>
                        <p class="lead" align="justify">
                            Desarrollando y planificando un producto desde la etapa de evaluación de proyecto hasta desarrollo de plataforma para interacción
                            entre usuario y desarrolladores.  
                        </p>
                    </div>
                    <div class="col-md-5 order-md-1">
                        <img src="../assets/pcb_gray.png" width="380" height="380" class="rounded float-left" alt="...">
                    </div>
                </div>
                <hr class="featurette-divider">
                <div class="row featurette">
                    <div class="col-md-7" id="centrar">
                        <h2 class="featurette-heading">Microsleep <span class="text-muted">garantiza tu seguridad.</span></h2>
                        <p class="lead" align="justify">
                        Mientras estas conduciendo este producto te permite que siempre estés 100% enfocado en lo que sucede a tu 
                        alrededor, no te arrepentirás. Aquiere tu manilla a bajo costo.</p>
                        <p><a class="btn btn-secondary" href="/products" role="button">Ver Productos &raquo;</a></p>
                    </div>
                    <div class="col-md-5">
                        <img src="../assets/manilla.png" width="500" height="400" class="rounded float-left" alt="...">
                    </div>
                </div>
                <hr class="featurette-divider">
            </div>
            <footer class="container fixed-center">
                <p>&copy; Company 2020-2021</p>
            </footer>
        </main>
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
        }
    }
</script>

<style>
#centrar {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 120px;
}
#titulo {
  margin-top: 30px;
}
.navbar .style{
      color: #ffffff; font-family: 'Lato', sans-serif; font-size: 30px; font-weight: 300; line-height: 10px; margin: 3 3 10px;
    }
    .form-inline .z-depth-1a {
        border: none;
        color: #f1f1f1;
        background-color: #0045c5; }
</style>