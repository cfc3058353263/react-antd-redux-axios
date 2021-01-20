import React from 'react';
import { Button } from 'antd';
const Home = (props) => {
    
    const increment = () => {
        props.addNum()
    }
    return (
        <div>
            <Button type='primary' onClick={increment}>home页</Button>
            <h1>当前值:{props.num}</h1>
        </div>
    )
}
export default Home