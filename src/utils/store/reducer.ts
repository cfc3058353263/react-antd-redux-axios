/**
 * 1.reducer 函数会接到两个参数，分别为：之前的状态(preState),动作对象(action)
 * 2.动作对象action中有两个参数 分别为 type 和 data
 */
const defaultState = {  //设置初始数据
    initState: 0,
    toduList: []
}
const reducer = (preState = defaultState, action) => {
    const { type, data } = action
    //根据type决定如何加工数据
    switch (type) {
        case 'increment':
            let newState = JSON.parse(JSON.stringify(preState)) //深度拷贝
            newState.initState = newState.initState + data
            console.log(newState)
            return newState
        default:
            return preState
    }

}
export default reducer