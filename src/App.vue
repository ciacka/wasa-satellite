<template>
  <div id="app">
    <TheMap/>
    <TheSidebar/>
  </div>
</template>

<script>
import TheMap from "@/components/TheMap.vue";
import TheSidebar from "@/components/TheSidebar.vue";

export default {
  name: "App",

  components: {
    TheMap,
    TheSidebar,
  },
};
</script>

<style lang="scss">
body,
html,
#app {
  height: 100%;
  width: 100%;
}

body {
  margin: 0;
  padding: 0;
}

#app {
  display: flex;
}
</style>
