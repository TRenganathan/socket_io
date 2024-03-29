// /*
//  * Copyright (c) Microsoft Corporation. All rights reserved.
//  * Licensed under the MIT License.
//  */

// import { LogLevel } from '@azure/msal-browser';

// /**
//  * Enter here the user flows and custom policies for your B2C application
//  * To learn more about user flows, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/user-flow-overview
//  * To learn more about custom policies, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/custom-policy-overview
//  */

// const clientId = '615bc3b4-5129-4080-8167-c74363f7c0de';
// // const tenantName = '79675fd9-7b62-45d2-b440-9b997ac59a08';

// const flows = {
//     localAccSignIn: 'B2C_1_main_flow', //e.g., B2C_1_main_flow
//     msid: 'B2C_1_msid',
// }

// const activeFlow = flows.localAccSignIn;

// // export const b2cPolicies = {
// //     names: {
// //         signUpSignIn: activeFlow
// //     },
// //     authorities: {
// //         signUpSignIn: {
// //             authority: `https://${tenantName}.b2clogin.com/${tenantName}.onmicrosoft.com/${activeFlow}`,
// //         }
// //     },
// //     authorityDomain: `${tenantName}.b2clogin.com`,
// //     authorityMetadata: '{"token_endpoint": "https://login.microsoftonline.com/common/oauth2/v2.0/token", "token_endpoint_auth_methods_supported": ["client_secret_post", "private_key_jwt", "client_secret_basic"], "jwks_uri": "https://login.microsoftonline.com/common/discovery/v2.0/keys", "response_modes_supported": ["query", "fragment", "form_post"], "subject_types_supported": ["pairwise"], "id_token_signing_alg_values_supported": ["RS256"], "response_types_supported": ["code", "id_token", "code id_token", "id_token token"], "scopes_supported": ["' + clientId + '", "openid", "profile", "email", "offline_access"], "issuer": "https://login.microsoftonline.com/' + tenantName + '/v2.0", "request_uri_parameter_supported": false, "userinfo_endpoint": "https://graph.microsoft.com/oidc/userinfo", "authorization_endpoint": "https://login.microsoftonline.com/common/oauth2/v2.0/authorize", "device_authorization_endpoint": "https://login.microsoftonline.com/common/oauth2/v2.0/devicecode", "http_logout_supported": true, "frontchannel_logout_supported": true, "end_session_endpoint": "https://login.microsoftonline.com/common/oauth2/v2.0/logout", "claims_supported": ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], "kerberos_endpoint": "https://login.microsoftonline.com/common/kerberos", "tenant_region_scope": null, "cloud_instance_name": "microsoftonline.com", "cloud_graph_host_name": "graph.windows.net", "msgraph_host": "graph.microsoft.com", "rbac_url": "https://pas.windows.net"}'
// // };

// /**
//  * Configuration object to be passed to MSAL instance on creation.
//  * For a full list of MSAL.js configuration parameters, visit:
//  * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/configuration.md
//  */
// export const msalConfig = {
//     auth: {
//         clientId: clientId, // This is the ONLY mandatory field that you need to supply.
//         // authority: b2cPolicies.authorities.signUpSignIn.authority, // Choose SUSI as your default authority.
//         // authority: 'https://login.microsoftonline.com/79675fd9-7b62-45d2-b440-9b997ac59a08', // Choose SUSI as your default authority.
//         // knownAuthorities: [b2cPolicies.authorityDomain], // Mark your B2C tenant's domain as trusted.
//         redirectUri: 'http://localhost:3000/dcc/login', // You must register this URI on Azure Portal/App Registration. Defaults to window.location.origin
//         postLogoutRedirectUri: '/', // Indicates the page to navigate after logout.
//         navigateToLoginRequestUrl: false, // If "true", will navigate back to the original request location before processing the auth code response.
//         // authorityMetadata: b2cPolicies.authorityMetadata
//     },
//     cache: {
//         cacheLocation: 'sessionStorage', // Configures cache location. "sessionStorage" is more secure, but "localStorage" gives you SSO between tabs.
//         storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
//     },
//     system: {
//         loggerOptions: {
//             loggerCallback: (level, message, containsPii) => {
                
//                 if (containsPii) {
//                     return;
//                 }
//                 switch (level) {
//                     case LogLevel.Error:
//                         console.error(message);
//                         return;
//                     case LogLevel.Info:
//                         console.info(message);
//                         return;
//                     case LogLevel.Verbose:
//                         console.debug(message);
//                         return;
//                     case LogLevel.Warning:
//                         console.warn(message);
//                         return;
//                     default:
//                         return;
//                 }
//             },
//         },
//     },
// };


// /**
//  * Scopes you add here will be prompted for user consent during sign-in.
//  * By default, MSAL.js will add OIDC scopes (openid, profile, email) to any login request.
//  * For more information about OIDC scopes, visit:
//  * https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-permissions-and-consent#openid-connect-scopes
//  */

// export const authScopes = {
//     scopes: [`User.Read`]
// };
// export const graphConfig = {
//     graphMeEndpoint: "https://graph.microsoft.com/v1.0/me",
// };


















//###################################################






/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import { LogLevel } from "@azure/msal-browser";

/**
 * Configuration object to be passed to MSAL instance on creation. 
 * For a full list of MSAL.js configuration parameters, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/configuration.md 
 */

export const msalConfig = {
    auth: {
        clientId: "5aa8a0a3-c827-4b34-89ed-28e3599f0ffe",
        // clientSecredId:'b5c3c202-8046-46c3-9c7b-75248e91d1f3',
        clientSecredId:'5cefcc38-4c67-4baf-9225-350bcbf06027',
        authority: "https://login.microsoftonline.com/79675fd9-7b62-45d2-b440-9b997ac59a08",
        redirectUri: "http://localhost:3000/scm/login",
    },
    cache: {
        cacheLocation: "sessionStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: true, // Set this to "true" if you are having issues on IE11 or Edge
    },
    scopes: ['openid', 'profile', 'User.Read', 'offline_access'],
    system: {	
        loggerOptions: {	
            loggerCallback: (level, message, containsPii) => {	
                if (containsPii) {		
                    return;		
                }		
                switch (level) {
                    case LogLevel.Error:
                        console.error(message);
                        return;
                    case LogLevel.Info:
                        console.info(message);
                        return;
                    case LogLevel.Verbose:
                        console.debug(message);
                        return;
                    case LogLevel.Warning:
                        console.warn(message);
                        return;
                    default:
                        return;
                }	
            }	
        }	
    }
};

/**
 * Scopes you add here will be prompted for user consent during sign-in.
 * By default, MSAL.js will add OIDC scopes (openid, profile, email) to any login request.
 * For more information about OIDC scopes, visit: 
 * https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-permissions-and-consent#openid-connect-scopes
 */
export const loginRequest = {
    // scopes: ["api://615bc3b4-5129-4080-8167-c74363f7c0de/User.Read"]
    scopes: ["User.Read",'openid','offline_access','profile']
};

/**
 * Add here the scopes to request when obtaining an access token for MS Graph API. For more information, see:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/resources-and-scopes.md
 */
export const graphConfig = {
    graphMeEndpoint: "https://graph.microsoft.com/v1.0/me",
};
