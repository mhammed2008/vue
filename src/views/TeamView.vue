<script setup>
import TeamHeader from "@/components/Teams/TeamHeader.vue";
import TeamMembers from "@/components/Teams/TeamMembers.vue";
import TeamFooter from "@/components/Teams/TeamFooter.vue";
import {useTeamStore} from "@/stores/TeamStore.js";
import {ref} from "vue";

let team = useTeamStore();

team.fill();
</script>

<template>

  <TeamHeader/>

  <div class="flex justify-center items-center mr-auto ml-auto h-[80vh]" style="width: 725px">
    <div class="place-self-center flex justify-center  flex-col gap-y-3 w-full " >
      <TeamMembers/>
    </div>
  </div>

  <TeamFooter/>

</template>