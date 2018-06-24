<template>
  <div class="details container">
    <router-link to="/viewall"><span class="glyphicon glyphicon-menu-left"></span> Back</router-link>
    <h1 class="page-header"> <span class="glyphicon glyphicon-user" aria-hidden="true"> </span> {{appointment.first_name}} {{appointment.last_name}}</h1>
     <ul class="list-group">
            <li class="list-group-item">Date of Birth: {{appointment.date_of_birth}}</li>
            <li class="list-group-item"><span class="glyphicon glyphicon-phone" aria-hidden="true"></span>  {{appointment.phone_number}}</li>
            <li class="list-group-item"><span class="glyphicon glyphicon-envelope" aria-hidden="true"></span> {{appointment.email_address}}</li>
     </ul>

     <ul class="list-group">
            <li class="list-group-item"> <span class="glyphicon glyphicon-map-marker" aria-hidden="true"> </span>{{appointment.mailing_address}}</li>
            <li class="list-group-item">{{appointment.city}}</li>
            <li class="list-group-item">{{appointment.province}}</li>
            <li class="list-group-item">{{appointment.postal_code}}</li>
     </ul>

     <ul class="list-group">
            <li class="list-group-item">{{appointment.doctor_name}}</li>
            <li class="list-group-item">Reason: {{appointment.reason}}</li>
            <li class="list-group-item"><span class="glyphicon glyphicon-calendar" aria-hidden="true"></span> {{appointment.appointment_date}}</li>
     </ul>
      <span class="pull-left">
      <router-link class="btn btn-primary" v-bind:to="'/update/'+appointment.id">Update Appointment</router-link>
      <button class="btn btn-primary" v-on:click="deleteAnAppointment(appointment.id)">Delete Appointment</button>
      </span>


  </div>
</template>

<script>
export default {
  name: 'details',
  data () {
    return {
        appointment: ''
    }
  },
   methods: {
    fetchAnAppointment(id){
      this.$http.get('http://clinicserver/api/appointment/'+id)
      .then(function(response){
         this.appointment = response.body;
      });
  },
    deleteAnAppointment(id){
          this.$http.delete('http://clinicserver/api/appointment/delete/'+id)
          .then(function(response){
            this.$router.push({path: '/viewall', query: {alert: 'The Appointment has been deleted.'}});
          });
      }
  },
  created: function(){
      this.fetchAnAppointment(this.$route.params.id);
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
