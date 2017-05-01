



    // function Load(obj){
    //     var xhr = new XMLHttpRequest();
    //     xhr.open(obj.type,obj.url+'?'+'city=桂林',true);
    //     xhr.send()

    //     xhr.onreadystatechange = function(){
    //         if(xhr.readystate = 4 && xhr.status === 200){
    //            var res = JSON.parse(xhr.responseText)
    //             obj.success(res)
    //         }else if(xhr.status === 400){
    //             obj.error()
    //         }
    //     }
        
    // }
    var flag = true;
    function Load(){

        if(flag === true){

    
            $.ajax({
                type: 'get',
                url: 'https://jirenguapi.applinzi.com/weather.php',
                data: 'city=桂林',
                dataType: 'json',
                success: function(ret){
                    
                        append(ret)
                    
                },
                error: function(){
                    console.log(error)
                }

            } )
        }
    }
/*用一下原生js*/
    function append(item){
        flag = false;
        var parentNode = document.querySelector('.weather'),
            num = parentNode.childElementCount,
            images = document.querySelector('.weather img');
    
        
        var date = new Date()

      
        var node1 = document.createElement('p'),
            node2 = document.createElement('p'),
            node3 = document.createElement('p'),
            node4 = document.createElement('p'),
            node5 = document.createElement('img');
        
        node1.innerHTML = '城市：'+item.results[0].currentCity;
        node2.innerHTML = '日期：'+item.date
        node3.innerHTML = '温度：'+item.results[0].weather_data[0].temperature
        node4.innerHTML = 'pm25：'+item.results[0].pm25
    
        parentNode.appendChild(node1)
        parentNode.appendChild(node2)
        parentNode.appendChild(node3)
        parentNode.appendChild(node4)

        node5.setAttribute('src',item.results[0].weather_data[0].dayPictureUrl)
        parentNode.appendChild(node5)
        

    }

/*tab切换*/

    function Tab($ct){
            this.ct = $ct;
            this.init();
            this.bind();
        }

        Tab.prototype.init = function(){
            this.tabLi = this.ct.find('.tab-header li');
            this.tabHeader = this.ct.find('.tab-header') 
            this.tabContent = this.ct.find('.tab-content');
          
        }
        Tab.prototype.bind = function(){
            var _this =this;
            this.tabHeader.on('click','li',function(){
                var index = $(this).index();

                $.each(_this.tabLi,function(index,item){
                $(item).removeClass('active');
                })
                $(this).addClass('active');

                $.each(_this.tabContent,function(index,item){
                    $(item).removeClass('show');
                })
                _this.tabContent.eq(index).addClass('show');
            })
            
        }
/*tab切换end*/

    function setCalender(){
        var parentNode = document.querySelector('.calender ul');
        var childNode = parentNode.querySelectorAll('li');
        var date = new Date();
        var nowMonth = date.getMonth()+1;
        childNode[nowMonth-1].style.cssText = 'color: #fff;background-size: cover; cursor: pointer;';
        childNode[nowMonth].style.cssText = 'color: #fff;background-size: cover; cursor: pointer;';
        childNode[nowMonth+1].style.cssText = 'color: #fff;background-size: cover; cursor: pointer;';

        childNode[nowMonth-1].setAttribute('class',"addBackground")
        childNode[nowMonth].setAttribute('class',"addBackground")
        childNode[nowMonth+1].setAttribute('class',"addBackground")
    }




var loadWeather = {
    start: function(){
        Load()
        new Tab($('.tab').eq(0))
        setCalender()
    } 
}
 export default loadWeather