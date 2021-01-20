//引入createStore，专门用于创建redux中最为核心的store对象
import {createStore} from 'redux'
//引入reducer专门用于store的数据处理
import reducer from "./reducer"
//暴露store
export default createStore(reducer)