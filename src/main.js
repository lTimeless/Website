/**
 * This is the main.js file. Import global CSS and scripts here.
 * Learn more: gridsome.org/docs/client-api
 */

/**
 * Global css imports
 */
import '~/assets/css/global.css';
import '~/assets/css/main.css';
import '~/assets/css/noscript.css';

/**
 * Layout imports
 */
import DefaultLayout from '~/layouts/Default.vue';

export default function (Vue, { head }) {
  Vue.component('Layout', DefaultLayout);
}
