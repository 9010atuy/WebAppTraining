<template>
  <div id="enquete-contents" class="card-content">
    <div class="field">
      <label class="label has-text-info">生命保険に加入していますか？</label>
      <div class="control">
        <label class="radio">
          <input
            type="radio"
            name="q1"
            :value="true"
            @click="answerQ1()"
            v-model="a1"
          />
          はい
        </label>
        <label class="radio">
          <input
            type="radio"
            name="q1"
            :value="false"
            @click="answerQ1()"
            v-model="a1"
          />
          いいえ
        </label>
      </div>
    </div>
    <div v-if="isOpenQ2" class="field">
      <label class="label has-text-info"
        >現在入院中ですか。または最近3ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？</label
      >
      <div class="control">
        <label class="radio">
          <input
            type="radio"
            name="q2"
            :value="true"
            @click="answerQ2()"
            v-model="a2"
          />
          はい
        </label>
        <label class="radio">
          <input
            type="radio"
            name="q2"
            :value="false"
            @click="answerQ2()"
            v-model="a2"
          />
          いいえ
        </label>
      </div>
    </div>
    <div v-if="isOpenQ3" class="field">
      <label class="label has-text-info">
        過去5年以内に、病気やけがで手術を受けたことまたは継続して7日以上の入院をしたことがありますか？
      </label>
      <div class="control">
        <label class="radio">
          <input type="radio" name="q3" :value="true" v-model="a3" />
          はい
        </label>
        <label class="radio">
          <input type="radio" name="q3" :value="false" v-model="a3" />
          いいえ
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EnqueteContents',
  data: () => {
    return {
      isOpenQ2: false,
      isOpenQ3: false,
      a1: Boolean,
      a2: Boolean,
      a3: Boolean,
    };
  },
  methods: {
    answerQ1: function() {
      this.isOpenQ2 = true;
    },
    answerQ2: function() {
      this.isOpenQ3 = true;
    },
  },
  destroyed: function() {
    const pageInfo = { a1: this.a1, a2: this.a2, a3: this.a3 };
    this.$store.commit('savePage2', pageInfo);
  },
};
</script>

<style scoped>
@import '../../node_modules/bulma/bulma.sass';
</style>
