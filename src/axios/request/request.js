/*
 * 项目全部的数据请求方法，方便统一管理
 * 需要引入fetch (请求方法)，api (请求地址)
 */

import { fetch } from '../http/http';               // 引入请求方法
import api from '../api/api';                       // 引入请求地址

/*
 * 账号密码登录
 */
export const Login = data => fetch('POST', api.login, data);
