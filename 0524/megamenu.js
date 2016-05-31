var json = [
    {'name' :'home','list' :[
        
          {'name' : 'home12','url' : '#home12'},
          {'name' : 'about12','url' : '#about12','list' :[
              {'name' : 'home112'},{'name' : 'about112','list' : 
                  [{'name' : 'home1112','list' : 
                      [{'name' : 'home11112'}]
                  },{'name' : 'about1112'}]}
              ]
          },
          {'name' : 'manage12','url' : '#manage12'}
          ]
    },
    {'name' : 'about','list' : [
          {'name' : 'home22','url' : '#home22'},
          {'name' : 'about22','url' : '#about22'}
          ]
    },
    {'name' : 'manage','list' : 
          [{'name' : 'home32','url' : '#home32'}]
    },
    {'name' : 'contact'}
]

window.onload = function () {
      var str = '',
          $sec1 = $('.section1'),
          $head = $('.head'),
          $switch = $('.section1 span.switch'),
          aSpan = document.getElementsByClassName('head')[0].getElementsByTagName('span');
          urlstr = '';
      //构建菜单DOM
      function forTree (o) {
            for(var i = 0; i < o.length; i++) {
                  if(typeof o[i]['url'] == 'undefined') {
                        urlstr = '<div class = "sec1_div"><span class = "sec1_span"><span class = "wrapTag"><span class = "innerTag"></span></span>' + o[i]['name'] + '</span><ul>'
                  } else {
                        urlstr = '<div class = "sec1_div"><span class = "sec1_span"><span class = "wrapTag"><span class = "innerTag"></span></span>' + o[i]['name'] + '</span><ul>'
                  }
                  str += urlstr;      
                  if(o[i]['list'] != null) {
                        forTree(o[i]['list']);

                  }
                  str += '</ul></div>'
            }
            return str;
      }
      $sec1.append(forTree(json));
      //添加展开和折叠事件
      (function menuTree () {
            $('.section1 ul').each(function (index,element) {
                  
                  var spanContent = $(element).siblings('span').html();
                  
                  $(element).siblings('span').html('<span class = "switch">+</span>' + spanContent);
                  
            })
           $('.section1').find('div span.switch').click(function () {
                  var $ul = $(this).parents('span').siblings('ul');
                  
                  var spanstr = $(this).parents('span').html();
                  
                 
                  if($ul.find('div').html() != null) {
                        if(($ul).css('display') == 'none') {
                              $ul.show(300);
                              $(this).text('-');
                        } else {
                              
                              $ul.hide(300);
                              $(this).text('+');
                        }
                  }
                  
            }) 
      })();
      //添加mouseover事件显示折叠展开符号
      /*
      $('div span').mouseove(function () {
            
            $('.section1 ul').each(function (index,element) {
                  var ulContent = $(element).html();
                  if(ulContent) {
                       $(this).find('span.switch').hide();
                  };
            })
      })
      */
      //添加同心圆事件
      $('.section1').find('.wrapTag').click(function () {
            var text = $(this).parents('span').text().substr(1);
            
            
            $(this).parents('div').siblings('.sec1_div').hide(300);
            $(this).parents('span').siblings('ul').show(300);          
            $(this).parents('span').hide(300);
            $('.title').text(text);
            $('p.head strong').before('<span>' + text + '</span>' + ' > ');
            $('.section1 .head span').click(function () {                  
                  $('.section1 ul').each(function (index,element) { 
                        b = $(element);                      
                        var a = $(element).siblings('span');                        
                        if(a.text().substr(1) === $(this).text()) {
                              alert('1');
                              return false;                             
                        }    
                  })
                  
            })
            
      
            
      })
      //添加导航事件


      
}