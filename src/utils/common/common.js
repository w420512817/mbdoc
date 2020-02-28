/*
 * 公用JS方法
 * 使用大驼峰命名规范
*/
import Cookie from 'js-cookie';
/**
 * @desc 操作cookie
 * @param {type} set设置, get获取, remove移除
 * @param {name} cookie 别名
 * @param {data} cookie 数据
 * @param {time} cookie 过期时间
 * @param {Path} cookie 路径
 */
export function HandleCookie (type, name, data, time, Path) {
    if (Path) {
        if (type == 'set' && name && data) {
            Cookie.set(name, data, { expires: time, path: Path });
        } else if (type == 'get' && name && !data) {
            return Cookie.getJSON(name);
        } else if (type == 'remove' && name && data && time && Path) {
            Cookie.remove(name, { path: Path });
        }
    } else {
        if (type == 'set' && name && data) {
            Cookie.set(name, data, { expires: time });
        } else if (type == 'get' && name && !data) {
            return Cookie.getJSON(name);
        } else if (type == 'remove' && name && !data) {
            Cookie.remove(name);
        }
    }
}
/**
 * @desc 格式化时间
 * @param {time} 需要格式化的时间
 * @param {cFormat} 格式化的规则 {y}-{m}-{d} {h}:{i}:{s} {a} 或 {y}-{m}-{d} {h}:{i}:{s}
 */
export function FormatTime (time, cFormat) {
	if (arguments.length === 0) {
        return null
    }
    const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}';
    let date;
    if (typeof time === 'object') {
        date = time;
    } else {
        if (('' + time).length === 10) time = parseInt(time) * 1000;
        date = new Date(time);
    }
    const formatObj = {
        y: date.getFullYear(),
        m: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        i: date.getMinutes(),
        s: date.getSeconds(),
        a: date.getDay()
    }
    const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
		if (formatObj.a == 0) formatObj.a = 7;
        let value = formatObj[key];
        if (key === 'a') return ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'][value - 1];
        if (result.length > 0 && value < 10) {
            value = '0' + value;
        }
        return value || 0;
    });
    return time_str;
}
/**
 * @desc 获取地址中的查询参数，输出对象
 * @param {url} 地址连接（可不传，即为当前地址）
 */
export function GetUrlQuery (url) {
    url = url == null ? window.location.href : url;
    const search = url.substring(url.lastIndexOf('?') + 1);
    const queryObj = {};
    const reg = /([^?&=]+)=([^?&=]*)/g;
    search.replace(reg, (rs, $1, $2) => {
        const name = decodeURIComponent($1);
        let val = decodeURIComponent($2);
        val = String(val);
        queryObj[name] = val;
        return rs;
    });
    return queryObj;
}

/**
 * @desc 数组去重
 * @param {arr} 需要去重的数组
 * @returns {array} 去重后的数组
 */
export function Unique (arr) {
    let result = [], json = {};
    for (let i = 0, len = arr.length; i < len; i++) {
        if (!json[arr[i]]) {
            json[arr[i]] = 1;
            result.push(arr[i]); //返回没被删除的元素
        }
    }
    return result;
}
/**
 * @desc 字母大小写转换
 * @param {str} 需要转换的字符串
 * @param {type} {字符串} 1-首字母大写 2-首字母小写 3-大小写转换 4-全部大写 5-全部小写
 * @returns {String} 转换后的字符串
 */
export function ChangeCase (str, type) {
    function ToggleCase(str) {
        let itemText = ""
        str.split("").forEach(
            function (item) {
                if (/^([a-z]+)/.test(item)) {
                    itemText += item.toUpperCase();
                } else if (/^([A-Z]+)/.test(item)) {
                    itemText += item.toLowerCase();
                } else {
                    itemText += item;
                }
            });
        return itemText;
    }
    switch (type) {
        case '1':
            return str.replace(/\b\w+\b/g, function (word) {
                return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();
            });
        case '2':
            return str.replace(/\b\w+\b/g, function (word) {
                return word.substring(0, 1).toLowerCase() + word.substring(1).toUpperCase();
            });
        case '3':
            return ToggleCase(str);
        case '4':
            return str.toUpperCase();
        case '5':
            return str.toLowerCase();
        default:
            return str;
    }
}

/**
 * @desc 判断是否为空
 * @param {val}
 * @returns {boolean} 
 */
export function Validatenull(val) {
    if (typeof val == 'boolean') {
        return false;
    }
    if (typeof val == 'number') {
        return false;
    }
    if (val instanceof Array) {
        if (val.length == 0) return true;
    } else if (val instanceof Object) {
        if (JSON.stringify(val) === '{}') return true;
    } else {
        if (val == 'null' || val == null || val == 'undefined' || val == undefined || val == '') return true;
        return false;
    }
    return false;
}