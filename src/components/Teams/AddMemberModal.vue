<script setup>
import Modal from "@/components/Teams/Modal.vue";
import {useTeamStore} from "@/stores/TeamStore.js";
import {ref} from "vue";

let ShowModal = ref(false);

let team = useTeamStore();
</script>

<template>

  <button
      class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
      :disabled="! team.spotsRemaining"
      @click="ShowModal = true"
  >Add Member ({{ team.spotsRemaining  }} Spots Left)</button>

  <Teleport to="body">
    <Modal :show="ShowModal" @closeModal="ShowModal = false">
      <template #default>
        <form action="" class="mt-6">
          <div class="flex gap-2">
            <input type="email" placeholder="Email Address..." class="flex-1">
            <button>Add</button>
          </div>
        </form>
      </template>
    </Modal>
  </Teleport>
</template>