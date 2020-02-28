import Axios from 'axios';                              // 引入axios数据请求模块
import qs from 'qs';                                    // 引入qs格式转换模块
import router from '@/router/index';                     // 引入项目路由文件
import { Toast } from 'vant';
// import store from '@/vuex/store';                       // 引入Vuex状态管理
import { getToken, removeToken } from '@/utils/common/auth'
// 错误处理
const error_handle = (error) => {
    //如果是401则跳转到登录页面
    if (error.response.status === 401) {
        if (getToken()) {
            removeToken()
        }
        router.push({ path: "/" });
    }
    let message = error.response.data.message || error.response.data.msg  || error.response.data.error_description || '未知错误'
    if (error.response.status !== 200) {
        Toast.fail(message);
        return Promise.reject(message)
    }
    // 通过返回的状态码对错误进行处理
}

// Axios全局配置
Axios.defaults.timeout = 30000;                         // 请求的过期时间30秒

if (process.env.NODE_ENV == 'development') {            // 开发模式
    // Axios.defaults.baseURL = '/api'; // /api 该配置可自行修改，必须与config文件下的index.js下的proxyTable中配置的一致
} else {                                                // 生产模式
    // Axios.defaults.baseURL = 'http://192.168.18.236';
}
// http request 请求拦截器
Axios.interceptors.request.use(config => {
    // 设置请求头
    // config.withCredentials = true // 允许在请求头中携带token ,这个是解决跨域产生的相关问题
    // config.headers['access-token']: '' // 设置请求头中的access-token
    // config.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    // config.headers['Authorization'] = 'Basic bWVjaGM6bWVjaGNfc2VjcmV0';
    // if (getToken()) {
    //     config.headers['Blade-Auth'] = 'bearer ' + getToken() // 让每个请求携带token--['Authorization']为自定义key 请根据实际情况自行修改
    // }
    // // config.headers['Cookie'] = 'x-access-token=' + getToken();
    // config.headers['Tenant-Id'] = '383156';
    // config.headers['User-Type'] = 'nj.wx01';
    return config;
}, error => {
    return Promise.reject(error);
});

// http response 响应拦截器
Axios.interceptors.response.use(response => {
    const status = response.data.code || 200;
    const message = response.data.message || response.data.msg || response.data.error_description || '未知错误';
    //如果是401则跳转到登录页面
    if (status === 401) {
        if (getToken()) {
            removeToken()
        }
        router.push({ path: "/" });
    }
    // 如果请求为非200否者默认统一处理
    if (status !== 200) {
        Toast.fail(message);
        return Promise.reject(message)
    }
    return response;
}, error => {
    error_handle(error);
    return Promise.reject(error);
});

// 封装axios方法
export function fetch(method, url, params, flag = 0) { // flag 是否序列化 1不序列化 0需序列化
    if (method == 'GET' || method == 'get') {
        return new Promise((resolve, reject) => {               // get请求方式，data为json类型，会自动拼接到请求地址后面
            Axios.get(url, {
                params: params
            }).then(response => {
                if (typeof response != 'undefined') {
                    let res = {
                        status: response.status,
                        data: response.data
                    }
                    resolve(res);
                }
            }).catch(error => {
                reject(error);
            });
        });
    } else if (method == 'POST' || method == 'post') {
        return new Promise((resolve, reject) => {               // post请求方式，需要将data转换成json字符串
            if (flag == 1) {
                Axios.post(url, params).then(response => {
                    if (typeof response != "undefined") {
                        const res = {
                            status: response.status,
                            response: response.data
                        }
                        resolve(res)
                    }
                }, error => {
                    reject(error)
                })
            } else {
                Axios.post(url, qs.stringify(params)).then(response => {
                    if (typeof response != "undefined") {
                        const res = {
                            status: response.status,
                            response: response.data
                        }
                        resolve(res)
                    }
                }, error => {
                    reject(error)
                })
            }
        });
    } else if (method == 'PUT' || method == 'put') {
        return new Promise((resolve, reject) => {               // put请求方式，需要将data转换成json字符串
            Axios.put(url, qs.stringify(params)).then(response => {
                if (typeof response != 'undefined') {
                    let res = {
                        status: response.status,
                        response: response.data
                    }
                    resolve(res);
                }
            }, error => {
                reject(error);
            });
        });
    } else if (method == 'DEL' || method == 'del') {
        return new Promise((resolve, reject) => {               // delete请求方式，需要将data转换成json字符串
            Axios.delete(url, { data: qs.stringify(params) }).then(response => {
                if (typeof response != 'undefined') {
                    let res = {
                        status: response.status,
                        response: response.data
                    }
                    resolve(res);
                }
            }, error => {
                reject(error);
            });
        });
    } else if (method == 'PATCH' || method == 'patch') {
        return new Promise((resolve, reject) => {               // Patch请求方式，需要将data转换成json字符串
            Axios.patch(url, qs.stringify(params)).then(response => {
                if (typeof response != 'undefined') {
                    let res = {
                        status: response.status,
                        response: response.data
                    }
                    resolve(res);
                }
            }, error => {
                reject(error);
            });
        });
    }
}