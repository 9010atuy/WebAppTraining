<template>
  <div id="basic-information-entry" class="card-content">
    <div class="field">
      <label class="label has-text-info">-性別-</label>
      <div class="control">
        <label class="radio">
          <input type="radio" name="sex" value="male" v-model="sex" />
          男性
        </label>
        <label class="radio">
          <input type="radio" name="sex" value="female" v-model="sex" />
          女性
        </label>
      </div>
    </div>
    <div class="field">
      <label class="label has-text-info">-生年月日-</label>
      <div class="control is-vertical-center">
        <div class="select">
          <select v-model="y">
            <option
              v-for="year in yearList"
              :key="year.year"
              :value="year.year"
              >{{ year.label }}</option
            >
          </select>
        </div>
        <label> 年</label>
        <div class="select">
          <select v-model="month">
            <option v-for="i in 12" :key="i" :value="i">
              {{ i }}
            </option>
          </select>
        </div>
        <label for="">
          月
        </label>
        <div class="select">
          <select v-model="day">
            <option v-for="i in 31" :key="i" :value="i">
              {{ i }}
            </option>
          </select>
        </div>
        <label>
          日
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import getYearList from '../definition';

export default {
  name: 'BasicInformationEntry',
  // ToDo: 入力とデータをバインドする。性別・誕生日
  // ToDo: ラジオボタン、セレクトボックスの紐付け型を調べて対応すること
  data: () => {
    return {
      yearList: [],
      monthList: [],
      dayList: [],
      y: '',
      month: '',
      day: '',
      sex: '',
    };
  },
  mounted() {
    this.yearList = getYearList;
  },
  destroyed() {
    const birthday = `${this.y}年${this.month}月${this.day}日`;
    const sex = this.sex;
    this.$store.commit('savePage1', { sex: sex, birthday: birthday });
  },
};
</script>

<style lang="scss">
@import '../../node_modules/bulma/bulma.sass';
#enquete-content {
  border: 1px solid rgb(16, 151, 16);
}
.is-vertical-center {
  display: flex;
  align-items: center;
}
</style>
