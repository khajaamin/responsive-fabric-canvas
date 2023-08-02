// Import stylesheets
import './style.css';

import { fabric } from 'fabric';

const canvas = new fabric.Canvas(document.getElementById('canvas'));
canvas.setBackgroundColor('rgb(30,230,45').renderAll();

const body = window.document.body.getBoundingClientRect();
let INT_RATIO = Number(body.width) / Number(body.height);

function initSize() {
  const maincontainer = document.getElementById('maincontainer');
  maincontainer.width = '700px';
  maincontainer.height = '500px';

  console.log('INT_RATIO', INT_RATIO);
}

initSize();

function resize() {
  const ele = document.getElementById('maincontainer').getBoundingClientRect();
  console.log(ele.width);

  canvas.setDimensions({ width: ele.width, height: ele.height });
  canvas.setBackgroundColor('rgb(30,230,45').renderAll();
}

resize();

window.addEventListener('resize', () => {
  resize();
});
