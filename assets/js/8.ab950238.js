(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{406:function(t,s,a){"use strict";a.r(s);var n=a(56),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"python实现自动抠图-下篇"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#python实现自动抠图-下篇"}},[t._v("#")]),t._v(" Python实现自动抠图（下篇）")]),t._v(" "),a("p",[t._v("我们"),a("a",{attrs:{href:"https://blog.csdn.net/weixin_40840714/article/details/97102224",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("上篇")]),a("OutboundLink")],1),t._v("已经讲完了python实现自动扣图的关键代码，那下篇还有啥存在的必要呢？？？\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190724093439716.gif",alt:"在这里插入图片描述"}}),t._v("\n        答案是否定的。作为一个有理想、有抱负、勇担中华民族复习大任的入门级小白程序员，岂能止步于此。上面我们讲到，用三行代码实现了抠图。但是，我们使用到的是绝对路径，每次进行抠图都需要进行修改，这能忍吗？？？\n        于是想进行一些改进，即运行程序让用户自己选择图片，进行抠除。其实涉及的技术也是很简单，就是python打开文件夹选择文件，用到了win32ui模块。没有该模块的用户可以通过pip install pywin32进行安装，当然前提是配置好了python环境。")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("from removebg "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" RemoveBg\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" win32ui\n\ndlg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" win32ui"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("CreateFileDialog")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  # "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("表示打开文件对话框\ndlg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("SetOFNInitialDir")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'E:/图片'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  # 设置打开文件对话框中的初始显示目录\ndlg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("DoModal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfilename "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" dlg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetPathName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  # 获取选择的文件名称\n\nrmbg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("RemoveBg")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"kRSbRHJZePGWnEBfKeqFbtSz"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"error.log"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" # 引号内是你获取的"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("API")]),t._v("\nrmbg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("remove_background_from_img_file")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("filename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" # 图片地址\n")])])]),a("p",[t._v("这样简单修改后用户就可以自主选择图片了，值得一提的是remove_background_from_img_file函数已经经过了一些异常处理，所以选择除图片之外的文件不会出现错误。\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190724095507844.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MDg0MDcxNA==,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}}),t._v("\n        仿佛到这里已经差不多了，但还是感觉哪里不对劲。每次进行抠图都需要打开pycharm，然后运行程序？？？这太麻烦了。。。于是乎，想用pyinstaller模块将程序打包为可执行文件。（ps.py为我的脚本名称）")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("pyinstaller "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("F")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("w ps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("py \n")])])]),a("p",[t._v("生成的可执行文件位置在项目文件夹中自动生成的dist文件夹里。\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/201907241006324.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MDg0MDcxNA==,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}}),t._v(" "),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190724100910122.png",alt:"在这里插入图片描述"}}),t._v("\n双击exe文件，正常打开，图片抠除正常，nice！！！\n正当准备收工时，突然想到，一些逼格很高的项目不都是安装程序吗？？？于是，自己也想给这个卑微的项目制作一个安装包。打包软件用的是"),a("a",{attrs:{href:"http://hmne.sourceforge.net",target:"_blank",rel:"noopener noreferrer"}},[t._v("NIS EDIT"),a("OutboundLink")],1),t._v("，大家有兴趣可以了解一些，这里推荐一个教程https://blog.csdn.net/signjing/article/details/7855855 ，比较详细。\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190724101857616.png",alt:""}}),t._v("\nps.exe为安装程序，ps.nsi即使利用上面程序生成的脚本文件。下图是安装过程：\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190724101958566.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MDg0MDcxNA==,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}}),t._v(" "),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190724102121555.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MDg0MDcxNA==,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}}),t._v("\nok，安装成功，完美撒花（卑微求点赞）。\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190724102136223.png",alt:"在这里插入图片描述"}}),t._v("\n最后，把安装程序放在网盘上，大家可自由下载。链接：https://pan.baidu.com/s/1pRKgzDsPE39swKtNNhM3BA\n提取码：gjvi")])])}),[],!1,null,null,null);s.default=e.exports}}]);