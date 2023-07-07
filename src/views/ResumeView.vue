<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <PersonDetailsComp />

      </div>
      <div class="col">
        <h4>Education</h4>
        <EducationComp />
      </div>
    </div>
    <div class="row">
      <div class="col" id="work">
        <h4>Work Experience</h4>
        <div class="container2">
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
        <div class="col">
          <div class="container-skills">
            <h4> Skills</h4>
            <SkillsComp />
            <br>
            <button class="btn btn-outline-success" @click="downloadCV">DownloadCV</button>
          </div>
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
  methods: {
    downloadCV() {
      const fileUrl = 'https://drive.google.com/file/d/1-5-bjQPQgsyuVsn4LsF4bXHvyTsqMIJd/view?usp=drive_link';
      const link = document.createElement('a');
      link.href = fileUrl;
      link.target = '';
      link.download = 'file.pdf';

      link.click();
    }
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
.card-body {
  background-color: black;
}

.container2 {
  justify-content: center;
  display: flex;
}

h4 {
  text-decoration: overline rgb(22, 126, 79);
  text-decoration-style: dotted;
  margin: 10px;
  padding: 10px;
}

.card-header {
  background-color: rgb(22, 126, 79);
  opacity: 90%;
  color: white;
}

.card-text {
  background-color: rgb(22, 126, 79);
  opacity: 90%;
  color: white;
}

.col {
  justify-content: center;
  margin: 20px;
}

.container-skills {
  margin: 20px;
}

#work {
  justify-content: center;
}</style>