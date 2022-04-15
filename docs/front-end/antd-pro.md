---
date: 2020-07-21
category: 前端
tag:
  - antd
---
# antdpro5常用代码

## 1. 中文配置

```javascript
export function rootContainer(container: React.ReactNode) {
  return React.createElement(
    ConfigProvider,
    {
      locale: zhCN,
    },
    container,
  );
}
```

## 2.http处理

```javascript
const errorHandler = (error: { response: Response }) => {
  const { response } = error;
  if (response && response.status) {
    const errorText = codeMessage[response.status] || response.statusText;
    const { status, url } = response;

    if (response.status != 401) {
      notification.error({
        message: `请求错误 ${status}: ${url}`,
        description: errorText,
      });
    }
  }

  if (!response) {
    notification.error({
      description: '您的网络发生异常，无法连接服务器',
      message: '网络异常',
    });
  }
  throw error;
};

const baseUrl: string = window.baseUrl ? window.baseUrl : '/api/control';
export const request: RequestConfig = {
  errorHandler,
  requestInterceptors: [
    (url, options) => {
      let targetUrl;
      const localOptions = options as any;
      if (localOptions.useOriginalUrl) {
        targetUrl = url;
      } else {
        targetUrl = baseUrl + url;
      }
      const newOptions: RequestOptionsInit = {
        ...localOptions,
        interceptors: true,
      };
      if (!newOptions.headers) {
        newOptions.headers = {};
      }
      if (!(localOptions.data instanceof FormData)) {
        if (!newOptions.headers['Content-Type']) {
          newOptions.headers['Content-Type'] = 'application/json';
        }
        if (localOptions.data && typeof localOptions.data !== 'string') {
          newOptions.data = JSON.stringify(localOptions.data);
        }
      }
      return {
        url: targetUrl,
        options: newOptions,
      };
    },
  ],
  responseInterceptors: [
    (response) => {
      if (response.status === 401) {
        notification.error({
          message: '登录已失效',
          description: '登录过期, 请重新登录',
        });
        history.push('/user/login');
      }
      if (response.status !== 200) {
        return new Response(
          JSON.stringify({ errCode: response.status, errMsg: response.statusText }),
          {
            status: response.status,
            statusText: response.statusText,
            headers: response.headers,
          },
        );
      }
      return response;
    },
  ],
};
```
