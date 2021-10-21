// insertcode 菜单
_e(function (E, $) {
    E.createMenu(function (check) {
        var menuId = 'custom';
        if (!check(menuId)) {
            return;
        }

        var editor = this;

        // 创建 menu 对象
        var menu = new E.Menu({
            editor: editor,
            id: menuId,
            title: '插入模板'
        });

        // click 事件
        menu.clickEvent = function (e) {
            var html = '<div class="cms-custom-model-01"style="display: inline-block;padding: 10px;vertical-align: top;border-style: none;border-width: 2px;border-color: rgb(5, 5, 5);box-shadow: rgb(105 104 104) 0px 0px 5px;"><div class="cms-custom-model-img"style="float: left;width: 80px;margin: 10px 20px 0 0;"><img src="http://img.haoyunbang.cn/partner/2021/10/a32e6f50-0e9d-456e-868b-17f99b1481ec.png"style="max-width: 100%;"></div><p class="cms-custom-model-content"style="color: rgb(0, 0, 0);font-size: 10.5pt;font-weight: 400;line-height: 25px;margin: 0 !important;text-align: justify;"><strong style="font-size: 15px;display: block;color: rgb(71, 193, 168);font-weight: 700;">于洋主治医师，博士</strong><strong style="font-size: 15px;display: block;color: rgb(71, 193, 168);font-weight: 700;">吉大一院生殖产前遗传中心</strong><font face="宋体">现任中国性医学会青年委员会常委，中国性学会妇幼保健男科分会委员会委员，中国性学会手术学分会委员，优生科学学会青年委员。毕业于吉林大学中日联谊医院。擅长男性不育，流产死胎等常见病的诊断和治疗，尤其是重度少弱精子症及无精子症的诊治。参加中国男科显微外科培训中心首期培训班，取得优秀成绩，并完成了吉林省首例无精子症患者显微取精术，每年完成该手术近100例。曾于上海人类精子库、重庆市生殖与遗传研究所、北京大学第三医院、郑州大学附属第一医院进修学习。承担本科生及留学生教学工作。参加国家级级科研项目1项，发表核心期刊论文10篇，SCI文章20余篇。</font></p></div>';
            editor.command(e, 'insertHtml', html);
        };

        // 增加到editor对象中
        editor.menus[menuId] = menu;
    });

});