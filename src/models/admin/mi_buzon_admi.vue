<template>
    <div class="text-center">
        <div class="container">
            <div class="py text-center">
                <h2 align="left">Solicitudes y respuestas</h2>
                <p class="lead" align="justify">
                    Aquí puedes ver las solicitudes realizadas como compras, quejas y sugerencias. Asi mismo, 
                    visualizar respuestas de parte de proveedores o quien haya sido requerido en la solicitud.
                </p>
            </div>

            <h2 align="left">Bandeja de solicitudes</h2>

            <div v-if="solicitud==null">
                <div class="text-center">
                    <p class="lead" align="justify">
                        Nota: No se solicitudes realizadas por este usuario. 
                    </p>
                </div>
            </div>
            <div v-else>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Fecha</th>
                            <th scope="col">Asunto</th>
                            <th scope="col">Mensaje</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="solicitud in solicitudes" v-bind:key="solicitud.id">
                            <th scope="row">{{solicitud.fecha}}
                            <th>{{solicitud.asunto}}</th>
                            <th>{{solicitud.mensaje}}</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div> 
        <h1></h1>
        <footer class="container fixed-center">
            <p>&copy; Company 2020-2021</p>
        </footer> 
    </div>
</template>

<script>
    export default {
        name: 'mis_manillas',
        data(){
            return{
                solicitud:null,
                respuesta:null
            }
        }
    }
</script>