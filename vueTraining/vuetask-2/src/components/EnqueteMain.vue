<template>
  <div id="enquete-entry">
    <EnqueteHeader class="mt-5" :key="headerKey"></EnqueteHeader>
    <div class="container">
      <router-view />
    </div>
    <div class="field is-grouped is-grouped-centered">
      <Button
        @forward="forward($event)"
        v-show="currentPage != 1"
        type="prev"
        btnMessage="前へ戻る >"
        class="control"
      />
      <Button
        @forward="forward($event)"
        v-show="currentPage != 3"
        type="next"
        btnMessage="次へ進む >"
        class="control"
      />
    </div>
  </div>
</template>

<script>
import EnqueteHeader from './EnqueteHeader.vue';
import Button from './Button.vue';

export default {
  name: 'EnqueteMain',
  components: {
    EnqueteHeader,
    Button,
  },
  data: function() {
    return {
      currentPage: Number,
      headerKey: 0,
    };
  },
  methods: {
    setCurrentPage: function() {
      this.currentPage = this.$store.state.page;
    },
    headerRerender: function() {
      this.headerKey += 1;
    },
    forward: function(el) {
      if (el.type === 'next') {
        switch (this.$store.state.page) {
          case 1:
            this.$router.push('/step2');
            this.$store.commit('pageIncrement');
            break;
          case 2:
            this.$router.push('/step3');
            this.$store.commit('pageIncrement');
            break;
        }
      } else if (el.type === 'prev') {
        switch (this.$store.state.page) {
          case 2:
            this.$router.push('/step1');
            this.$store.commit('pageDecrement');
            break;
          case 3:
            this.$router.push('/step2');
            this.$store.commit('pageDecrement');
            break;
        }
      } else {
        this.btnMessage = 'error';
      }
      this.setCurrentPage();
      this.headerRerender();
    },
  },
  created: function() {
    this.$router.push('/step1').catch(() => {});
  },
  beforeMount: function() {
    this.setCurrentPage();
  },
};
</script>

<style scoped>
@import '../../node_modules/bulma/bulma.sass';
#enquete-entry {
  width: 80%;
  margin: auto;
}
.container {
  border: 1px solid rgb(16, 151, 16);
}
</style>
