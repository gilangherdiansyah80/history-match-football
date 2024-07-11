import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'regenerator-runtime';
import 'jquery';

import './css/style.css';
import './js/component/nav-kage';
import './js/component/kage-app.js';
import './js/component/kage-list.js';
import mainKage from './js/view/kage';

document.addEventListener('DOMContentLoaded', mainKage);
