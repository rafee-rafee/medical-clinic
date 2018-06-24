<template>
  <div class="update container">
     <Alert v-if="alert" v-bind:message="alert" />
     <h1 class="page-header"> Update an Appointment </h1>
     <form v-on:submit="updateAnAppointment">
        <div class="well">
            <h4>Patient's Basic Infromation</h4>
            <div class="form-group">
                <label>First Name</label>
                <input type="text" class="form-control" placeholder="First Name*" v-model="patient.first_name">
            </div>
            <div class="form-group">
                <label>Last Name</label>
                <input type="text" class="form-control" placeholder="Last Name*" v-model="patient.last_name">
            </div>
            <div class="form-group">
                <label>Date of Birth</label>
                <input type="text" class="form-control" placeholder="Date of Birth" v-model="patient.date_of_birth">
            </div>
        </div>

        <div class="well">
            <h4>Contact Details</h4>
            <div class="form-group">
                <label>Phone Number</label>
                <input type="text" class="form-control" placeholder="Phone Number*" v-model="patient.phone_number">
            </div>
            <div class="form-group">
                <label>Email Address</label>
                <input type="text" class="form-control" placeholder="Email Address" v-model="patient.email_address">
            </div>
        </div>

        <div class="well">
            <h4>Mailing Address</h4>
            <div class="form-group">
                <label>Address</label>
                <input type="text" class="form-control" placeholder="Address" v-model="patient.mailing_address">
            </div>
            <div class="form-group">
                <label>City</label>
                <input type="text" class="form-control" placeholder="City" v-model="patient.city">
            </div>
            <div class="form-group">
                <label>Province</label>
                <input type="text" class="form-control" placeholder="Province" v-model="patient.province">
            </div>
            <div class="form-group">
                <label>Postal Code</label>
                <input type="text" class="form-control" placeholder="Postal Code" v-model="patient.postal_code">
            </div>
        </div>

        <div class="well">
            <h4>Appointment Details</h4>
            <div class="form-group">
                <label>Doctor Name</label>
                <input type="text" class="form-control" placeholder="Doctor Name*" v-model="patient.doctor_name">
            </div>
            <div class="form-group">
                <label>Reason</label>
                <input type="text" class="form-control" placeholder="Reason/ Problem" v-model="patient.reason">
            </div>
            <div class="form-group">
                <label>Appointment Date</label>
                <input type="text" class="form-control" placeholder="Appointment Date" v-model="patient.appointment_date">
            </div>
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
    </form>

  </div>
</template>

<script>
import Alert from './Alert'
export default {
  name: 'update',
  data () {
    return {
        patient: {},
        alert:''
    }
  },
  methods: {
       fetchAnAppointment(id){
         this.$http.get('http://clinicserver/api/appointment/'+id)
        .then(function(response){
           this.patient = response.body;
      });
  },
        updateAnAppointment(e){
         if(!this.patient.first_name || !this.patient.last_name || !this.patient.phone_number || !this.patient.doctor_name){
                this.alert = 'Please fill in all required fields';
            } else {
                let updateAppointment = {
                    first_name: this.patient.first_name,
                    last_name: this.patient.last_name,
                    date_of_birth: this.patient.date_of_birth,
                    phone_number: this.patient.phone_number,
                    email_address: this.patient.email_address,
                    mailing_address: this.patient.mailing_address,
                    city: this.patient.city,
                    province: this.patient.province,
                    postal_code: this.patient.postal_code,
                    doctor_name: this.patient.doctor_name,
                    reason: this.patient.reason,
                    appointment_date: this.patient.appointment_date
                }
                this.$http.put('http://clinicserver/api/appointment/update/'+this.$route.params.id, updateAppointment)
                    .then(function(response){
                        this.$router.push({path:'/viewall', query: {alert: 'Appointment is Updated'}});
                    });
                e.preventDefault();
            }
            e.preventDefault();
        }
  },
  created: function(){
    this.fetchAnAppointment(this.$route.params.id);
  },
  components: {
        Alert
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
