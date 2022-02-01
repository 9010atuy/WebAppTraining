import Vue from 'vue';
import Router from 'vue-router';

import BasicInformationEntry from './components/BasicInformationEntry';
import EnqueteContents from './components/EnqueteContents';
import Counseling from './components/Counseling';
import Confirm from './components/Confirm';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/step1',
      component: BasicInformationEntry,
    },
    {
      path: '/step2',
      component: EnqueteContents,
    },
    {
      path: '/step3',
      component: Counseling,
    },
    {
      path: '/step4',
      component: Confirm,
    },
  ],
});
