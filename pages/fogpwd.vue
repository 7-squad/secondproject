<template>
  <div>
    <Clientcontainer
      :component="component"
      title="个人中心"
      title2="找回密码"
      centertitle="精准招生辅助系统"
    />
  </div>
</template>

<script>
import Pwdform from "~/components/Pwdform.vue"
export default {
  layout: "loginbefore",
  components:{
Pwdform
  },
  data() {
    return{
      component:Pwdform
    }
    
  },
};
</script>