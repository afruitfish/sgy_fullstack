// def
<template>
  <div>
    <h1>{{ count }} *2={{ double }}</h1>
    <h2>{{ num }}</h2>

    <button @click="add">累加</button>
  </div>
</template>

<script>
import { computed, onMounted, reactive, ref, toRefs } from "vue";
//computed 对象 ref原始类型
export default {
  setup() {
    const { state, double } = useCounter(1);
    //入口函数
    // const state = reactive({//响应式方法
    //     count:1
    // })
    const num = ref(2); // 让原始布局变成响应式

    function add() {
      state.count++;
      console.log(state.count);
    }
    // const double = computed(() =>state.count*2)

    onMounted(() => {
      console.log("onMounted");
    });

    return {
      ...toRefs(state),
      add,
      double,
      num,
    };
  },
};
function useCounter(count) {
  const state = reactive({
    count,
  });
  const double = computed(() => state.count * 2);
  return { state, double };
}
</script>

<style>
</style>
