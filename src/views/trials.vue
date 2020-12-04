<template>
    <div id="trials">
        <div id="chart">
        <apexchart type="line" height="350" :options="chartOptions" :series="series"></apexchart>
      </div>
      <sidebar-menu :menu="menu" />
      <v-selectmenu :data="menu1" >
      </v-selectmenu>
    </div> 
</template>

<script>

    //import axios from 'axios'
    import VueApexCharts from 'vue-apexcharts'
    import axios from 'axios'


    export default {
        name: 'trials',
        components: {
          apexchart: VueApexCharts
        },
        data(){
            return{
                users: null,
                m :1,
                menu1: [
                    {
                        header: true,
                        title: 'Main Navigation',
                        hiddenOnCollapse: true
                    },
                    {
                        href: '/',
                        title: 'Dashboard',
                        icon: 'fa fa-user'
                    },
                    {
                        href: '/charts',
                        title: 'Charts',
                        icon: 'fa fa-chart-area',
                        child: [
                            {
                                href: '/charts/sublink',
                                title: 'Sub Link'
                            }
                        ]
                    }
                ],
                menu: [
                  {
                      header: true,
                      title: 'Main Navigation',
                      hiddenOnCollapse: true
                  },
                  {
                      href: '/1',
                      title: 'Menu 1',
                      icon: 'ICON CLASS HERE'
                  },
                  {
                      href: '/2',
                      title: 'Menu 2',
                      icon: 'ICON CLASS HERE',
                      child: [
                          {
                              href: '/2-1',
                              title: 'Menu 2-1'
                          }
                      ]
                  }
              ],
                series: [],
          chartOptions: {
            chart: {
              height: 350,
              type: 'line',
              stacked: false,
            },
            stroke: {
              width: [0, 2, 5],
              curve: 'smooth'
            },
            plotOptions: {
              bar: {
                columnWidth: '50%'
              }
            },
            
            fill: {
              opacity: [0.85, 0.25, 1],
              gradient: {
                inverseColors: false,
                shade: 'light',
                type: "vertical",
                opacityFrom: 0.85,
                opacityTo: 0.55,
                stops: [0, 100, 100, 100]
              }
            },
            labels: [],
            markers: {
              size: 0
            },
            xaxis: {
              type: 'datetime'
            },
            yaxis: {
              title: {
                text: 'Points',
              },
              min: 0
            },
            tooltip: {
              shared: true,
              intersect: false,
              y: {
                formatter: function (y) {
                  if (typeof y !== "undefined") {
                    return y.toFixed(0) + " points";
                  }
                  return y;
            
                }
              }
            }
          },
            }
        },
        created: function(){
            
            axios.get('http://deployversion-env.eba-vephy4cj.sa-east-1.elasticbeanstalk.com/api/tools/bracelet/report/developer/n').then(res => {
                let payload = res.data
                console.log(payload)
                /*this.series = {
                    name: 'Bateria',
                    type: 'area',
                    data: payload["duracion"]
                }, {
                    name: 'PPM',
                    type: 'line',
                    data: payload["ppm"]
                }*/
            })

          let user = JSON.parse(localStorage.getItem('user'));
          alert(user.token);
            /*axios.get('http://deployversion-env.eba-vephy4cj.sa-east-1.elasticbeanstalk.com/api/search/data').then(res => {
                this.users = res.data
                alert(res.data)
                //this.$router.push({path: '/singin'});
            })*/
        }
    }
</script>

<style>
 
</style>
