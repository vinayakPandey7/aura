import axios from "axios";
// import uuid from 'react-uuid'
// import {
//   RANDOM_ID,
//   TOKEN,
//   TOKEN_CAPS,
//   UUID,
// } from "../constants/local.constant";
import { AXOIS_TIMEOUT } from "@/app/ts/constants/redux";

// export const BASE_URL = process.env.NEXT_PUBLIC_PP_API_BASE_URL;
export const BASE_URL = "https://aura-backend-0dnx.onrender.com";

axios.interceptors.request.use(
  (config: any) => {
    return config;
  },
  (error: any) => {
    // handle the error
    return Promise.reject(error?.response || error);
  }
);

// export const getAccessToken = () => {
//   if (typeof window === "undefined") return;
//   return localStorage.getItem(TOKEN_CAPS) || localStorage.getItem(TOKEN);
// };
const getInstance = ({ headers: _headers = {} }: { headers?: any }) => {
  // let randomId = localStorage.getItem(UUID) ?? localStorage.getItem(RANDOM_ID)
  // if (randomId === null) {
  //   randomId = uuid()
  //   localStorage.setItem(RANDOM_ID, randomId)
  // }

  const headers: any = {
    // ...{
    //   'Content-Type': 'application/json',
    //   version: '0.0.1',
    //   'client-id': process.env.NEXT_PUBLIC_PP_ORG_ID,
    //   'client-version': process.env.NEXT_PUBLIC_PP_CLIENT_VERSION,
    //   'client-type': process.env.NEXT_PUBLIC_PP_CLIENT_TYPE,
    //   randomId: localStorage.getItem(UUID) ?? randomId,
    // },
    ..._headers,
  };

  // const tokenContext = getAccessToken() ? { token: getAccessToken() } : null;
  // if (tokenContext) {
  //   headers["Authorization"] = `Bearer ${tokenContext.token}`;
  // }
  // if (typeof window !== 'undefined') {
  //   headers['randomId'] =
  //     localStorage.getItem('uuid') ?? localStorage.getItem('randomId')
  // }

  const Instance = axios.create({
    baseURL: BASE_URL,
    timeout: AXOIS_TIMEOUT,
    headers: headers,
  });
  Instance.interceptors.response.use(
    (response: any) => {
      return response;
    },
    (error: any) => {
      // handle the error
      return Promise.reject(
        error?.response?.data?.error || error?.response || error?.message
      );
    }
  );
  return Instance;
};

interface Config {
  params?: any;
  headers?: any;
}

export const Client: any = {
  get: (endpoint: string, config: Config = {}) => {
    let params: any = [];
    // if (config.params) {
    //   for (let p in config.params) {
    //     let key = p;
    //     if (Array.isArray(config.params[p])) {
    //       config.params[p].forEach((element: any) => {
    //         params.push(`${key}=${encodeURIComponent(element)}`);
    //       });
    //     } else {
    //       params.push(`${key}=${encodeURIComponent(config.params[p])}`);
    //     }
    //   }
    // }
    const Instance = getInstance({ headers: config.headers || {} });
    return Instance(endpoint, {
      params: config.params || {},
    });
  },
  post: (endpoint: string, data: any, config: Config = {}) => {
    let params: any = [];
    if (config.params) {
      for (let p in config.params) {
        let key = p;
        if (Array.isArray(config.params[p])) {
          config.params[p].forEach((element: any) => {
            params.push(`${key}=${encodeURIComponent(element)}`);
          });
        } else {
          params.push(`${key}=${encodeURIComponent(config.params[p])}`);
        }
      }
    }
    if (config.params) {
      return Client.get(endpoint + "?" + params.join("&"), {
        ...config,
        method: "GET",
      });
    }
    const Instance = getInstance({ headers: config.headers || {} });
    return Instance.post(endpoint, data, {
      params: config.params || {},
    });
  },
  delete: (endpoint: string, data: any, config: Config = {}) => {
    let params: any = [];
    if (config.params) {
      for (let p in config.params) {
        let key = p;
        if (Array.isArray(config.params[p])) {
          config.params[p].forEach((element: any) => {
            params.push(`${key}=${encodeURIComponent(element)}`);
          });
        } else {
          params.push(`${key}=${encodeURIComponent(config.params[p])}`);
        }
      }
    }
    if (config.params) {
      return Client.get(endpoint + "?" + params.join("&"), {
        ...config,
        method: "DELETE",
      });
    } else {
    }
    const Instance = getInstance({ headers: config.headers || {} });
    return Instance.delete(endpoint, data);
  },
  put: (endpoint: string, data: any, config: Config = {}) => {
    let params: any = [];
    if (config.params) {
      for (let p in config.params) {
        let key = p;
        if (Array.isArray(config.params[p])) {
          config.params[p].forEach((element: any) => {
            params.push(`${key}=${encodeURIComponent(element)}`);
          });
        } else {
          params.push(`${key}=${encodeURIComponent(config.params[p])}`);
        }
      }
    }
    if (config.params) {
      return Client.get(endpoint + "?" + params.join("&"), {
        ...config,
        method: "PUT",
      });
    } else {
    }
    const Instance = getInstance({ headers: config.headers || {} });
    return Instance.put(endpoint, data);
  },
};
