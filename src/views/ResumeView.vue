<template>
  <div>
    <h1>Resume</h1>
    <PersonDetailsComp />
  </div>
</template>

<script>
import PersonDetailsComp from "@/components/PersonDetailsComp.vue";
export default {
  components: {
    PersonDetailsComp,
  },
  computed: {
    work() {
      return this.$store.state.work;
    },
  },
  mounted() {
    this.$store.dispatch("fetchWork");
  },
};
</script>

<style scoped></style>