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
      //从上往下添加
      $('.section1').find('.wrapTag').click(function () {
            $('p.head').html();
            $('p.head').html('<strong></strong>')
            
            var text = $(this).parents('span').text().substr(1);
            
            //隐藏要隐藏的，剩下的即是要显示的
            $(this).parents('div').siblings('.sec1_div').hide(300);                     
            $(this).parents('ul').siblings().hide(300);
            $(this).parent().hide(300);
            var $list = $(this).parents('ul').siblings();
            
            for(var i = 0; i < $list.length; i++) {

              $('p.head strong').before('<span class = "up">' + $list.eq(i).text().substr(1) + '</span>' + ' > ');
            }
            
            $('.title').text(text);      
      })
      //从下往上添加
      $('p.head span.up').click(function () {    
            alert('1');         
            if($('p.head').text() !== '') {
              alert("1");
            } else {
              return false;
            }
      })            
      


      
}