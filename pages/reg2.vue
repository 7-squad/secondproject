<template>
  <div>
    <Clientcontainer
      :component="component"
      title="注册用户"
      title2="注册用户"
      des="精准招生辅助系统"
    />
  </div>
</template>

<script>
import Regform from "~/components/Regform2.vue";
export default {
  layout: "loginbefore",
  components: {
    Regform,
  },
  data() {
    return {
      component: Regform,
    };
  },
};
</script>