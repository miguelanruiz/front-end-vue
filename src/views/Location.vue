<template>
<body>
      <div v-if="display==1" class="text-center">
        <vue-google-heatmap :points="points"
                      :width="1080"
                      :height="500" 
                      :lng=" -74.102445"
                      :lat="4.662355"
                      :initial-zoom="7"
                      />
      </div>
</body>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'Location',
        components: {
        },
        data(){
            return{
                name: "NAMEUSER",
                n_user :"NAMEACCOUNT",
                dataChart :  [["Jan", 0], ["Feb", 0], ["Mar", 0], ["Apr", 0], ["May", 0]],
                display : 0,
                points: [
                    {lng: -74.078619, lat:4.646864}, 
                    {lng: -74.078437, lat:4.632535},
                    {lng: -74.078619, lat:4.632535},
                    {lng: -74.078437, lat:4.632535},
                    {lng: -74.078619, lat:4.632535},
                    {lng: -74.078437, lat:4.632535},
                    {lng: -74.079517, lat:4.626565},
                    {lng: -74.079517, lat:4.626565},
                    {lng: -74.079517, lat:4.626565},
                    {lng: -74.079517, lat:4.626565},
                    {lng: -74.079517, lat:4.626565},
                    {lng: -74.081127, lat:4.626565},
                    {lng: -74.081127, lat:4.626565}
                  ]
            }
        },
        created: function(){
          console.log("iniciamos")
          this.info();
            /*this.points = [
                    {lng: -74.078619, lat:4.646864}, 
                    {lng: -74.078437, lat:4.632535},
                    {lng: -74.078619, lat:4.632535},
                    {lng: -74.078437, lat:4.632535},
                    {lng: -74.078619, lat:4.632535},
                    {lng: -74.078437, lat:4.632535},
                    {lng: -74.079517, lat:4.626565},
                    {lng: -74.079517, lat:4.626565},
                    {lng: -74.079517, lat:4.626565},
                    {lng: -74.079517, lat:4.626565},
                    {lng: -74.079517, lat:4.626565},
                    {lng: -74.081127, lat:4.626565},
                    {lng: -74.081127, lat:4.626565}
                  ]*/
            console.log(this.points)
            this.name = JSON.parse(localStorage.getItem('account_name'))
            /*if(localStorage.getItem('account_name') == null){
              alert("Usted no se encuentra logueado.");
              this.$router.push({path: '/'});
            }*/
            

        },
        methods:{
          logOut(){
            
            localStorage.removeItem('token');
            localStorage.removeItem('account_name');
            this.$router.push({path: '/'});
          },
          async info(){
            let newPoints = []
            await axios.get('http://deployversion-env.eba-vephy4cj.sa-east-1.elasticbeanstalk.com/api/tools/bracelet/report/developer/n',{
                headers: {
                    'authorization': JSON.parse(localStorage.getItem('token')),
                }
                }).then(res => {
                var payload = res.data
                console.log(payload[0]['ppm'])
                var resultData = {}
                for(var i = 0; i < payload.length; i++){
                    newPoints.push({lng : payload[i].lon, lat : payload[i].lat })
                    resultData[i] = payload[i].ppm
                    if(i+1 == payload.length){
                      this.dataChart = resultData
                      this.points = newPoints
                      console.log("salimos")
                      console.log(this.points)
                      console.log(this.dataChart)
                      this.display=1
                    }
                }
            })
            this.points = newPoints
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