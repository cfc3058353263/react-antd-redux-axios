import Login from '../../components/login/login'
import Home from '../../components/home/connect'
import Main from '../../components/main/main'
import Container from '../../components/container'
import NotFont from '../../components/notFount'
import HydrologicalInformation from '../../components/utils/hydrologicalInformation'
import Workconditioninfo from '../../components/utils/workconditioninfo'
import Waterregime from '../../components/utils/waterregime'
const router = [
    {
        path: '/',
        componentName: Main,
        exact: true,
    }, {
        path: '/login',
        componentName: Login,
        exact: true,
        redirect: null
    }, {
        path: '/main',
        componentName: Main,
        redirect: null,
        exact: false,
        children: [ //注意如果要设置路由嵌套就取消exaxct严格模式
            {
                path: '/main/container',
                componentName: Container,
                exact: true
            }, {
                path: "/main/menu/waterRegime/hydrologicalInformation",
                componentName: HydrologicalInformation,
                exact: true
            }, {
                path: "/main/menu/workCondition/workconditioninfo",
                componentName: Workconditioninfo,
                exact: true
            }, {
                path: "/main/menu/workCondition/waterregime",
                componentName: Waterregime,
                exact: true
            }, {
                path: "/main/menu/addMenu",
                componentName: Home,
                exact: true
            },{
                path:null,
                componentName:NotFont
            }
        ]
    }, {  //404 页面 <Route compent={NotFont}/> 该方式 地址栏显示的路由不上NotFount
        path: null,
        componentName: NotFont
    }
]
export default router