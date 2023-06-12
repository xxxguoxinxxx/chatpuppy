/**
 * Created by PanJiaChen on 16/11/18.
 */
// import { Toast } from 'vant';
/**
 * Parse the time to string
 * @param {(Object|string|number)} time
 * @param {string} cFormat
 * @returns {string}
 */
export function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null;
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}';
  let date;
  if (typeof time === 'object') {
    date = time;
  } else {
    if (typeof time === 'string' && /^[0-9]+$/.test(time)) {
      time = parseInt(time);
    }
    if (typeof time === 'number' && time.toString().length === 10) {
      time = time * 1000;
    }
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
  };
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key];
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') {
      return ['日', '一', '二', '三', '四', '五', '六'][value];
    }
    if (result.length > 0 && value < 10) {
      value = '0' + value;
    }
    return value || 0;
  });
  return time_str;
}

/**
 * @param {number} time
 * @param {string} option
 * @returns {string}
 */
export function formatTime(time, option) {
  if (('' + time).length === 10) {
    time = parseInt(time) * 1000;
  } else {
    time = +time;
  }
  const d = new Date(time);
  const now = Date.now();

  const diff = (now - d) / 1000;

  if (diff < 30) {
    return '刚刚';
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + '分钟前';
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前';
  } else if (diff < 3600 * 24 * 2) {
    return '1天前';
  }
  if (option) {
    return parseTime(time, option);
  } else {
    return d.getMonth() + 1 + '月' + d.getDate() + '日' + d.getHours() + '时' + d.getMinutes() + '分';
  }
}

/**
 * @param {string} url
 * @returns {Object}
 */
export function param2Obj(url) {
  const search = url.split('?')[1];
  if (!search) {
    return {};
  }
  return JSON.parse(
    '{"' +
      decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"').replace(/\+/g, ' ') +
      '"}'
  );
}

export const after = (times, fn) =>
  function (...args) {
    if (--times === 0) {
      fn.call(this, ...args);
    }
  };

export const debounce = (func, wait = 500) => {
  let timeout;
  return function (event) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.call(this, event);
    }, wait);
  };
};

/**
 * @desc 高亮关键字
 * @param {String} originText 原始文本
 * @param {String} highLightWord 关键字
 */
export const highLight = (originText, highLightWord) => {
  let newText = originText;
  if (highLightWord) {
    // 匹配关键字正则
    const replaceReg = new RegExp(highLightWord, 'g');
    // 高亮替换v-html值
    const replaceString = '<span class="highLight_text">' + highLightWord + '</span>';

    newText = newText.replace(replaceReg, replaceString);
  }
  return newText;
};

// 清除一个obj中所有数据
export const clearObj = Obj => {
  function getClass(o) {
    // 判断数据类型
    return Object.prototype.toString.call(o).slice(8, -1);
  }
  Object.keys(Obj).forEach(item => {
    if (getClass(Obj[item]) === 'Object') {
      if (Object.keys(Obj[item]).length > 0) {
        clearObj(Obj[item]);
      } else {
        Obj[item] = {};
      }
    } else if (getClass(Obj[item]) === 'Array') {
      Obj[item] = [];
    } else if (getClass(Obj[item]) === 'Number') {
      Obj[item] = null;
    } else if (getClass(Obj[item]) === 'Null') {
      Obj[item] = null;
    } else if (getClass(Obj[item]) === 'String') {
      Obj[item] = '';
    } else if (getClass(Obj[item]) === 'Boolean') {
      Obj[item] = false;
    }
  });
  return Obj;
};


/**
 * 格式化秒
 * @param second
 * @returns {string}
 */
export function formatSecond(second) {
  const h = Math.floor((second / 3600) % 24);
  const m = Math.floor((second / 60) % 60);
  const s = Math.floor(second % 60);
  let result = s + '秒';
  if (m > 0) {
    result = m + '分钟' + result;
  }
  if (h > 0) {
    result = h + '小时' + result;
  }

  return result;
}
