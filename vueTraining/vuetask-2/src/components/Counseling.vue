<template>
  <div id="counseling" class="card-content">
    <div class="field">
      <div class="control">
        <label class="label has-text-info">-ご相談内容-</label>
        <textarea
          v-model="message"
          class="textarea"
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Counseling',
  data: () => {
    return {
      message: '',
    };
  },
  destroyed: function() {
    const pageInfo = { message: this.message };
    this.$store.commit('savePage3', pageInfo);
  },
};
</script>

<style></style>
