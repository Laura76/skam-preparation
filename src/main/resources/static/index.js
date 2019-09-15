var temp='<img src="./images/ancientArchitecture/1.jpg"><img src="./images/ancientArchitecture/青岩寺.jpg">';
//	<img src="./images/ancientArchitecture/青岩寺.jpg">
//	<img src="./images/ancientArchitecture/木屋模型.jpg">
//	<img src="./images/ancientArchitecture/宝船公园 035.jpg">
//	<img src="./images/ancientArchitecture/大雄宝殿.jpg">
//	<img src="./images/ancientArchitecture/四合院模型.jpg">
//	<img src="./images/ancientArchitecture/g4.jpg">
//	<img src="./images/ancientArchitecture/g3.jpg">
//	<img src="./images/ancientArchitecture/g2.jpg">
//	<img src="./images/ancientArchitecture/g1.jpg">
//	<img src="./images/ancientArchitecture/IMG_3615.JPG">
//	<img src="./images/ancientArchitecture/DSC05453.JPG"> ' ;
layui.use(['element','flow'], function(){
  /**这是侧边栏的脚本*/
  var element = layui.element; //导航的hover效果、二级菜单等功能，需要依赖element模块
  //监听导航点击
  element.on('nav(demo)', function(elem){
    //console.log(elem)
    var category=elem.text();
    switch(category){
    case '古建':
		var pictureDiv=document.getElementById('LAY_demo3');
		pictureDiv.innerHtml=temp;
		console.log(pictureDiv.innerHtml)
    	break;
    default:
    	break;
    }
  });
});
