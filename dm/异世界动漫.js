var rule={
    title:'异世界动漫',
    host:'http://www.ysjdm.net',
    homeUrl:'/index.php/vod/show/id/20.html',
    // url:'/index.php/vod/show/class/fyclass/id/20/page/fypage.html',
    url:'/index.php/vod/show/fyclassfyfilter.html',
    filterable:1,//是否启用分类筛选,
    filter_url:'{{fl.type}}/id/20/page/fypage{{fl.year}}',
    filter: {"area/日本":[{"key":"type","name":"类型","value":[{"n":"全部","v":""},{"n":"OVA","v":"/class/OVA"},{"n":"剧场版","v":"/class/剧场版"},{"n":"萝莉","v":"/class/萝莉"},{"n":"学園","v":"/class/学園"},{"n":"后宫","v":"/class/后宫"},{"n":"恋爱","v":"/class/恋爱"},{"n":"热血","v":"/class/热血"},{"n":"神魔","v":"/class/神魔"},{"n":"奇幻","v":"/class/奇幻"},{"n":"治愈","v":"/class/治愈"},{"n":"搞笑","v":"/class/搞笑"},{"n":"百合","v":"/class/百合"},{"n":"冒险","v":"/class/冒险"},{"n":"魔法","v":"/class/魔法"},{"n":"机战","v":"/class/机战"},{"n":"战争","v":"/class/战争"},{"n":"犯罪","v":"/class/犯罪"},{"n":"悬疑","v":"/class/悬疑"},{"n":"推理","v":"/class/推理"},{"n":"科幻","v":"/class/科幻"},{"n":"竞技","v":"/class/竞技"},{"n":"运动","v":"/class/运动"},{"n":"其他","v":"/class/其他"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"}]}],"area/中國":[{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"}]}]},
    searchUrl:'/index.php/vod/search.html?wd=**&submit=',
    searchable:2,//是否启用全局搜索,
    quickSearch:0,//是否启用快速搜索,
    filterable:0,//是否启用分类筛选,
    headers:{//网站的请求头,完整支持所有的,常带ua和cookies
        'User-Agent':'MOBILE_UA',
        // "Cookie": "searchneed=ok"
    },
 	// class_name:'BD无修&萝莉&学園&后宫&恋爱&热血&神魔&奇幻&治愈&搞笑&百合冒险&魔法&机战&战争&战斗&犯罪&悬疑&推理&科幻&竞技&运动&耽美&其他&OVA&剧场版&国产动漫',
 	class_name:'日漫&国漫',
 	// class_url:'BD无修&萝莉&学園&后宫&恋爱&热血&神魔&奇幻&治愈&搞笑&百合冒险&魔法&机战&战争&战斗&犯罪&悬疑&推理&科幻&竞技&运动&耽美&其他&OVA&剧场版&国产动漫',
 	class_url:'area/日本&area/中國',
    cate_exclude:'',
    play_parse:true,
    lazy:'',
    limit:6,
    // 推荐:'.vodlist;li;a&&title;a&&data-original;.text_right&&Text;a&&href',
    推荐:'*',
    double:true, // 推荐内容是否双层定位
    一级:'.vodlist&&li;a&&title;a&&data-original;.text_right&&Text;a&&href',
    // 二级:{"title":"h2&&Text","img":".lazyload&&data-original","desc":"li.data:eq(0)&&Text;li.data:eq(1)&&Text;li.data:eq(2)&&Text;li.data:eq(3)&&Text","content":".content&&span&&Text","tabs":".play_source_tab","lists":".content_playlist:eq(#id) a"},
    二级:{"title":"h2&&Text","img":".lazyload&&data-original","desc":";;;li.data:eq(2)&&Text;li.data:eq(3)&&Text","content":".content&&span&&Text","tabs":".play_source_tab","lists":".content_playlist:eq(#id) a"},
    搜索:'.container&&ul&&li;h4&&title;.lazyload&&data-original;.pic_text&&Text;a&&href',
}
