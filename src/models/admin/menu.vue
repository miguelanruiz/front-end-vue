<template>
    <div class="container-fluid">
        <div class="row">
            <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                <div class="sidebar-sticky pt-3">   
                    
                    <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                    <span>Administrar mi cuenta</span>
                    <a class="d-flex align-items-center text-muted" href="#" aria-label="Add a new report">
                        <span data-feather="plus-circle"></span>
                    </a>
                    </h6>
                    <ul class="nav flex-column mb-2">
                    <li class="nav-item">
                        <a class="nav-link" v-on:click="mis_usuarios()">
                        <span data-feather="file-text"></span>
                        Mis usuarios
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" v-on:click="mi_buzon()">
                        <span data-feather="layers"></span>
                        Mi buzón
                        </a>
                    </li>
                    </ul>
                    <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                    <span>Informes de usuarios</span>
                    <a class="d-flex align-items-center text-muted" href="#" aria-label="Add a new report">
                        <span data-feather="plus-circle"></span>
                    </a>
                    </h6>
                    <ul class="nav flex-column mb-2">
                    <li class="nav-item">
                        <a class="nav-link" v-on:click="estadistica()">
                        <span data-feather="file-text"></span>
                        Estadistica
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" v-on:click="ubicacion()">
                        <span data-feather="file-text"></span>
                        Ubicación
                        </a>
                    </li>
                    </ul>
                    <ul class="nav flex-column">
                    <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                        <span>Cuenta</span>
                        <a class="d-flex align-items-center text-muted" href="#" aria-label="Add a new report">
                            <span data-feather="plus-circle"></span>
                        </a>
                    </h6>
                    <li class="nav-item">
                        <a class="nav-link" v-on:click="configuracion()">
                        <span data-feather="bar-chart-2"></span>
                        Configuración
                        </a>
                    </li>
                    </ul>
                </div>
            </nav>

            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 class="h2">{{title}}</h1>
                </div> 

                <div v-if="info === 4">
                    <div class="text-center">
                        <Statistics/>
                    </div>
                </div>
                <div v-else-if="info === 1">
                    <div class="text-center">
                        <Mis_usuarios/>
                    </div>
                </div>
                <div v-else-if="info === 5">
                    <div>
                        <Location/>
                    </div>
                </div>
                <div v-else-if="info === 2">
                    <div class="text-center">
                        <Mi_buzon/>
                    </div>
                </div>
                <div v-else-if="info === 7">
                    <div class="text-center">
                        <Update/>
                    </div>
                </div>
                 
            </main>
        </div>
    </div>
</template>

<script>

    import Statistics from '@/models/admin/estatistics.vue'
    import Mis_usuarios from '@/models/admin/admi_users.vue'
    import Location from '@/views/Location.vue'
    import Mi_buzon from '@/models/admin/mi_buzon_admi.vue'
    import Update from '@/views/configuracion.vue'

    export default {
        name: 'menu',
        components: {
          Statistics,
          Mis_usuarios,
          Location,
          Mi_buzon,
          Update
        },
        data(){
            return{
                title: 'Mis usuarios',
                info: 1,
            }
        },
        methods:{
            mis_usuarios(){
                this.title= 'Mis usuarios';
                this.info=1;
            },
            mi_buzon(){
                this.title= 'Mi buzón';
                this.info=2;
            },
            estadistica(){
                this.title= 'Estadistica';
                this.info=4; 
            },
            ubicacion(){
                this.title= 'Ubicación';
                this.info=5;                
            }, 
            configuracion(){
                this.title= 'Configuracion';
                this.info=7;
            }
        }
    }
</script>

<style>
body {
  font-size: .875rem;
}

.feather {
  width: 16px;
  height: 16px;
  vertical-align: text-bottom;
}

/*
 * Sidebar
 */

.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100; /* Behind the navbar */
  padding: 48px 0 0; /* Height of navbar */
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
}

@media (max-width: 767.98px) {
  .sidebar {
    top: 5rem;
  }
}

.sidebar-sticky {
  position: relative;
  top: 0;
  height: calc(100vh - 48px);
  padding-top: .5rem;
  overflow-x: hidden;
  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
}

@supports ((position: -webkit-sticky) or (position: sticky)) {
  .sidebar-sticky {
    position: -webkit-sticky;
    position: sticky;
  }
}

.sidebar .nav-link {
  font-weight: 500;
  color: #333;
}

.sidebar .nav-link .feather {
  margin-right: 4px;
  color: #999;
}

.sidebar .nav-link.active {
  color: #007bff;
}

.sidebar .nav-link:hover .feather,
.sidebar .nav-link.active .feather {
  color: inherit;
}

.sidebar-heading {
  font-size: .75rem;
  text-transform: uppercase;
}

/*
 * Navbar
 */

.navbar-brand {
  padding-top: .75rem;
  padding-bottom: .75rem;
  font-size: 1rem;
  background-color: rgba(0, 0, 0, .25);
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25);
}

.navbar .navbar-toggler {
  top: .25rem;
  right: 1rem;
}

.navbar .form-control {
  padding: .75rem 1rem;
  border-width: 0;
  border-radius: 0;
}

.form-control-dark {
  color: #fff;
  background-color: rgba(255, 255, 255, .1);
  border-color: rgba(255, 255, 255, .1);
}

.form-control-dark:focus {
  border-color: transparent;
  box-shadow: 0 0 0 3px rgba(255, 255, 255, .25);
}
</style>
