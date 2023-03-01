import { createApp } from 'vue'
import { utilityFunction } from '@/utility/utility.js';
import App from '@/App.vue'
import store from '@/store';
import router from '@/router';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap';
import 'vue3-carousel/dist/carousel.css';

import BaseDialog from '@/components/ui/BaseDialog.vue'
import BaseSpinner from '@/components/ui/BaseSpinner.vue'
import BaseToast from '@/components/ui/BaseToast.vue'
import BaseSection from '@/components/ui/BaseSection.vue'
import BaseAppButton from '@/components/ui/BaseAppButton.vue'
import ImageDialog from '@/components/ui/ImageDialog.vue'

const app = createApp(App)
app.use(router);
app.use(store);

app.config.globalProperties.$util = utilityFunction;

app.component('base-app-button', BaseAppButton);
app.component('base-dialog', BaseDialog);
app.component('base-toast', BaseToast);
app.component('base-spinner', BaseSpinner);
app.component('base-section', BaseSection);
app.component('image-dialog', ImageDialog);

app.mount('#app');
