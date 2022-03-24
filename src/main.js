import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

require('@/lib/wgo/wgo.js');
require('@/lib/wgo/kifu.js');
require('@/lib/wgo/sgfparser.js');
require('@/lib/wgo/player.js');
require('@/lib/wgo/basicplayer.js');
require('@/lib/wgo/basicplayer.component.js');
require('@/lib/wgo/basicplayer.infobox.js');
require('@/lib/wgo/basicplayer.commentbox.js');
require('@/lib/wgo/basicplayer.control.js');
require('@/lib/wgo/player.editable.js');
require('@/lib/wgo/scoremode.js');
require('@/lib/wgo/player.permalink.js');

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
