
import _ from 'lodash'
import $ from 'jquery'

function component(){
	var element = $('div');
	element.html(_.join(['hello','world'],''))
	return element.get(0)
}

document.body.appendChild(component())
