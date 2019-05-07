<template>
  <div id="app">
    <TheMap/>
  </div>
</template>

<script>
import TheMap from "@/components/TheMap.vue";

export default {
  name: "App",

  components: { TheMap },
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
</style>
