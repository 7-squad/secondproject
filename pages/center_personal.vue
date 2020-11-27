<template>
  <div>
    <Clientcontainer
      :component="component"
      title="个人中心"
      title2="个人信息资料"
      centertitle="编辑个人基本信息"
    />
  </div>
</template>
<script>
import Personalform from "~/components/Personalform.vue";
export default {
  layout: "loginbefore",
  components: {
    Personalform,
  },
  data() {
    return {
      component: Personalform,
    };
  },
};
</script>