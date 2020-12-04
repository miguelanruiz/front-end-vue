<template>
    <div class="text-center">
        <div class="container">
            <div class="py text-center">
                <h2 align="left">Administrar</h2>
                <p class="lead" align="justify">
                    Aquí puedes registrar nuevos vehiculos o retirarlos. Es indispensable conocer la placa del vehiculo 
                    para poder retirarlo. En caso de no poder visualizarlo en la tabla de vehiculos comuniquese con 
                    servicio técnico. 
                </p>
            </div>

            <h2 align="left">Tabla de vehiculos existentes</h2>

            <div v-if="users==null">
                <div class="text-center">
                    <p class="lead" align="justify">
                        Nota: No se encontraron vehiculos agregados a este usuario. 
                    </p>
                </div>
            </div>
            <div v-else>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Placa</th>
                            <th scope="col">Marca</th>
                            <th scope="col">Modelo</th>
                            <th scope="col">Color</th>
                            <th scope="col">Año</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="user in users" v-bind:key="user.id">
                            <th scope="row">{{user.usuario}}
                            <th>{{user.id_vehiculo}}</th>
                            <th>{{user.marca}}</th>
                            <th>{{user.modelo}}</th>
                            <th>{{user.color}}</th>
                            <th>{{user.year}}</th>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="input-group">
                <button class="btn btn-outline-secondary" v-on:click="botton_agregar()" type="button">Eliminar vehiculo</button>
                <button class="btn btn-outline-secondary" v-on:click="botton_eliminar()" type="button">Agregar vehiculo</button>
            </div>
            <h1></h1>
            <div v-if="action==1">
                <div class="row">
                    <div class="col">
                        <h4 class="mb-3">Datos de vehiculo a ingresar</h4>
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                    <label for="firstName">Marca (*)</label>
                                    <input v-model="marca" type="text" class="form-control" id="nombres" placeholder="Ejemplo: VW">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="lastName">Modelo (*)</label>
                                <input v-model="modelo" type="text" class="form-control" id="apellidos" placeholder="Ejemplo: GTI">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label for="firstName">Color (*)</label>
                                <input v-model="color" type="text" class="form-control" id="edad" placeholder="Ejemplo: AZUL">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="lastName">Año (*)</label>
                                <input v-model="year" type="text" class="form-control" id="telefono" placeholder="Ejemplo: 2001">
                            </div>
                        </div>
                        <div class="input-group">
                            <input type="text" v-model="id_vehiculo" class="form-control" aria-label="Text input with dropdown button" placeholder="Placa de vehiculo - Ejemplo: 123ABC">
                            <button class="btn btn-outline-secondary" v-on:click="agregar()" type="button">Agregar vehiculo</button>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else-if="action==2">
                <div class="input-group">
                    <input type="text" v-model="id_vehiculo" class="form-control" aria-label="Text input with dropdown button" placeholder="Placa de vehiculo - Ejemplo: 123ABC">
                    <button class="btn btn-outline-secondary" v-on:click="eliminar()" type="button">Eliminar vehiculo</button>
                </div>
            </div>
        </div> 
        <h1></h1>
        <footer class="container fixed-center">
            <p>&copy; Company 2020-2021</p>
        </footer> 
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'mis_manillas',
        data(){
            return{
                action: 0,
                users:null,
                marca:null,
                modelo:null,
                color:null,
                id_vehiculo:null,
                year:null
            }
        },
        created: function(){
            if(localStorage.getItem('token') == null){
              alert("Usted no se encuentra logueado.");
              this.$router.push({path: '/'});
            }
            axios.get('http://deployversion-env.eba-vephy4cj.sa-east-1.elasticbeanstalk.com/api/tools/bracelet/report/vehicles/'+JSON.parse(localStorage.getItem('account_id')),{
                headers: {
                    'authorization': JSON.parse(localStorage.getItem('token')),
                }
                }).then(res => {
                    console.log(res.data)
                    this.users = res.data
                    //tools/create/bracelet/
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
        },
        methods:{
            botton_eliminar(){
                this.action=1;
            },
            botton_agregar(){
                this.action=2;
            },
            agregar(){
                let post = {
                    id_vehiculo:this.id_vehiculo,
                    marca:this.marca,
                    modelo:this.modelo,
                    color:this.color,
                    year:this.year,
                    user: JSON.parse(localStorage.getItem('account_id'))
                }
                axios.post('http://deployversion-env.eba-vephy4cj.sa-east-1.elasticbeanstalk.com/api/tools/create/vehicle/',post,{
                headers: {
                    'authorization': JSON.parse(localStorage.getItem('token')),
                }
                }).then(res => {
                    alert(res.message)
                    //tools/create/bracelet/
                })
            },
            eliminar(){
                let post = {
                    id_vehiculo:this.id_vehiculo,
                    user: JSON.parse(localStorage.getItem('account_id'))
                }
                axios.post('http://deployversion-env.eba-vephy4cj.sa-east-1.elasticbeanstalk.com/api/tools/delete/vehicle/',post,{
                headers: {
                    'authorization': JSON.parse(localStorage.getItem('token')),
                }
                }).then(res => {
                    console.log(res)
                    alert(res.message)
                    //tools/create/bracelet/
                })
            }

        }
    }
</script>