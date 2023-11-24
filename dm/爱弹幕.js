// muban.短视2.二级.title = 'h2&&Text;.hl-ma0&&Text';
muban.短视2.二级.img = '.detail-pic&&img&&data-original';
// muban.短视2.二级.desc = 'p:eq(1)&&Text;;;p:eq(2)&&Text;p:eq(1)&&Text';
// muban.短视2.二级.content = '.card-text&&Text';
var rule = {
    title: '爱弹幕',
    模板:'短视2',
    host: 'https://anime.girigirilove.com',
    homeUrl:'/vodshow/2-----------/',
    // url:'/vodshow/fyclass--------fypage---/'
    url: '/vodshow/fyclassfyfilter/',
    filterable:1,//是否启用分类筛选,
    filter_url:'-{{fl.area}}-{{fl.by}}-{{fl.class}}-{{fl.lang}}-{{fl.letter}}---fypage---{{fl.year}}',
    filter: {
        "2":[{"key":"class","name":"类型","value":[{"n":"全部","v":""},{"n":"喜剧","v":"喜剧"},{"n":"爱情","v":"爱情"},{"n":"恐怖","v":"恐怖"},{"n":"动作","v":"动作"},{"n":"科幻","v":"科幻"},{"n":"剧情","v":"剧情"},{"n":"战争","v":"战争"},{"n":"奇幻","v":"奇幻"},{"n":"冒险","v":"冒险"},{"n":"悬疑","v":"悬疑"},{"n":"校园","v":"校园"},{"n":"后宫","v":"后宫"},{"n":"热血","v":"热血"},{"n":"运动","v":"运动"},{"n":"百合","v":"百合"},{"n":"乙女","v":"乙女"},{"n":"机甲","v":"机甲"},{"n":"日常","v":"日常"},{"n":"魔法少女","v":"魔法少女"},{"n":"异世界","v":"异世界"},{"n":"爱抖露","v":"爱抖露"},{"n":"音乐","v":"音乐"},{"n":"萌","v":"萌"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"一月","v":"一月"},{"n":"四月","v":"四月"},{"n":"七月","v":"七月"},{"n":"十月","v":"十月"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"},{"n":"2003","v":"2003"},{"n":"2002","v":"2002"},{"n":"2001","v":"2001"},{"n":"2000","v":"2000"}]},{"key":"lang","name":"语言","value":[{"n":"全部","v":""},{"n":"日语","v":"日语"},{"n":"国语","v":"国语"}]},{"key":"by","name":"排序","value":[{"n":"最新","v":"time"},{"n":"最热","v":"hits"},{"n":"评分","v":"score"}]}],
        "3":[{"key":"class","name":"类型","value":[{"n":"全部","v":""},{"n":"搞笑","v":"搞笑"},{"n":"爱情","v":"爱情"},{"n":"恐怖","v":"恐怖"},{"n":"动作","v":"动作"},{"n":"科幻","v":"科幻"},{"n":"剧情","v":"剧情"},{"n":"战争","v":"战争"},{"n":"奇幻","v":"奇幻"},{"n":"冒险","v":"冒险"},{"n":"悬疑","v":"悬疑"},{"n":"校园","v":"校园"},{"n":"后宫","v":"后宫"},{"n":"热血","v":"热血"},{"n":"运动","v":"运动"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"内地","v":"内地"},{"n":"港台","v":"港台"},{"n":"日韩","v":"日韩"},{"n":"欧美","v":"欧美"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"},{"n":"2003","v":"2003"}]},{"key":"lang","name":"语言","value":[{"n":"全部","v":""},{"n":"国语","v":"国语"},{"n":"英语","v":"英语"}]},{"key":"by","name":"排序","value":[{"n":"最新","v":"time"},{"n":"最热","v":"hits"},{"n":"评分","v":"score"}]}],
        "21":[{"key":"class","name":"类型","value":[{"n":"全部","v":""},{"n":"喜剧","v":"喜剧"},{"n":"爱情","v":"爱情"},{"n":"恐怖","v":"恐怖"},{"n":"动作","v":"动作"},{"n":"科幻","v":"科幻"},{"n":"剧情","v":"剧情"},{"n":"战争","v":"战争"},{"n":"奇幻","v":"奇幻"},{"n":"冒险","v":"冒险"},{"n":"悬疑","v":"悬疑"},{"n":"校园","v":"校园"},{"n":"后宫","v":"后宫"},{"n":"热血","v":"热血"},{"n":"运动","v":"运动"},{"n":"百合","v":"百合"},{"n":"机甲","v":"机甲"},{"n":"日常","v":"日常"},{"n":"魔法少女","v":"魔法少女"},{"n":"异世界","v":"异世界"},{"n":"爱抖露","v":"爱抖露"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"},{"n":"2003","v":"2003"}]},{"key":"lang","name":"语言","value":[{"n":"全部","v":""},{"n":"日语","v":"日语"},{"n":"中文","v":"中文"},{"n":"英语","v":"英语"}]},{"key":"by","name":"排序","value":[{"n":"最新","v":"time"},{"n":"最热","v":"hits"},{"n":"评分","v":"score"}]}],
        "20":[{"key":"class","name":"类型","value":[{"n":"全部","v":""},{"n":"爱情","v":"爱情"},{"n":"科幻","v":"科幻"},{"n":"经典","v":"经典"},{"n":"冒险","v":"冒险"},{"n":"剧情","v":"剧情"},{"n":"动作","v":"动作"},{"n":"同性","v":"同性"},{"n":"喜剧","v":"喜剧"},{"n":"奇幻","v":"奇幻"},{"n":"恐怖","v":"恐怖"},{"n":"悬疑.惊悚","v":"悬疑.惊悚"},{"n":"战争","v":"战争"},{"n":"欧美","v":"欧美"},{"n":"歌舞","v":"歌舞"},{"n":"灾难","v":"灾难"},{"n":"记录.泰剧","v":"记录.泰剧"},{"n":"体育","v":"体育"},{"n":"烧脑","v":"烧脑"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"日本","v":"日本"},{"n":"欧美","v":"欧美"},{"n":"泰国","v":"泰国"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004.2003","v":"2004.2003"}]},{"key":"lang","name":"语言","value":[{"n":"全部","v":""},{"n":"日语","v":"日语"},{"n":"英语","v":"英语"},{"n":"泰语","v":"泰语"}]},{"key":"by","name":"排序","value":[{"n":"最新","v":"time"},{"n":"最热","v":"hits"},{"n":"评分","v":"score"}]}],
        "24":[{"key":"by","name":"排序","value":[{"n":"最新","v":"time"},{"n":"最热","v":"hits"},{"n":"评分","v":"score"}]}],
        "26":[{"key":"by","name":"排序","value":[{"n":"最新","v":"time"},{"n":"最热","v":"hits"},{"n":"评分","v":"score"}]}]
    },
    // detailUrl:'/vodplay/fyid-1-1/',
    detailUrl:'/voddetail/fyid/',
    class_name:'',
    class_url:'',
    class_parse:'.swiper-wrapper:eq(2) li;a&&Text;a&&href;.*/(\\d+)',
    图片来源:'@Referer=https://anime.girigirilove.com/',
    lazy:"",
    推荐: '*',
    // 一级:'.list-vod .public-list-box;a&&title;.lazy&&data-original;.public-list-prb&&Text;a&&href',
    一级:'.border-box .public-list-box;a&&title;.lazy&&data-original;.public-list-prb&&Text;a&&href',
}
