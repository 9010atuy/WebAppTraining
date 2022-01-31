<template>
  <div id="header" class="card-header">
    <div class="tag is-info">
      {{ displayData.step }}
    </div>
    <div class="card-header-title">
      <span class="icon">
        <font-awesome-icon :icon="displayData.icon" />
      </span>
      {{ displayData.msg }}
    </div>
  </div>
</template>
<script>
export default {
  name: 'EnqueteHeader',
  data: function() {
    return {
      displayDataList: [
        {
          step: 'step1',
          icon: 'address-card',
          msg: 'お客様の情報を入力してください',
        },
        {
          step: 'step2',
          icon: 'desktop',
          msg: '以下にお答えください',
        },
        { step: 'step3', icon: 'file-alt', msg: 'ご相談内容をご記入ください' },
      ],
      displayData: Object,
    };
  },
  methods: {
    loading: function() {
      const page = this.$store.state.page;
      this.displayData = this.displayDataList[page - 1];
    },
  },
  beforeMount: function() {
    this.loading();
  },
  updated: function() {
    this.loading();
  },
};
</script>

<style scoped lang="scss">
@import '../../node_modules/bulma/bulma.sass';
#header {
  border: 1px solid rgb(16, 151, 16);
  background-color: rgb(221, 236, 224);
}
</style>
