<template>
<div>
    <div class="text-center">
    <div></div>
      <h2>Kilometros recorridos</h2>
        <bar-chart :data="dataChart"></bar-chart>
    </div>
    <table class="table">
    <thead>
                        <tr>
                            <th scope="col">Filtro</th>
                            <th scope="col">Valor Maximo</th>
                            <th scope="col">Valor Minimo</th>
                            <th scope="col">Rango a Obtener</th>
                        </tr>
                    </thead>
    <tbody>
    <tr v-for="(invoice_product, k) in velocidad" :key="k">
    <td scope="row" class="trashIconContainer">
        <i class="far fa-trash-alt" @click="deleteRow(k, invoice_product)"></i>
    </td>
    <td>
        <th scope="col">Velocidad</th>
        <th> </th>
    </td>
    <td>
        <input class="form-control text-right" type="number" min="0" step="10" v-model="invoice_product.product_price" @change="calculateLineTotal(invoice_product)"
        />
    </td>
    <td>
        <input class="form-control text-right" type="number" min="0" step="10" v-model="invoice_product.product_qty" @change="calculateLineTotal(invoice_product)"
        />
    </td>
    <td>
        <input readonly class="form-control text-right" type="number" min="0" step=".01" v-model="invoice_product.line_total" />
    </td>
</tr>
</tbody>
</table>
    <button class="btn btn-outline-secondary" v-on:click="exportPDF()" type="button">Generar PDF</button>
</div>
</template>

<script>
    import axios from 'axios'
    import jsPDF from 'jspdf'
    require('jspdf-autotable')

    export default {
        name: 'Users',
        components: {
        },
        data(){
            return{
                name: "NAMEUSER",
                n_user :"NAMEACCOUNT",
                rol: 2,
                dataChart :  [["Jan", 0], ["Feb", 0], ["Mar", 0], ["Apr", 0], ["May", 0]],
                exportData: [
                  {title: 'Numero Usuarios', description: '110'},
                  {title: 'Eventos Criticos', description: 'Prueba'},
                  {title: 'Accidentalidad', description: 'Baja'},
                  {title: 'Manillas Activas', description: '84'},
                  {title: 'Manillas Registradas', description: '110'}
                ],
                velocidad: [{
                    product_no: '',
                    product_name: '',
                    product_price: '',
                    product_qty: '',
                    line_total: 0
                 }]
            }
        },
        created: function(){
            this.name = JSON.parse(localStorage.getItem('account_name'))
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
                    resultData[payload[i].fecha] = payload[i].ppm
                    console.log(payload[i].fecha)
                    if(i+1 == payload.length){
                      this.dataChart = resultData
                      console.log(this.dataChart)
                    }
                }
            })
        },
        methods:{
          logOut(){
            localStorage.removeItem('token');
            localStorage.removeItem('account_name');
            this.$router.push({path: '/'});
          },

          exportPDF() {
          var columns = [
            {title: "Caracteristica", dataKey: "title"},
            {title: "Descripcion", dataKey: "description"}
          ];
          var secondColumns = [
            {title: "Reporte por manillas", dataKey: this.dataChart.keys},
          ];
          var doc = new jsPDF('p', 'pt');
          doc.text('Reporte de observacion', 40, 40);
          doc.autoTable(columns, this.exportData, {
            margin: {top: 60},
          });
          doc.autoTable(secondColumns, this.resultData, {
            margin: {top: 60},
          });
          doc.save('Reporte.pdf');
        },
        calculateLineTotal(invoice_product) {
            var total = parseFloat(invoice_product.product_price) * parseFloat(invoice_product.product_qty);
            if (!isNaN(total)) {
                invoice_product.line_total = total.toFixed(2);
            }
            this.calculateTotal();
        },
         calculateTotal() {
            var subtotal, total;
            subtotal = this.velocidad.reduce(function (sum, product) {
                var lineTotal = parseFloat(product.line_total);
                if (!isNaN(lineTotal)) {
                    return sum + lineTotal;
                }
            }, 0);

            this.invoice_subtotal = subtotal.toFixed(2);

            total = (subtotal * (this.invoice_tax / 100)) + subtotal;
            total = parseFloat(total);
            if (!isNaN(total)) {
                this.invoice_total = total.toFixed(2);
            } else {
                this.invoice_total = '0.00'
            }
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