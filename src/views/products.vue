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
                        <a class="nav-link" v-on:click="about()" >Quiénes somos <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" v-on:click="products()" >Productos<span class="sr-only">(current)</span></a>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <button v-on:click="singin()" class="btn btn-outline-success btn:hover z-depth-1a my-2 my-sm-0" type="submit">Iniciar Sesión</button>
                    <button v-on:click="register()" class="btn btn-outline-success btn:hover z-depth-1a my-2 my-sm-0" type="submit">Registrarse</button>
                </form>
            </div>
        </nav>

        <main>

            <div class="position-relative overflow-hidden p-3 p-md-3 m-md-3 text-center bg-light">
                <div class="col-md-5 p-lg-4 mx-auto">
                    <h1 class="display-4">Microsleep 1.0</h1>
                    <p class="lead">
                        Actualmente contamos con la primera versión de una manilla capaz de detectar microsueño
                        en conductores para prevenir accidentes automovilisticos.
                    </p>
                </div>
            </div>

            <div class="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
                <div class="bg-primary mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                    <div class="my-3 py-3">
                        <h2 class="display-5">Consumo</h2>
                        <p class="lead">Mas de 80 horas de consumo continuo.</p>
                    </div>
                    <div class="bg-light shadow-sm mx-auto" style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;">
                        <img src="../assets/pcb_total.png" height="300" class="rounded float-center" alt="...">                    
                    </div>
                </div>
                <div class="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                    <div class="my-3 py-3">
                        <h2 class="display-5">Reacción</h2>
                        <p class="lead">Combinación entre sonido y vibración te mantendrá alerta.</p>
                    </div>
                    <div class="bg-light shadow-sm mx-auto" style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;">
                        <img src="../assets/manilla_bottom1.jpg" width="450" height="300" class="rounded float-left" alt="...">                    
                    </div>
                </div>
            </div>

            <div class="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
                <div class="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                    <div class="my-3 py-3">
                        <h2 class="display-5">Empresarial</h2>
                        <p class="lead">Puedes conectar a tus empleados y proteger su integridad.</p>
                    </div>
                    <div class="bg-light shadow-sm mx-auto" style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;">
                        <img src="../assets/manilla_bottom.jpg" width="450" height="300" class="rounded float-left" alt="...">                    
                    </div>
                </div>
                <div class="bg-primary mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                    <div class="my-3 py-3">
                        <h2 class="display-5">Estadística</h2>
                        <p class="lead">Te brinda datos relacionados a comportamiento al volante.</p>
                    </div>
                    <div class="bg-light shadow-sm mx-auto" style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;">
                        <img src="../assets/manilla_up.jpg" height="300" class="rounded float-left" alt="...">                    
                    </div>
                </div>
            </div>

            <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                <div class="col-md-5 p-lg-3 mx-auto my-5">
                    <h1 class="display-4 font-weight-normal">Aquiere el producto</h1>
                    <p class="lead font-weight-normal" align="justify">
                        LLena la siguiente información para que uno de nuestros asesores te brinde información
                        detallada para adquirir el producto.
                    </p>
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label for="firstName">Nombres (*)</label>
                            <input v-model="nombres" type="text" class="form-control" id="nombres" placeholder="Ejemplo: Pepito">
                        </div>
                        <div class="col-md-6 mb-3">
                            <label for="lastName">Apellidos (*)</label>
                            <input v-model="apellidos" type="text" class="form-control" id="apellidos" placeholder="Ejemplo: Perez">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label for="cantidad">Cantidad (*)</label>
                            <input v-model="cantidad" type="text" class="form-control" id="cantidad" placeholder="Ejemplo: 2">
                        </div>
                        <div class="col-md">
                            <label for="color">Color</label>
                            <select v-model="color" class="custom-select d-block w-100" id="color" required>
                                <option value="">Selecionar...</option>
                                    <option value="Verde">Verde</option>
                                    <option value="Roja">Roja</option>
                                    <option value="Azul">Azul</option>
                                    <option value="Negro">Negro</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label for="email">Correo Electrónico (*)</label>
                        <input v-model="email" type="text" class="form-control" id="email" placeholder="Ejemplo: correo@ejemplo.com">
                    </div>
                    <div class="my-3">
                        <a class="btn btn-outline-secondary" v-on:click="solicitud()" >Solicitar producto</a>
                    </div>
                </div>
                <div class="product-device shadow-sm d-none d-md-block"></div>
                <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
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
                mensaje: null,
                nombres: null,
                apellidos: null,
                cantidad: null,
                color: null,
                email: null
            }
        },
        methods:{
            singin(){
                this.$router.push({ path: '/singin' })
            },
            register(){
                this.$router.push({ path: '/register' })
            },
            solicitud(){
                alert("Solicitud enviada: Dentro de poco nos contactaremos contigo.")
                /*let post = {
                    nombre: this.nombres,
                    apellido: this.apellidos,
                    email: this.email,
                    cantidad: this.cantidad,
                    color: this.color
                }
                alert(mensaje) //poner mensaje de si se hizo o no la solicitud
                */
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
.container {
  max-width: 960px;
}

/*
 * Custom translucent site header
 */

.site-header {
  background-color: rgba(0, 0, 0, .85);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  backdrop-filter: saturate(180%) blur(20px);
}
.site-header a {
  color: #999;
  transition: ease-in-out color .15s;
}
.site-header a:hover {
  color: #fff;
  text-decoration: none;
}

/*
 * Dummy devices (replace them with your own or something else entirely!)
 */

.product-device {
  position: absolute;
  right: 10%;
  bottom: -30%;
  width: 300px;
  height: 540px;
  background-color: #333;
  border-radius: 21px;
  -webkit-transform: rotate(30deg);
  transform: rotate(30deg);
}

.product-device::before {
  position: absolute;
  top: 10%;
  right: 10px;
  bottom: 10%;
  left: 10px;
  content: "";
  background-color: rgba(255, 255, 255, .1);
  border-radius: 5px;
}

.product-device-2 {
  top: -25%;
  right: auto;
  bottom: 0;
  left: 5%;
  background-color: #e5e5e5;
}


/*
 * Extra utilities
 */

.flex-equal > * {
  -ms-flex: 1;
  flex: 1;
}
@media (min-width: 768px) {
  .flex-md-equal > * {
    -ms-flex: 1;
    flex: 1;
  }
}
.navbar .style{
      color: #ffffff; font-family: 'Lato', sans-serif; font-size: 30px; font-weight: 300; line-height: 10px; margin: 3 3 10px;
    }
    .form-inline .z-depth-1a {
        border: none;
        color: #f1f1f1;
        background-color: #0045c5; }

.overflow-hidden { overflow: hidden; }
</style>