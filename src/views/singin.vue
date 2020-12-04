<template>
    <div id = "singin-center">
    <body class="text-center">
        <div class="row">
            <div class="col"></div>
            <div class="col">
                <div class="container">
                    <div class="text-center mb-4">
                        <img class="mb-2" src="../assets/logouvertical.png" alt="" width="353" height="225">
                        <h1 class="h3 mb-3 font-weight-normal">{{mensaje}}</h1>
                    </div>
                    <div class="form-label-group">
                        <input v-model="email" type="email" class="form-control z-depth-1a" id="mail" aria-describedby="emailHelp" placeholder="Correo Electrónico">
                    </div>
                    <div class="form-label-group">
                        <input v-model="clave" type="password" class="form-control z-depth-1a" id="clave" placeholder="Contraseña">
                    </div>
                    <div>
                    </div>
                    <div class="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me"> Recordar datos
                        </label>
                        <button v-on:click="login()" class="btn btn-lg btn-primary btn-block z-depth-1a btn:hover">Siguiente</button>
                        <router-link to="/register">¿No tienes cuenta? Registrate</router-link>
                    </div>
                </div>
                </div>
            <div class="col"></div>
        </div>
    </body>
    </div>
</template>

<script>
    import axios from 'axios'


    export default {
        name: 'singin',
        data(){
            return{
                mensaje: 'Inicia Sesión',
                email: null,
                clave: null,
                url: "http://deployversion-env.eba-vephy4cj.sa-east-1.elasticbeanstalk.com/api/login/"
            }
        },
        methods:{
            login(){
                var post = {
                    correo: this.email,
                    clave: this.clave
                };   
                axios.post("http://deployversion-env.eba-vephy4cj.sa-east-1.elasticbeanstalk.com/api/login/", post).then((result) => {
                    if (result.data.messageOut == 0){
                        localStorage.setItem('token',JSON.stringify(result.data.token));
                        localStorage.setItem('account_rol',JSON.stringify(result.data.rol));
                        localStorage.setItem('account_name',JSON.stringify(result.data.user));
                        localStorage.setItem('account_id',JSON.stringify(result.data.id))
                        localStorage.setItem('account_mail',JSON.stringify(result.data.mail))
                        console.log(result.data)
                        this.$router.push({path: '/Users'});
                    }
                    else{
                        alert("Datos incorrectos o usuario inexistente.")
                        console.log(result.data)
                        return
                    }
                })
            }
        }
    }
</script>

<style>
#singin-center {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 70px;
}
    .body-text-center{
        height: 100%;
    }
    .body-text-center{  
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
        padding-top: 40px;
        padding-bottom: 40px;
        background-color: #f5f5f5;
    }
    .form-signin {
        width: 100%;
        max-width: 330px;
        padding: 15px;
        margin: auto;   
    }
    .form-signin .checkbox {
        font-weight: 400;
    }
    .form-signin .form-control {
        position: relative;
        box-sizing: border-box;
        height: auto;
        padding: 10px;
        font-size: 16px;
    }
    .form-signin .form-control:focus {
        z-index: 2;
    }
    .form-signin input[type="email"] {
        margin-bottom: -1px;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
    }
    .form-signin input[type="password"] {
        margin-bottom: 13px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }
    .container .z-depth-1a {
    -webkit-box-shadow: 0 2px 5px 0 rgba(55, 161, 255, 0.26), 0 4px 12px 0 rgba(121, 155, 254, 0.25);
    box-shadow: 0 2px 5px 0 rgba(55, 161, 255, 0.26), 0 4px 12px 0 rgba(121, 155, 254, 0.25); }

    .container .z-depth-1-half,
    .container .btn:hover {
    -webkit-box-shadow: 0 5px 11px 0 rgba(85, 182, 255, 0.28), 0 4px 15px 0 rgba(36, 133, 255, 0.15);
    box-shadow: 0 5px 11px 0 rgba(85, 182, 255, 0.28), 0 4px 15px 0 rgba(36, 133, 255, 0.15); }
</style>