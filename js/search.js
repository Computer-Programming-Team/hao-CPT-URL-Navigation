var sc = document.getElementById('sc')
var sc_text = document.getElementById('sc-text')
var google = document.getElementById('google')
var bing = document.getElementById('bing')
var baidu = document.getElementById('baidu')
var sogou = document.getElementById('sogou')
var _360 = document.getElementById('360')
var fsou = document.getElementById('fsou')
var github = document.getElementById('github')
var gtrans = document.getElementById('gtrans')
var bilibili = document.getElementById('bilibili')
var zhihu = document.getElementById('zhihu')
var gscholar = document.getElementById('gscholar')
var mdn = document.getElementById('mdn')
function googleon(){
    localStorage.setItem("sc", "google")
    sc.setAttribute("action", "https://www.google.com/search")
     sc_text.setAttribute("placeholder", "Google")
     sc_text.setAttribute("name", "q")
     sc_text.focus()
    google.setAttribute("class", "active"); 
    bing.removeAttribute("class"); 
    baidu.removeAttribute("class"); 
    sogou.removeAttribute("class"); 
    _360.removeAttribute("class"); 
    fsou.removeAttribute("class"); 
    github.removeAttribute("class"); 
    gtrans.removeAttribute("class"); 
    bilibili.removeAttribute("class"); 
    zhihu.removeAttribute("class"); 
    gscholar.removeAttribute("class"); 
    mdn.removeAttribute("class"); 
}
function bingon(){
    localStorage.setItem("sc", "bing") 
    sc.setAttribute("action", "https://cn.bing.com/search")
     sc_text.setAttribute("placeholder", "MIcrosoft Bing")
     sc_text.setAttribute("name", "q")
     sc_text.focus()
    bing.setAttribute("class", "active"); 
    google.removeAttribute("class"); 
    baidu.removeAttribute("class"); 
    sogou.removeAttribute("class"); 
    _360.removeAttribute("class"); 
    fsou.removeAttribute("class"); 
    github.removeAttribute("class"); 
    gtrans.removeAttribute("class"); 
    bilibili.removeAttribute("class"); 
    zhihu.removeAttribute("class"); 
    gscholar.removeAttribute("class"); 
    mdn.removeAttribute("class"); 
}
function baiduon(){
    localStorage.setItem("sc", "baidu") 
    sc.setAttribute("action", "https://www.baidu.com/s")
     sc_text.setAttribute("placeholder", "???????????????????????????(bushi")
     sc_text.setAttribute("name", "word")
     sc_text.focus()
    baidu.setAttribute("class", "active"); 
    bing.removeAttribute("class"); 
    google.removeAttribute("class"); 
    sogou.removeAttribute("class"); 
    _360.removeAttribute("class"); 
    fsou.removeAttribute("class"); 
    github.removeAttribute("class"); 
    gtrans.removeAttribute("class"); 
    bilibili.removeAttribute("class"); 
    zhihu.removeAttribute("class"); 
    gscholar.removeAttribute("class"); 
    mdn.removeAttribute("class"); 
}
function sogouon(){
    localStorage.setItem("sc", "sogou") 
    sc.setAttribute("action", "https://www.sogou.com/web")
     sc_text.setAttribute("placeholder", "?????????????????????")
     sc_text.setAttribute("name", "query")
     sc_text.focus()
    sogou.setAttribute("class", "active"); 
    bing.removeAttribute("class"); 
    baidu.removeAttribute("class"); 
    google.removeAttribute("class"); 
    _360.removeAttribute("class"); 
    fsou.removeAttribute("class"); 
    github.removeAttribute("class"); 
    gtrans.removeAttribute("class"); 
    bilibili.removeAttribute("class"); 
    zhihu.removeAttribute("class"); 
    gscholar.removeAttribute("class"); 
    mdn.removeAttribute("class"); 
}
function _360on(){
    localStorage.setItem("sc", "360") 
    sc.setAttribute("action", "https://www.so.com/s")
     sc_text.setAttribute("placeholder", "360??????,so??????~")
     sc_text.setAttribute("name", "q")
     sc_text.focus()
    _360.setAttribute("class", "active"); 
    bing.removeAttribute("class"); 
    baidu.removeAttribute("class"); 
    sogou.removeAttribute("class"); 
    google.removeAttribute("class"); 
    fsou.removeAttribute("class"); 
    github.removeAttribute("class"); 
    gtrans.removeAttribute("class"); 
    bilibili.removeAttribute("class"); 
    zhihu.removeAttribute("class"); 
    gscholar.removeAttribute("class"); 
    mdn.removeAttribute("class"); 
}
function fsouon(){
    localStorage.setItem("sc", "fsou") 
    sc.setAttribute("action", "https://fsofso.com/search")
     sc_text.setAttribute("placeholder", "F???")
     sc_text.setAttribute("name", "q")
     sc_text.focus()
    fsou.setAttribute("class", "active"); 
    bing.removeAttribute("class"); 
    baidu.removeAttribute("class"); 
    sogou.removeAttribute("class"); 
    _360.removeAttribute("class"); 
    google.removeAttribute("class"); 
    github.removeAttribute("class"); 
    gtrans.removeAttribute("class"); 
    bilibili.removeAttribute("class"); 
    zhihu.removeAttribute("class"); 
    gscholar.removeAttribute("class"); 
    mdn.removeAttribute("class"); 
}
function githubon(){
    localStorage.setItem("sc", "github") 
    sc.setAttribute("action", "https://github.com/search")
     sc_text.setAttribute("placeholder", "Github")
     sc_text.setAttribute("name", "q")
     sc_text.focus()
    github.setAttribute("class", "active"); 
    bing.removeAttribute("class"); 
    baidu.removeAttribute("class"); 
    sogou.removeAttribute("class"); 
    _360.removeAttribute("class"); 
    fsou.removeAttribute("class"); 
    google.removeAttribute("class"); 
    gtrans.removeAttribute("class"); 
    bilibili.removeAttribute("class"); 
    zhihu.removeAttribute("class"); 
    gscholar.removeAttribute("class"); 
    mdn.removeAttribute("class"); 
}
function gtranson(){
    localStorage.setItem("sc", "gtrans") 
    sc.setAttribute("action", "https://translate.google.cn/")
     sc_text.setAttribute("placeholder", "Google Translator")
     sc_text.setAttribute("name", "text")
     sc_text.focus()
    gtrans.setAttribute("class", "active"); 
    bing.removeAttribute("class"); 
    baidu.removeAttribute("class"); 
    sogou.removeAttribute("class"); 
    _360.removeAttribute("class"); 
    fsou.removeAttribute("class"); 
    github.removeAttribute("class"); 
    google.removeAttribute("class"); 
    bilibili.removeAttribute("class"); 
    zhihu.removeAttribute("class"); 
    gscholar.removeAttribute("class"); 
    mdn.removeAttribute("class"); 
}
function bilibilion(){
    localStorage.setItem("sc", "bilibili") 
    sc.setAttribute("action", "https://search.bilibili.com/all")
     sc_text.setAttribute("placeholder", "(???-???)?????? ??????~")
     sc_text.setAttribute("name", "keyword")
     sc_text.focus()
    bilibili.setAttribute("class", "active"); 
    bing.removeAttribute("class"); 
    baidu.removeAttribute("class"); 
    sogou.removeAttribute("class"); 
    _360.removeAttribute("class"); 
    fsou.removeAttribute("class"); 
    github.removeAttribute("class"); 
    gtrans.removeAttribute("class"); 
    google.removeAttribute("class"); 
    zhihu.removeAttribute("class"); 
    gscholar.removeAttribute("class"); 
    mdn.removeAttribute("class"); 
}
function zhihuon(){
    localStorage.setItem("sc", "zhihu") 
    sc.setAttribute("action", "https://www.zhihu.com/search")
     sc_text.setAttribute("placeholder", "?????????????????????")
     sc_text.setAttribute("name", "q")
     sc_text.focus()
    zhihu.setAttribute("class", "active"); 
    bing.removeAttribute("class"); 
    baidu.removeAttribute("class"); 
    sogou.removeAttribute("class"); 
    _360.removeAttribute("class"); 
    fsou.removeAttribute("class"); 
    github.removeAttribute("class"); 
    gtrans.removeAttribute("class"); 
    bilibili.removeAttribute("class"); 
    google.removeAttribute("class"); 
    gscholar.removeAttribute("class"); 
    mdn.removeAttribute("class"); 
}
function gscholaron(){
    localStorage.setItem("sc", "gscholar") 
    sc.setAttribute("action", "https://scholar.google.com/scholar")
    sc_text.setAttribute("placeholder", "Google Scholar")
    sc_text.setAttribute("name", "q")
    sc_text.focus()
    gscholar.setAttribute("class", "active"); 
    bing.removeAttribute("class"); 
    baidu.removeAttribute("class"); 
    sogou.removeAttribute("class"); 
    _360.removeAttribute("class"); 
    fsou.removeAttribute("class"); 
    github.removeAttribute("class"); 
    gtrans.removeAttribute("class"); 
    bilibili.removeAttribute("class"); 
    zhihu.removeAttribute("class"); 
    google.removeAttribute("class"); 
    mdn.removeAttribute("class"); 
}
function mdnon(){
    localStorage.setItem("sc", "mdn") 
    sc.setAttribute("action", "https://developer.mozilla.org/zh-CN/search")
     sc_text.setAttribute("placeholder", "MDN docs")
     sc_text.setAttribute("name", "q")
     sc_text.focus()
    mdn.setAttribute("class", "active"); 
    bing.removeAttribute("class"); 
    baidu.removeAttribute("class"); 
    sogou.removeAttribute("class"); 
    _360.removeAttribute("class"); 
    fsou.removeAttribute("class"); 
    github.removeAttribute("class"); 
    gtrans.removeAttribute("class"); 
    bilibili.removeAttribute("class"); 
    zhihu.removeAttribute("class"); 
    gscholar.removeAttribute("class"); 
    google.removeAttribute("class"); 
}
if( localStorage.getItem("sc") == null ){
    localStorage.setItem("sc", "bing")
}
if(localStorage.getItem("sc") == 'bing'){
    bingon()
}
if(localStorage.getItem("sc") == 'google'){
    googleon()
}
if(localStorage.getItem("sc") == 'baidu'){
    baiduon()
}
if(localStorage.getItem("sc") == 'sogou'){
    sogouon()
}
if(localStorage.getItem("sc") == '360'){
    _360on()
}
if(localStorage.getItem("sc") == 'fsou'){
    fsouon()
}
if(localStorage.getItem("sc") == 'github'){
    githubon()
}
if(localStorage.getItem("sc") == 'gtrans'){
    gtranson()
}
if(localStorage.getItem("sc") == 'zhihu'){
    zhihuon()
}
if(localStorage.getItem("sc") == 'bilibili'){
    bilibilion()
}
if(localStorage.getItem("sc") == 'gscholar'){
    gscholaron()
}
if(localStorage.getItem("sc") == 'mdn'){
    mdnon()
}