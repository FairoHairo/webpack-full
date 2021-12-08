import icon from './App/icon.png';

const div = document.createElement('div');
const img = new Image();
img.src = icon;
div.className = 'icon';
div.appendChild(img);
document.body.appendChild(div);

console.log('The print.js module has loaded! See the network tab in dev tools...');

export default () => {
  console.log('Button Clicked: Here\'s "some text"!');
};
