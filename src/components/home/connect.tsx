//引入Home 无状态组件
import Home from './home'
import { connect } from 'react-redux'
//1.mapStateToProps 函数返回的是一个对象；
//2.return 返回的对象中的key就作为i传递给UI组件props的key，value就作为UI组件props的value
//3.mapStateToProps用于传递状态，说白了就是把 “值” 传递给子组件props
const mapStateToProps = (state) => {
    return {
        num: state.initState
    }
}
//1.mapDispatchToProps函数放回的是一个对象；
//2.返回的对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件的value
//3.mapDispatchToProps用于传递操作状态的方法 说白了就是把 “方法” 传递给子组件props
const mapDispatchToProps = (dispatch) => {
    return {
        addNum: () => {
            let action = {
                type: 'increment',
                data: 1
            }
            dispatch(action)
        }
    }
}
//                                                                 允许ref传值
export default connect(mapStateToProps, mapDispatchToProps, null, { forwardRef: true })(Home)