const Menusize = [
    {
        key: '/main/container',
        title: "主页",
        children:null
    }, {
        key: "/main/menu",
        title: '功能',
        children: [
            {
                key: '/main/menu/waterRegime',
                title: '水情信息',
                children: [
                    {
                        key: "/main/menu/waterRegime/hydrologicalInformation",
                        title: '水情信息查询'
                    }
                ]

            }, {
                key: '/main/menu/workCondition',
                title: '工况信息',
                children: [
                    {
                        key: "/main/menu/workCondition/workconditioninfo",
                        title: '基础信息',
                    },
                    {
                        key: "/main/menu/workCondition/waterregime",
                        title: '运行信息'
                    }
                ]
            }, {
                key:"/main/menu/addMenu",
                title: '功能添加',
                children:null
            }
        ]
    },
]
export default Menusize;
