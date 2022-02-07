<template>
  <div id="filter">
    <div class="control">
      <label class="radio">
        <input
          type="radio"
          name="filter"
          id="all"
          @change="filterAll"
          checked
        />
        すべて
      </label>
      <label class="radio">
        <input type="radio" name="filter" id="doing" @change="filterDoing" />
        作業中
      </label>
      <label class="radio">
        <input type="radio" name="filter" id="done" @change="filterDone" />
        完了
      </label>
    </div>
    {{ filter }}
  </div>
</template>

<script>
export default {
  name: 'FilterRadio',
  data: () => {
    return {
      filter: '',
    };
  },
  methods: {
    filterAll: function () {
      this.$store.commit('filterAll');
    },
    filterDoing: function () {
      this.$store.commit('filterDoing');
    },
    filterDone: function () {
      this.$store.commit('filterDone');
    },
  },
};
</script>

<style></style>
