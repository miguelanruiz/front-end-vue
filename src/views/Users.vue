<template>
  <body>
    <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <a class="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#">{{n_user}}</a>
        <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <ul class="navbar-nav px-3">
            <li class="nav-item text-nowrap">
                <a class="nav-link" v-on:click="logOut()">Cerrar Sesión</a>
            </li>
        </ul>
    </nav>
    <div v-if="rol === 1">
      <Menu_user/>
    </div>
    <div v-else-if="rol === 2">
      <Menu_admi/>
    </div>  
  </body>
</template>

<script>
    import axios from 'axios'
    import Menu_user from '@/models/user/menu.vue'
    import Menu_admi from '@/models/admin/menu.vue'

    export default {
        name: 'Users',
        components: {
            Menu_user,
            Menu_admi
        },
        data(){
            return{
                n_user :"NAMEACCOUNT",
                rol: 2,
                dataChart :  [["Jan", 0], ["Feb", 0], ["Mar", 0], ["Apr", 0], ["May", 0]]
            }
        },
        created: function(){
            this.n_user = "Hola! "+JSON.parse(localStorage.getItem('account_name'))
            this.name = JSON.parse(localStorage.getItem('account_name'))
            this.rol = JSON.parse(localStorage.getItem('account_rol'))
            if(localStorage.getItem('account_name') == null){
              alert("Usted no se encuentra logueado.");
              this.$router.push({path: '/'});
            }
            axios.get('http://deployversion-env.eba-vephy4cj.sa-east-1.elasticbeanstalk.com/api/tools/bracelet/report/developer/n',{
                headers: {
                    'authorization': JSON.parse(localStorage.getItem('token')),
                }
                }).then(res => {
                var payload = res.data
                console.log(payload[0]['ppm'])
                var resultData = {}
                for(var i = 0; i < payload.length; i++){
                    resultData[i] = payload[i].ppm
                    if(i+1 == payload.length){
                      this.dataChart = resultData
                      console.log(this.dataChart)
                    }
                }
            })
        },
        methods:{
          logOut(){
            alert("Sesion finalizada")
            localStorage.removeItem('token');
            localStorage.removeItem('account_name');
            this.$router.push({path: '/'});
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