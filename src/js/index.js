
import '../css/index.css'
import loader from './loader.js'
import turn from './carousel'
import loadWeather from './main.js'






function component(){
	var head = document.querySelector('#header');
	var main = document.querySelector('#main');
	var foot = document.querySelector('#footer');
	var load = new loader();
	head.innerHTML = load.tpl1;
	main.innerHTML = load.tpl2;
	foot.innerHTML = load.tpl3;

	

}
component()
turn.init()



loadWeather.start()
// window.onresize = function(){
// 	layout()
// }



