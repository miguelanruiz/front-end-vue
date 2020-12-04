<template>
    <div class="text-center">
        <div class="input-group">
            <input type="text" class="form-control" aria-label="Text input with dropdown button" placeholder="Correo Electrónico">
            <button class="btn btn-outline-secondary" type="button">Agregar Usuario</button>
        </div>
        <div class="containers">
    <h1>Nombre</h1>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">Telefono</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="user in users" v-bind:key="user.id">
                <th scope ="row">{{user.nombre}}
                <th>{{user.apellido}}</th>
                <th>{{user.telefono}}</th>
            </tr>
        </tbody>
    </table>
    </div>
    </div> 
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'mis_usuarios',
        data(){
            return{
                users: null,
                n_user: null,
                name: null,
                rol: null,
                id: null
            }
        },
        created: function(){
            if(localStorage.getItem('token') == null){
              alert("Usted no se encuentra logueado.");
              this.$router.push({path: '/'});
            }
            axios.get('http://deployversion-env.eba-vephy4cj.sa-east-1.elasticbeanstalk.com/api/tools/bracelet/report/admin/'+"5fc7f8d153696c45e86cd78c",{
                headers: {
                    'authorization': JSON.parse(localStorage.getItem('token')),
                }
                }).then(res => {
                    console.log(res.data)
                    this.users = res.data
                /*var payload = res.data
                var resultData = {}
                for(var i = 0; i < payload.length; i++){
                    resultData[i] = payload[i].nombre
                    if(i+1 == payload.length){
                      this.dataChart = resultData
                      console.log(this.dataChart)
                    }
                }*/
            })
        }
}
</script>

<style>
    h1{
        margin-bottom: 5%;
    }
    h2{
        margin-bottom: 5%;
    }
</style>
