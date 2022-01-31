<template>
  <div id="button" class="has-text-centered pt-5">
    <button class="button is-primary" @click="clicked()">
      {{ btnMessage }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    type: String,
    btnMessage: String,
  },
  data: () => {
    return {
      currentPage: Number,
    };
  },
  methods: {
    clicked: function() {
      this.$emit('forward', { type: this.type });
    },
  },
};
</script>

<style scoped lang="scss">
@import '../../node_modules/bulma/bulma.sass';
</style>
