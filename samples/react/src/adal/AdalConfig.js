import { AuthenticationContext, adalFetch} from "react-adal";

export const adalConfig = {
  tenant: "TENANT_ID",
  clientId: "CLIENT_ID",
  endpoints: {
    api: "CLIENT_ID",
  },
  cacheLocation: "localStorage",
};
export const apiUrl = endpoint => `https://abw2-li64is-api.azurewebsites.net/api/v1/${endpoint}`;
export const ethereumApiUrl = endpoint => `https://eth-api.azurewebsites.net/eth/api/${endpoint}`;

export const authContext = new AuthenticationContext(adalConfig);

export const adalApiFetch = (fetch, url, options) =>
  adalFetch(authContext, adalConfig.endpoints.api, fetch, url, options);
