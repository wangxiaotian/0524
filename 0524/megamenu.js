var json = [
    {'name' :'home','list' :[
        
          {'name' : 'home12'},
          {'name' : 'about12','list' :[
              {'name' : 'home112'},{'name' : 'about112','list' : 
                  [{'name' : 'home1112','list' : 
                      [{'name' : 'home11112'}]
                  },{'name' : 'about1112'}]}
              ]
          },
          {'name' : 'manage12'}
          ]
    },
    {'name' : 'about','list' : [
          {'name' : 'home22'},
          {'name' : 'about22'}
          ]
    },
    {'name' : 'manage','list' : 
          [{'name' : 'home32'}]
    },
    {'name' : 'contact'}
]

$(function(){
    var str = '',
    $sec1 = $('.section1');
    //构建菜单DOM
    function forTree(o){
        for(var i = 0; i < o.length; i++) { 
            str += '<ul><li><p>' + o[i]['name'] + '</p></li>'        
            //有子菜单
            if(o[i]['list']) {
                forTree(o[i]['list']);    
            }

            str += '</ul>'
        }
        return str;
    }
    //插入节点
    $sec1.append('<span class = "sleSpan">home</span>')
    $sec1.append(forTree(json));
    //操作DOM
    $('.section1').on('click','p',function(){
        $('.section1').find('*').removeClass();
        $(this).parents('ul').eq(0).addClass('');
        $(this).parents('ul').siblings('ul').addClass('none');
        $(this).parents('ul').siblings('li').addClass('sle');
        $(this).parents('ul').siblings('li').eq(0).addClass('sleNone');
        $(this).parent('li').addClass('sleLi');
        $(this).parent('li').parent('ul').addClass('sleUl');
        $('span').addClass('sleSpan');
    })
    $('span').click(function(){
      
      $('.section1').find('*').removeClass();
      $(this).addClass('sleSpan');
    })
})

