/*
 * 异步创建script标签
 */
export default function MapLoader(key) {
  return new Promise((resolve, reject) => {
    if (window.AMap) {
      resolve(window.AMap);
    } else {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.src = 'https://webapi.amap.com/maps?v=1.4.15&key=59026af30cfd56d7a23de6f0416152e9';
      script.onerror = reject;
      document.head.appendChild(script);
    }
    window.initAMap = () => {
      resolve(window.AMap);
    };
  });
}
