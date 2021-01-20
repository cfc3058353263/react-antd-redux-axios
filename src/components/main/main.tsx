import './style.css'
import React, { Children, useEffect, useState } from 'react';
import { Layout, Menu } from 'antd';
import { PieChartOutlined, TeamOutlined } from '@ant-design/icons';
import { Route, useHistory, Switch, withRouter } from 'react-router-dom';
import router from '../../utils/router/router'
import MenuSize from '../../pages/menusize/menusize'
const { Sider } = Layout;
const { SubMenu } = Menu;

const Main: React.FC = (props: any) => {
    const history = useHistory()
    const [collapsed, setCollapsed] = useState(false)
    const [openKeys, setOpenKeys] = useState([])
    function toggle() {
        setCollapsed(!collapsed)
    }
    function MenuLisk({ item, key }) {
        history.push(key)
    }
    function onOpenChange(openKeys) {
        console.log(openKeys)
        setOpenKeys(openKeys)
    }
    function onOpenKeys() {
        const { pathname } = props.location;
        for (let item of MenuSize) {
            if (item.children) {
                for (let list of item.children) {
                    if (list.children) {
                        for (let data of list.children) {
                            if (data.key === pathname) {
                                setOpenKeys([item.key, list.key])
                            }
                        }
                    } else {
                        if (list.key === pathname) {
                            setOpenKeys([item.key])
                        }
                    }
                }
            } else {
                setOpenKeys([])
            }
        }
    }
    useEffect(() => {
        const token = localStorage.getItem('token')
        !token && history.push('/login')
        const {pathname} = props.location;
        pathname === "/" || pathname === "/main" && history.push('/main/container')        
        onOpenKeys()
        
    }, [])
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}
                collapsible collapsed={collapsed} onCollapse={toggle}>
                <div className="logo" >
                    LOGO
                </div>
                <Menu theme="dark" openKeys={openKeys} selectedKeys={[props.location.pathname]} onOpenChange={onOpenChange} mode="inline">
                    {
                        MenuSize.map((item) => {
                            if (!item.children) {
                                return (
                                    <Menu.Item key={item.key} icon={<PieChartOutlined />} onClick={MenuLisk}>
                                        {item.title}
                                    </Menu.Item>
                                )
                            } else {
                                return (
                                    <SubMenu key={item.key} icon={<TeamOutlined />} title={item.title}>
                                        {
                                            item.children.map((list) => {
                                                if (list.children) {
                                                    return (
                                                        <SubMenu key={list.key} title={list.title}>
                                                            {
                                                                list.children && list.children.map((data) => {
                                                                    return (
                                                                        <Menu.Item key={data.key} onClick={MenuLisk}>{list.title}</Menu.Item>
                                                                    )
                                                                })
                                                            }
                                                        </SubMenu>
                                                    )
                                                } else {
                                                    return (
                                                        <Menu.Item key={list.key} onClick={MenuLisk}>{list.title}</Menu.Item>
                                                    )
                                                }
                                            })
                                        }
                                    </SubMenu>
                                )
                            }
                        })
                    }
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Switch>
                    {
                        router.map((item) => {
                            if (item.path === '/main') {
                                return (
                                    item.children.map((children, index) => {
                                        return (
                                            <Route key={index} path={children.path} exact={children.exact} component={children.componentName} />
                                        )
                                    })

                                )
                            }
                        })
                    }
                </Switch>
            </Layout>
        </Layout>
    )
}
export default Main