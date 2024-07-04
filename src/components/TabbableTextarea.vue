<script setup>

defineProps({
  modelValue: String
})

let emit = defineEmits(['update:modelValue'])
function onTab(e) {
  let textarea = e.target;

  let val = textarea.value,
      start = textarea.selectionStart,
      end = textarea.selectionEnd;

  textarea.value = val.substring(0,start) + "\t" + val.substring(end);

  textarea.selectionStart = textarea.selectionEnd = start +1;

}

</script>

<template>
  <textarea @keydown.tab.prevent="onTab" v-text="modelValue" @keyup="emit('update:modelValue', $event.target.value )"></textarea>
</template>

<style scoped>

</style>