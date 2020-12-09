<template>
    <div id = "register-center">
    <body class="text-center">
        <div class="row">
            <div class="col"></div>
            <div class="col">
            <div class="text-center mb-4">
                <img class="mb-4" src="../assets/logouvertical.png" alt="" width="250" height="150">
                <h1 class="h3 mb-3 font-weight-normal">{{mensaje}}</h1>
            </div>
            <div class="form-label-group">
                <input v-model="email" type="email" class="form-control z-depth-1a " id="mail" aria-describedby="emailHelp" placeholder="Correo Electrónico">
            </div>
            <div class="form-label-group">
                <input v-model="clave" type="password" class="form-control z-depth-1a " id="clave" placeholder="Contraseña">
            </div>
            <div class="form-label-group">
                <input v-model="clave1" type="password" class="form-control z-depth-1a " id="clave1" placeholder="Confirmar Contraseña">
            </div>
            <h2></h2>
            <div class="btn-group mb-3">
                <button v-on:click="ROL(1)" type="button" class="btn btn-secondary z-depth-1a ">Usuario</button>
                <button v-on:click="ROL(2)" type="button" class="btn btn-secondary z-depth-1a ">Administrador</button>
            </div>
            <label></label>
            <div class="checkbox mb-5">
                <button v-on:click="register()" class="btn btn-lg btn-primary btn-block z-depth-1a depth-1a">Registrar Cuenta</button>
                <router-link to="/singin">¿Ya tienes cuenta? Inicar Sesión</router-link>
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
        name: 'register',
        data(){
            return{
                mensaje: 'Crear Cuenta',
                email: null,
                clave: null,
                clave1: null,
                rol: -1
            }
        },
        methods:{
            register(){
                if (this.rol == -1){
                    alert("No has asignado un rol.")
                    return
                }
                if (this.clave == this.clave1)
                {
                    let post = {
                    correo: this.email,
                    clave: this.clave,
                    rol: this.rol
                    };
                    axios.post("http://deployversion-env.eba-vephy4cj.sa-east-1.elasticbeanstalk.com/api/register/", post).then((result) => {
                        console.log(result.data);
                        
                        if(result.data.message == 0){
                            localStorage.setItem('token',JSON.stringify(result.data.token));
                            localStorage.setItem('account_rol',JSON.stringify(this.rol))
                            localStorage.setItem('account_id',JSON.stringify(result.data.id_account))
                            localStorage.setItem('account_mail',JSON.stringify(this.email))
                            this.$router.push({path: '/fillAccount'});
                            alert("Registro Exitoso.")
                        }
                        alert("Registro Fallido, intentelo de nuevo.")
                    });
                }else{
                    alert("Las contraseñas no coinciden")
                }                
            },
            ROL(x){
                this.rol = x
            }
        }
    }
</script>

<style>
#register-center {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 80px;
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
    .btn-group {
        font-size: 13px;
        color:green;
        background-color: #4CAF50;
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
        margin-bottom: -1px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }
    .form-signin input[type="password1"] {
        margin-bottom: 13px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }
    .form-label-group .z-depth-1a {
    -webkit-box-shadow: 0 2px 5px 0 rgba(55, 161, 255, 0.26), 0 4px 12px 0 rgba(121, 155, 254, 0.25);
    box-shadow: 0 2px 5px 0 rgba(55, 161, 255, 0.26), 0 4px 12px 0 rgba(121, 155, 254, 0.25); }
    .btn-group .z-depth-1a {
        border: none;
        background-color: #008CBA;
    -webkit-box-shadow: 0 2px 5px 0 rgba(55, 161, 255, 0.26), 0 4px 12px 0 rgba(121, 155, 254, 0.25);
    box-shadow: 0 2px 5px 0 rgba(55, 161, 255, 0.26), 0 4px 12px 0 rgba(121, 155, 254, 0.25); }
    .form-label-group .z-depth-1-half,
    .form-label-group .btn:hover {
    -webkit-box-shadow: 0 5px 11px 0 rgba(85, 182, 255, 0.28), 0 4px 15px 0 rgba(36, 133, 255, 0.15);
    box-shadow: 0 5px 11px 0 rgba(85, 182, 255, 0.28), 0 4px 15px 0 rgba(36, 133, 255, 0.15); }
</style>