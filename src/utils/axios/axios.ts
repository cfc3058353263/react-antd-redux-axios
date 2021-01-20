import axios from 'axios';

// 请求拦截
axios.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    if (token) {
        config.headers.token = token
    }
    return config
}, (err) => {
    return Promise.reject(err)
});

//响用拦截
axios.interceptors.response.use((res) => {
    return Promise.resolve(res);
}, (err) => {
    return Promise.reject(err);
});

export function get(url, params) {
    return new Promise((res, rej) => {
        axios({
            method: 'GET',
            url: "http://124.128.244.106:9100/" + url,
            params: params,
        }).then(response => {
            res(response.data)
        }).catch(err => {
            rej(err)
        })
    })
}

export function post(url, data) {
    return new Promise((res, rej) => {
        axios({
            method: 'POST',
            url: "http://124.128.106:9100/" + url,
            data: data
        }).then(response => {
            res(response.data)
        }).catch(err => {
            rej(err)
        })
    })
}