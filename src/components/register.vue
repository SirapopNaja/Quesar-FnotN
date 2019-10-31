<!----------Make By YourName---------------->

<template  >

<div style="padding:5%;"  >

    <div class="row">
    <div class="col-3"></div>
    <div class="col-3"></div>
    </div><br>
    <form @submit.prevent="registerform()">
        <q-input bg-color="white" v-model="user.email" required square outlined label="อีเมลล์" /><br>
        <q-input bg-color="white" v-model="user.password"  type="password" required square outlined label="รหัสผ่าน" /><br>
        <q-input bg-color="white" v-model="user.password"  type="name" required square outlined label="ชื่อ" /><br>
        <q-input bg-color="white" v-model="user.password"  type="surname" required square outlined label="นามสกุล" /><br>
        <q-btn  type="submit" style="width:100%;" color="primary" label="ยืนยัน" />
    </form>
<br>


</div>

</template>


<script>
import { get,sync,call } from "vuex-pathify";
export default {
    name: 'Root',
    /*-------------------------Load Component---------------------------------------*/
    components: {

    },
  /*-------------------------Set Component---------------------------------------*/
props:{

},
    /*-------------------------DataVarible---------------------------------------*/
    data() {
    return {

        };
    },
    /*-------------------------Run Methods when Start this Page------------------------------------------*/
     async mounted() {
    /**** Call loading methods*/
            this.load();
    },
    /*-------------------------Run Methods when Start Routed------------------------------------------*/
     async beforeRouteEnter(to, from, next) {
        next()
    },
    /*-------------------------Vuex Methods and Couputed Methods------------------------------------------*/
    computed:{
        ...sync('register/*')
},
    /*-------------------------Methods------------------------------------------*/
methods:{
    ...call('register/*'),
    /******* Methods default run ******/
     async registerform() {
          let check = await this.register();
          if(check){
              this.$router.replace('/')

          }else{
                alert('register error');
          }


        },

    load:async function(){
}
},
    }
</script>