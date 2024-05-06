<script>
import Searchbar from './Searchbar.vue';
import Iptoolkit from './compos/iptoolkit.vue';
import List1 from './compos/list1.vue';
import bt from './compos/bt.vue'
import pigeontoolkit from './compos/pigeontoolkit.vue'
import changetoolkit from './compos/changetoolkit.vue'

export default {
  components: {
    Searchbar,
    Iptoolkit,
    List1,
    bt,
    pigeontoolkit,
    changetoolkit
  },
  data() {
    return {
      tableConfig: {
        isTable: true,
        tableSize: 6,
        tableLineSize: 3,
        tableSites: [],
      },
      docTableConfig: {
        isTable: true,
        tableSize: 50,
        tableLineSize: 4,
        tableSites: [],
      },
      /* list_oldv: {
          tafter: "",
          tafterdisplay: true,
          tl1: "",
          id1: "#oldv",
          sites: [
              {
                  u:"",
                  n:"",
                  discribe:"",
              },{
                  u:"",
                  n:"",
                  discribe:"",
              },
          ]
      }, */
      // 常用 changyong
      list_changyong: {
        tl1: "常用链接",
        id1: "#changyong",
        sites: [
          {
            u: "https://github.com/",
            n: "Github",
            discribe: "知名开源编程网站，里面有计算机相关和无关的各种东西。",
          }, {
            u: "https://chat.openai.com/chat",
            n: "ChatGPT",
            discribe: "ChatGPT可以帮你写作业，修改代码、文章和邮件。",
          }, {
            u: "https://space.bilibili.com/15611844/favlist?fid=2466132544",
            n: "Bilibili",
            discribe: "哔哩哔哩音乐收藏。打开后，B站可以作为听歌软件。",
          }, {
            u: "https://www.lib.whu.edu.cn/",
            n: "图书馆",
            discribe: "武汉大学图书馆主页。在图书馆可以借到课本和参考书，有些水货也会去这里借课外书看。",
          }, {
            u: "https://singlelogin.se/",
            n: "Zlibrary",
            discribe: "Zlibrary的最新链接。下载速度相对较快，但是不付费每天只能下载10本书。资源很全，需要注册。",
          }, {
            u: "https://mail.google.com/",
            n: "Gmail",
            discribe: "国际化的谷歌邮箱系统，但是需要一点上网技巧才能使用。"
          },
          {
            u: "https://ditu.amap.com/",
            n: "高德地图",
            discribe: "在大陆地区比较好用的网页版地图。"
          },
          {
            u: "https://mail.qq.com/",
            n: "QQ邮箱",
            discribe: "可能是中国大陆最常用到的邮箱系统。"
          }
        ]
      },
      // 文档 document
      list_document: {
        tl1: "文档",
        id1: "#document",
        sites: [
          {
            u: "https://www.w3school.com.cn/",
            n: "W3school",
          }, {
            u: "https://www.runoob.com/",
            n: "菜鸟教程",
          }, {
            u: "https://developer.mozilla.org/zh-CN/",
            n: "mdn",
          }, {
            n: "C++",
            u: "https://docs.microsoft.com/zh-cn/cpp/",
          }, {
            n: "C",
            u: "https://docs.microsoft.com/zh-cn/cpp/",
          }, {
            n: "C#",
            u: "https://docs.microsoft.com/zh-cn/dotnet/csharp/",
          }, {
            n: "Java",
            u: "https://docs.oracle.com/javase/8/docs/api/",
          }, {
            n: "Python",
            u: "https://docs.python.org/zh-cn/3/",
          }, {
            n: "JavaScript",
            u: "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference",
          }, {
            n: "Vue3",
            u: "https://v3.cn.vuejs.org/",
          }, {
            n: "React",
            u: "https://zh-hans.reactjs.org/",
          }, {
            n: "Node.js",
            u: "https://nodejs.org/zh-cn/",
          }, {
            n: "MySQL",
            u: "https://dev.mysql.com/doc/",
          }, {
            n: "MongoDB",
            u: "https://docs.mongodb.com/",
          }, {
            n: "Springboot",
            u: "https://spring.io/projects/spring-boot",
          }, {
            n: "Docker",
            u: "https://docs.docker.com/",
          }, {
            n: "Kubernetes",
            u: "https://kubernetes.io/zh-cn/",
          }, {
            n: "Git",
            u: "https://git-scm.com/",
          }, {
            n: "GitHub",
            u: "https://github.com/",
          }, {
            n: "Django",
            u: "https://www.django.org/",
          }, {
            n: "Flask",
            u: "https://flask.palletsprojects.com/",
          }, {
            n: "Linux",
            u: "https://www.linuxidc.com/",
          },
        ],
      },
      // 校园 campus
      list_campus: {
        tl1: "校园",
        id1: "#campus",
        sites: [
          {
            u: "https://www.lib.whu.edu.cn/",
            n: "图书馆",
            discribe: "武汉大学图书馆主页。在图书馆可以借到课本和参考书，有些水货也会去这里借课外书看。",
          }, {
            u: "http://opac.lib.whu.edu.cn/F/",
            n: "馆藏查询",
            discribe: "武汉大学图书馆馆藏查询和预约管理。旧版的图书馆主页，但是预约查询等功能依然在这里。",
          }, {
            u: "https://s.ringjoys.com/",
            n: "给分查询",
            discribe: "非官方武汉大学本科课程给分查询平台。选课圣经。",
          }, {
            u: "https://jwgl.whu.edu.cn/",
            n: "教务系统",
            discribe: "武汉大学教务管理系统。查询成绩和课表，看到成绩后一整天的心情都变了。",
          }, {
            u: "https://ehall.whu.edu.cn/new/index.html#/",
            n: "信息门户",
            discribe: "武汉大学信息门户主页。信息门户集合了学校邮箱、官网主页和办事大厅，可以在这里办很多事。",
          }, {
            u: "https://kxdz.whu.edu.cn",
            n: "成绩单",
            discribe: "武汉大学可信电子证明打印。除了成绩单打印，还有一个奇妙的功能。",
          }, {
            u: "https://github.com/openwhu/OpenWHU/",
            n: "课程资料",
            discribe: "OpenWHU非官方开源课程资料分享项目。这里有一些专业课、必修课和选修课的试卷、PPT、笔记等资料。",
          }, {
            u: "https://cslabcg.whu.edu.cn/indexcs/simple.jsp?loginErr=0",
            n: "希冀",
            discribe: "武汉大学计算机学院作业平台。晚上会维护。",
          },
        ]
      },
      // 电子书 ebook
      list_ebook: {
        tl1: "电子书专用",
        id1: "#ebook",
        sites: [
          {
            u: "https://singlelogin.se/",
            n: "Zlibrary",
            discribe: "Zlibrary的最新链接。下载速度相对较快，但是不付费每天只能下载10本书。资源很全，需要注册。",
          }, {
            u: "https://annas-archive.org/",
            n: "Annas",
            discribe: "Zlibrary备用下载库之一。这里没有一天10本书的限制。",
          }, {
            u: "https://nav.yibook.org/",
            n: "易书网",
            discribe: "电子书网盘资源导航。在Zlib域名频繁更换的时期发挥了巨大作用，但是现在好像必要性不大。",
          },
        ]
      },
      // 学习 xuexi
      list_xuexi: {
        tl1: "学习",
        id1: "#xuexi",
        sites: [
          {
            u: "https://leetcode.cn/problemset/all/",
            n: "leetcode",
            discribe: "Leetcode是计算机毕业生准备就业面试时必用的算法练习网站。当然，做了也不一定能找到工作。",
          }, {
            u: "https://github.com/",
            n: "Github",
            discribe: "知名开源编程网站，里面有计算机相关和无关的各种东西。",
          }, {
            u: "https://chat.openai.com/chat",
            n: "ChatGPT",
            discribe: "ChatGPT可以帮你写作业，修改代码、文章和邮件。",
          }, {
            u: "https://translate.google.com/",
            n: "Google翻译",
            discribe: "Google翻译支持多种常见的语言，准确度很不错，缺点是需要挂梯子。",
          },
        ]
      },
      // 工具 tools
      list_tools: {
        tl1: "小工具",
        id1: "#tools",
        sites: [
          {
            u: "https://ikuuu.org/",
            n: "iKuuu",
            discribe: "每月12元的科学上网工具。提供世界各大国家和地区的服务，主要是香港和日本的线路。蓝绿支付软件即可付款，性价比非常高。",
          }, {
            u: "https://github.com/freefq/free",
            n: "Freefq",
            discribe: "免费通过V2ray实现科学上网。适合用于过渡。随着免费梯子越来越难找，这里的代理稳定性也在下降。",
          }, {
            u: "https://steamdb.info/",
            n: "Steamdb",
            discribe: "Steam平台历史价格查询网站。查询各区游戏的历史低价。",
          }, {
            u: "https://mp.weixin.qq.com/",
            n: "公众号",
            discribe: "微信公众号管理平台。",
          }, {
            u: "https://bili.iiilab.com/",
            n: "iiilab下载站",
            discribe: "解析主流网站视频并提供下载。可以把视频下载到本地，再由本地软件转换为各种格式。支持Youtube, Bilibili等大型视频网站。",
          }, {
            u: "https://mail.google.com/",
            n: "Gmail",
            discribe: "国际化的谷歌邮箱系统，但是需要一点上网技巧才能使用。"
          },
          {
            u: "https://ditu.amap.com/",
            n: "高德地图",
            discribe: "在大陆地区比较好用的网页版地图。"
          },
          {
            u: "https://mail.qq.com/",
            n: "QQ邮箱",
            discribe: "可能是中国大陆最常用到的邮箱系统。"
          },
        ]
      },
      // 娱乐 entertain
      list_entertain: {
        tl1: "娱乐专区",
        id1: "#entertain",
        sites: [
          {
            u: "https://game.maj-soul.net/1/",
            n: "雀魂",
            discribe: "知名二次元网络日麻，魂类游戏，心理恐怖游戏，褒贬不一。",
          }, {
            u: "https://online-go.com/",
            n: "围棋对战",
            discribe: "免费在线围棋对战网站。不像麻将那样依赖概率。",
          }, {
            u: "https://www.101weiqi.com/",
            n: "101围棋",
            discribe: "围棋死活题在线训练和对战。提升棋力。",
          }, {
            u: "https://www.youtube.com/",
            n: "Youtube",
            discribe: "国外主流视频网站。需要科学上网使用。",
          }, {
            u: "https://twitter.com/",
            n: "Twitter",
            discribe: "国外知名网络社区。需要科学上网使用。",
          }, {
            u: "https://www.bilibili.com/",
            n: "Bilibili",
            discribe: "大名鼎鼎的B站，可以是二次元也可以是三次元。",
          },
        ]
      },
      // 旧版本保留网页的导航 oldv
      list_oldv: {
        tafter: "这是使用Vue3搭建的新版本网页，而旧版本完全使用Html、Js和Css实现。新版本未保留旧版本的全部功能，因此在这里提供一些旧版链接。但是，并不是所有的旧版功能都在此可用。Github仓库的main分支提供了旧版本网页的完整源代码，可以参考。",
        tafterdisplay: true,
        tl1: "旧版网页",
        id1: "#oldv",
        sites: [
          {
            u: "./old/index.html",
            n: "搜索页",
            discribe: "旧的搜索框页面，仅有基本的搜索功能和一个侧边导航栏。",
          }, {
            u: "./old/navi.html",
            n: "导航页",
            discribe: "旧的完整导航页面。",
          }, {
            u: "./old/xuexi.html",
            n: "学习页",
            discribe: "一些学习资料的分享，主要是大二下学期的计算机专业课程。",
          }, {
            u: "./old/english.html",
            n: "英语播放器",
            discribe: "可以学习英语听力的播放器，曾经用于准备六级考试。",
          },
        ]
      },
    }
  }
}
</script>
<template>
  <div id="index_main">
    <div id="s">
      <Searchbar></Searchbar>
    </div>
    <div id="tk">
      <!-- toolkits -->
      <Iptoolkit></Iptoolkit>
      <changetoolkit></changetoolkit>
      <!-- <pigeontoolkit></pigeontoolkit> -->
    </div>
    <div id="ld">
      <!-- lists -->
      <List1 :listinfo="list_document" :config="docTableConfig" id="changyong"></List1>
      <List1 :listinfo="list_changyong" :config="tableConfig" id="changyong"></List1>
      <List1 :listinfo="list_campus" id="campus"></List1>
      <List1 :listinfo="list_ebook" id="ebook"></List1>
      <List1 :listinfo="list_xuexi" id="xuexi"></List1>
      <List1 :listinfo="list_tools" id="tools"></List1>
      <List1 :listinfo="list_entertain" id="entertain"></List1>
      <List1 :listinfo="list_oldv" id="oldv"></List1>
    </div>
    <div id="bt">
      <!-- button -->
      <bt style="color: darkblue;"></bt>
    </div>
  </div>
</template>
<style>
#ld {
  width: 100%;
}

#tk {
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  overflow-x: scroll;
  background-color: rgba(32, 32, 32, 0.05);
  height: max-content;
  margin-top: 20vh;
  border-radius: 15px;
}

#tk div {
  margin: 5px 5px 5px 5px;
  color: darkblue;
  background: linear-gradient(180deg, #f0f8ff, #97dbf6);
  border: 2px solid darkblue;
  border-radius: 15px;
  height: 30vh;
  width: 30vh;
  min-width: 30vh;
}

.t001, .t003 {
  overflow-y: auto;
}

#s {
  margin: 1vh 1vi;
}

#s #d {
  margin: 25vh auto 20vh auto;
}

#index_main {
  margin: auto;
  width: 80vi;
  max-width: 960px;
}

body {
  background: linear-gradient(180deg, #f0f8ff, #97dbf6);
  background-attachment: fixed;
}
</style>