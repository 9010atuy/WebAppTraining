<template>
  <div id="basic-information-entry" class="card-content">
    <div class="field">
      <label class="label">-性別-</label>
      <div class="control">
        <label class="radio">
          <input type="radio" name="sex" />
          男性
        </label>
        <label class="radio">
          <input type="radio" name="sex" />
          女性
        </label>
      </div>
    </div>
    <div class="field">
      <label class="label">-生年月日-</label>
      <div class="control is-vertical-center">
        <div class="select">
          <select>
            <option
              v-for="year in yearList"
              :key="year.year"
              :value="year.year"
              >{{ year.label }}</option
            >
          </select>
        </div>
        <label>
          年
        </label>
        <div class="select">
          <select>
            <option v-for="i in 12" :key="i" :value="i">
              {{ i }}
            </option>
          </select>
        </div>
        <label for="">
          月
        </label>
        <div class="select">
          <select>
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
  data: () => {
    return {
      yearList: [],
      monthList: [],
      dayList: [],
    };
  },
  mounted() {
    this.yearList = getYearList();
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
