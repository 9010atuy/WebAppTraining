<template>
  <div id="confirm" class="m-5">
    <div class="field">
      <label class="label has-text-info">-性別-</label>
      <div class="control">
        <label class="mx-4">{{ getSex }}</label>
      </div>
    </div>
    <div class="field">
      <label class="label  has-text-info">-生年月日-</label>
      <label class="mx-4">{{ this.$store.state.birthday }}</label>
    </div>
    <div class="field">
      <label class="label  has-text-info">
        -現在、生命保険に加入されていますか？-
      </label>
      <label class="mx-4">{{ q1Answer }}</label>
    </div>
    <div class="field">
      <label class="label  has-text-info">
        -現在入院中ですか。または最近3ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？-
      </label>
      <label class="mx-4">{{ q2Answer }}</label>
    </div>
    <div class="field">
      <label class="label  has-text-info">
        -過去5年以内に、病気やけがで手術を受けたことまたは継続して7日以上の入院をしたことがありますか？-
      </label>
      <label class="mx-4">{{ q3Answer }}</label>
    </div>
    <div class="field">
      <label class="label  has-text-info">
        -ご相談内容-
      </label>
      <label class="mx-4">{{ this.$store.state.message }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Confirm',
  computed: {
    getSex: function() {
      let sex = '';
      if (this.$store.state.sex === 'male') {
        sex = '男性';
      } else if (this.$store.state.sex === 'female') {
        sex = '女性';
      }
      return sex;
    },
    q1Answer: function() {
      return this.$store.state.a1 === 'true' ? 'はい' : 'いいえ';
    },
    q2Answer: function() {
      return this.$store.state.a2 ? 'はい' : 'いいえ';
    },
    q3Answer: function() {
      return this.$store.state.a3 === true ? 'はい' : 'いいえ';
    },
  },
};
</script>

<style lang="scss">
@import '../../node_modules/bulma/bulma.sass';
</style>
