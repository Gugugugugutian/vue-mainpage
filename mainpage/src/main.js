import './assets/base.css'
import { createApp } from 'vue'

import topbar from './Topbar.vue'
createApp(topbar).mount('#t');

import app from './App.vue'
createApp(app).mount('#a');