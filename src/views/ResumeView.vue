<template>
  <div class="container">
    <h1>Resume</h1>
    <div class="row">
      <div class="col">
        <PersonDetailsComp />
      </div>
      <div class="col">
        <h4>Work Experience</h4>
        <div class="col-4">
          <div class="container my-5">
            <div class="col-md-6 offset-md-3" v-for="item in work" :key="item.id">
            <h4 style="margin-left: 1.2rem;"></h4>
            <ul class="timeline-3">
              <li>
                <h6>{{item.company}}</h6>
                <p>{{item.position}}</p>
                
                {{ item.startDate }} to {{ item.endDate }}
                {{item.summary}}
                 {{ item.website }}
              </li>
            </ul>
          </div>
         </div>
        </div>

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

export default {
  components: {
    PersonDetailsComp,
    SkillsComp,
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
.container-skills{
  margin: 20px;
}
ul.timeline-3 {
  list-style-type: none;
  position: relative
  
}
ul.timeline-3:before {
  content: " ";
  background: #d4d9df;
  display: center;
  position: absolute;
  left: 29px;
  width: 2px;
  height: 50%;
  z-index: 400;
}
ul.timeline-3 > h6 {
  display: inline-flex;
}
ul.timeline-3 > li {
  margin: 20px 0;
  padding-left: 20px;
  display: inline-flex;

}
ul.timeline-3 > li:before {
  content: " ";
  background: greenyellow;
  display: inline-block;
  position: absolute;
  border-radius: 50%;
  border: 3px solid green;
  left: 20px;
  width: 20px;
  height: 20px;
  z-index: 400;
}

</style>