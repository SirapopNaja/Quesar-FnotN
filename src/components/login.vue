<!----------Make By YourName---------------->

<template  >

<div style="padding:5%;"  >

    <div class="row">
    <div class="col-3"></div>
    <div class="col-3"></div>
    </div><br>
    <form @submit.prevent="loginform()">
        <q-input bg-color="white" v-model="user.email" required square outlined label="อีเมลล์" /><br>
        <q-input bg-color="white" v-model="user.password"  type="password" required square outlined label="รหัสผ่าน" /><br>
        <q-btn  type="submit" style="width:100%;" color="primary" label="เข้าสู่ระบบ" />
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
        ...sync('login/*')
},
    /*-------------------------Methods------------------------------------------*/
methods:{
    ...call('login/*'),
    /******* Methods default run ******/
     async loginform() {
          let check = await this.login();
          if(check){
              this.$router.replace('/')

          }else{
                alert('login error');
          }


        },

    load:async function(){
}
},
    }
</script>