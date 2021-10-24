<template>
  <div ref="root">
    <Child />
    <p>Demo component</p>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import Child from "./Child.vue";
export default {
  components: { Child },
  setup() {
    const root = ref(null);

    onMounted(() => {
      // the DOM element will be assigned to the ref after initial render
      console.log("onMounted");
      console.log(root.value); // this is your $el
    });

    return {
      root,
    };
  },
};
</script>
