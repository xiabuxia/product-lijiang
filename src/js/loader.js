import tpl1 from '../../public/head.html'
import tpl2 from '../../public/main.html'
import tpl3 from '../../public/footer.html'
import   '../css/head.css'
import   '../css/main.css'
import   '../css/footer.css'



function loader (){
    return {
        name: 'loader',
        tpl1: tpl1,
        tpl2: tpl2,
        tpl3: tpl3
    }
}
export default loader