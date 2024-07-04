<script setup>
import { uesCounter } from "@/stores/counter.js";

let counter = uesCounter();
</script>

<template>
  <div class="w-full text-center mt-10">
    <h1>
      {{ counter.count }}
    </h1>
    <button
        class="bg-gray-600 p-2 rounded mt-5 text-white"
        :disabled="! counter.remaining"
        @click="counter.increment()"
    >Increment (
      <span
        :class="counter.remaining?
        'text-xl' :
        'text-xl text-red-500 cursor-not-allowed' "
      >
      {{ counter.remaining }} Remaining</span>)
    </button>
  </div>

</template>