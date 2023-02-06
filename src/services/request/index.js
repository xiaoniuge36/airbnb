import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config";

class HYRequest {
  constructor(baseUrl, timeout) {
    // 构造函数
    this.instance = axios.create({
      // 封装axios
      baseURL: baseUrl,
      timeout: timeout,
    });

    this.instance.interceptors.response.use(
      (res) => {
        // 拦截器 拦截响应 返回res.data 也就是后端返回的数据 作用是把res.data返回出去
        return res.data;
      },
      (err) => {
        return err;
      }
    );
  }

  request(config) {
    // request方法 传入config 也就是请求的配置 例如url method data params  然后返回this.instance.request(config) 也就是axios的request方法
    // request方法
    return this.instance.request(config);
  }

  get(config) {
    // get方法 传入config 也就是请求的配置 例如url method data params  然后返回this.request({ ...config, method: "get" }) 也就是request方法
    // get方法
    return this.request({ ...config, method: "get" });
  }

  post(config) {
    // post方法 传入config 也就是请求的配置 例如url method data params  然后返回this.request({ ...config, method: "post" }) 也就是request方法
    // post方法
    return this.request({ ...config, method: "post" });
  }
}

// export default new HYRequest(BASE_URL, TIMEOUT); //eslint会警告具体来说，问题是默认导出是匿名的（即没有名称），检查配置认为这是不好的做法
const newhyRequest = new HYRequest(BASE_URL, TIMEOUT);
export default newhyRequest;
