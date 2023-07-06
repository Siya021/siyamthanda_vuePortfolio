<template>
  <div class="container-fluid">
    <h1>Resume</h1>
    <div class="row">
      <div class="col">
        <PersonDetailsComp />
      </div>
      <div class="col" id="work">
        <h4>Work Experience</h4>
        <div >
          <div class="container my-5">
            <div class="col-md-6 offset-md-3" v-for="item in work" :key="item.id">   
              <div class="card border-success mb-3" style="max-width: 18rem;">
                <div class="card-header">{{ item.company }}</div>
                <div class="card-body text-success">
                  <h5 class="card-title">{{ item.position }}</h5>
                  <p class="card-text">{{ item.startDate }} to {{ item.endDate }}.</p>
                  <p class="card-text2">{{ item.summary }}</p>
                </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <EducationComp />
      </div>
      <div class="col">
        <div class="container-skills">
          <h4> Skills</h4>
          <SkillsComp />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PersonDetailsComp from "@/components/PersonDetailsComp.vue";
import SkillsComp from '@/components/SkillsComp.vue';
import EducationComp from "@/components/EducationComp.vue";

export default {
  components: {
    PersonDetailsComp,
    SkillsComp,
    EducationComp,
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

<style scoped>
.card-header{
  background-color: green;
  opacity: 90%;
  color: white;
}
.card-text{
  background-color: green;
  opacity: 90%;
  color: white;
}
.col{
  justify-content: center;
  margin: 20px;
}
.container-skills {
  margin: 20px;
}
#work{
  justify-content: center;
}
</style>