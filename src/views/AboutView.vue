<script setup>
import {useFlash} from "@/composables/useFlash.js";

let { flash } = useFlash()
</script>

<template>
  <div class="about">
    <p>
      <button @click="flash('about','It Works!', 'info')">Click me</button>
    </p>
  </div>
</template>


