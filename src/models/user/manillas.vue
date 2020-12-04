<template>
    <div class="text-center">
        <div class="container">
            <div class="py text-center">
                <h2 align="left">Administrar</h2>
                <p class="lead" align="justify">
                    Aquí puedes registrar nuevas manillas o retirarlas. Es indispensable conocer el id del producto.
                    En caso de no conocerlo comuniquese con su proveedor. 
                </p>
            </div>

            <h2 align="left">Tabla de manillas existentes</h2>

            <div v-if="users==null">
                <div class="text-center">
                    <p class="lead" align="justify">
                        Nota: No se encontraron manillas agregadas a este usuario. 
                    </p>
                </div>
            </div>
            <div v-else>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Modelo</th>
                            <th scope="col">Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="user in users" v-bind:key="user.id">
                            <th scope="row">{{user.id_manilla}}
                            <th>{{user.modelo}}</th>
                            <th>{{user.color}}</th>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="input-group">
                <button class="btn btn-outline-secondary" v-on:click="botton_agregar()" type="button">Eliminar Manilla</button>
                <button class="btn btn-outline-secondary" v-on:click="botton_eliminar()" type="button">Agregar Manilla</button>
            </div>
            <h1></h1>
            <div v-if="action==1">
                <div class="row">
                    <div class="col">
                        <h4 class="mb-3">Datos de manilla a ingresar</h4>
                        <div class="row">
                            <div class="col-md">
                                <label for="country">Modelo</label>
                                <select v-model="modelo" class="custom-select d-block w-100" id="country" required>
                                    <option value="">Selecionar...</option>
                                        <option value="1.0.0">1.0.0</option>
                                        <option value="1.0.1">1.0.1</option>
                                        <option value="2.0.0">2.0.0</option>
                                        <option value="2.0.1">2.0.1</option>
                                </select>
                            </div>

                            <div class="col-md">
                                <label for="country">Color</label>
                                <select v-model="color" class="custom-select d-block w-100" id="country" required>
                                    <option value="">Selecionar...</option>
                                        <option value="Verde">Verde</option>
                                        <option value="Roja">Roja</option>
                                        <option value="Azul">Azul</option>
                                        <option value="Negro">Negro</option>
                                </select>
                            </div>
                        </div>
                        <h1></h1>
                        <div class="input-group">
                            <input type="text" class="form-control" v-model="id_manilla" aria-label="Text input with dropdown button" placeholder="Id de manilla">
                            <button class="btn btn-outline-secondary" v-on:click="agregar()" type="button">Agregar Manilla</button>
                        </div>

                    </div>
                </div>
            </div>
            <div v-else-if="action==2">
                <div class="input-group">
                    <input type="text" class="form-control" v-model="id_manilla" aria-label="Text input with dropdown button" placeholder="Id de manilla">
                    <button class="btn btn-outline-secondary" v-on:click="eliminar()" type="button">Eliminar Manilla</button>
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
                id_manilla:null,
                modelo:null,
                color:null
            }
        },
        created: function(){
            if(localStorage.getItem('token') == null){
              alert("Usted no se encuentra logueado.");
              this.$router.push({path: '/'});
            }
            axios.get('http://deployversion-env.eba-vephy4cj.sa-east-1.elasticbeanstalk.com/api/tools/bracelet/report/quantity/'+JSON.parse(localStorage.getItem('account_id')),{
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
                alert("agregando")
                let post = {
                    id_manilla:this.id_manilla,
                    modelo: this.modelo,
                    color: this.color,
                    user: JSON.parse(localStorage.getItem('account_id'))
                }
                axios.post('http://deployversion-env.eba-vephy4cj.sa-east-1.elasticbeanstalk.com/api/tools/create/bracelet/',post,{
                headers: {
                    'authorization': JSON.parse(localStorage.getItem('token')),
                }
                }).then(res => {
                    if(localStorage.getItem('requests') == null){
                        var service = []
                        service.push({
                            fecha : new Date(),
                            asunto : 'Manilla Generacion:'+this.modelo+' solicitada.',
                            mensaje : 'Manilla: '+this.id_manilla+' de color: '+this.color+' en proceso de adquisicion.'
                        })
                        localStorage.setItem('requests',JSON.stringify(service));
                    }
                    else{
                        var serviceP = serviceP.push(JSON.parse(localStorage.getItem('requests')))
                        serviceP.push({
                            fecha : new Date(),
                            asunto : 'Manilla Generacion:'+this.modelo+' solicitada.',
                            mensaje : 'Manilla: '+this.id_manilla+' de color: '+this.color+' en proceso de adquisicion.'
                        })
                        localStorage.setItem('requests',JSON.stringify(serviceP));
                    }
                    alert(res.message)
                    //tools/create/bracelet/
                })
            },
            eliminar(){
                ///tools/delete/bracelet/
                /*let post = {
                    id_vehiculo: this.id_manilla
                }*/
                let post = {
                    id_manilla:this.id_manilla,
                    modelo: this.modelo,
                    color: this.color,
                    user: JSON.parse(localStorage.getItem('account_id'))
                }
                axios.post('http://deployversion-env.eba-vephy4cj.sa-east-1.elasticbeanstalk.com/api/tools/delete/bracelet/',post,{
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