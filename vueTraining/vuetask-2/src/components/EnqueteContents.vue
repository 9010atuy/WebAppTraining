<template>
  <div id="enquete-contents" class="card-content">
    <div class="field">
      <label class="label">生命保険に加入していますか？</label>
      <div class="control">
        <label class="radio">
          <input type="radio" name="q1" value="true" @click="answer()" />
          はい
        </label>
        <label class="radio">
          <input type="radio" name="q1" value="false" @click="answer()" />
          いいえ
        </label>
      </div>
    </div>
    <div v-if="question >= 2" class="field">
      <label class="label"
        >現在入院中ですか。または最近3ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか。</label
      >
      <div class="control">
        <label class="radio">
          <input type="radio" name="q2" value="true" @click="answer()" />
          はい
        </label>
        <label class="radio">
          <input type="radio" name="q2" value="false" @click="answer()" />
          いいえ
        </label>
      </div>
    </div>
    <div v-if="question >= 3" class="field">
      <label class="label">
        過去5年以内に、病気やけがで手術を受けたことまたは継続して7日以上の入院をしたことがありますか。
      </label>
      <div class="control">
        <label class="radio">
          <input type="radio" name="q3" value="true" @click="answer()" />
          はい
        </label>
        <label class="radio">
          <input type="radio" name="q3" value="false" @click="answer()" />
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
      question: 1,
    };
  },
  methods: {
    answer: function() {
      if (this.question <= 3) this.question++;
    },
  },
};
</script>

<style scoped>
@import '../../node_modules/bulma/bulma.sass';
</style>
