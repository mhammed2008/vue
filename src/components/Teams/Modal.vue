<script setup>
  defineProps({
    show: Boolean
  });
</script>

<template>
  <transition
  enter-from-class="opacity-0 scale-150"
  enter-to-class="opacity-100 scale-100"
  enter-active-class="transition duration-300"
  leave-active-class="transition duration-200"
  leave-from-class="opacity-100 scale-100"
  leave-to-class="opacity-0 scale-150"
  >
    <div v-if="show" class="fixed inset-0 bg-black/60 grid place-items-center">
      <div class="bg-white p-3 sm:w-3/4 max-w-2xl rounded-xl font-medium">
        <header class="text-xl mb-2">
          Add Member
        </header>

        <div>
          <slot>Default body</slot>
        </div>


        <footer class="border-t border-black/40 mt-2">
          <button @click="$emit('closeModal')" class="bg-gray-200 hover:bg-gray-300 p-2 mt-1 rounded-full transition duration-300">
            Close
          </button>
        </footer>
      </div>
    </div>
  </transition>
</template>