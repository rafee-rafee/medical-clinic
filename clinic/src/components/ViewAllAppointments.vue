<template>
  <div class="viewAll container">
    <Alert v-if="alert" v-bind:message="alert" />
    <h1 class="page-header"> All Appointments </h1>
    <input class="form-control" placeholder="Enter Last Name" v-model="filterInput">
    <br />
    <table id="t01" class="table table-striped">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone Number</th>
          <th>Appointment Date</th>
          <th></th>
        </tr>
      </thead>
       <tbody>
        <tr v-for="patient in filterBy(allAppointments, filterInput)">
          <td>{{patient.first_name}}</td>
          <td>{{patient.last_name}}</td>
          <td>{{patient.phone_number}}</td>
          <td>{{patient.appointment_date}}</td>
          <td><router-link class="btn btn-primary" v-bind:to="'/viewDetails/'+patient.id">View Details</router-link></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Alert from './Alert';
export default {
  name: 'viewAll',
  data () {
    return {
    allAppointments: [],
    alert:'',
    filterInput:''
    }
  },
  methods: {
    fetchAllAppointments(){
      this.$http.get('http://clinicserver/api/appointments')
      .then(function(response){
         this.allAppointments = response.body;
      });
    },
    filterBy(list, value){
      value = value.charAt(0).toUpperCase() + value.slice(1);
      return list.filter(function(patient){
        return patient.last_name.indexOf(value) > -1;
        });
      }
  },
  created: function(){
      if(this.$route.query.alert){
        this.alert = this.$route.query.alert;
      }
    this.fetchAllAppointments();
  },
  updated: function(){
    this.fetchAllAppointments();
  },
   components: {
      Alert
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

table#t01 th {
    background-color: #87AFC7;
    color: black;
    font-size: 18px;
}

table#t01 tr:nth-child(even) {
    background-color: #87AFC7;
}
table#t01 tr:nth-child(odd) {
   background-color: #98AFC7;
}

</style>
