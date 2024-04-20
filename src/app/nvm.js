// // _app.js

// import React from 'react';
// import App from 'next/app';
// import { Auth0Provider } from '@auth0/auth0-react';
// import { useRouter } from 'next/router';
// import { UserProvider } from 'path-to-your-UserProvider'; // Import your UserProvider component

// const Auth0ProviderWithHistory = ({ children }) => {
//   const router = useRouter();

//   const onRedirectCallback = (appState) => {
//     router.push(appState?.returnTo || window.location.pathname);
//   };

//   return (
//     <Auth0Provider
//       domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
//       clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
//       redirectUri={typeof window !== 'undefined' && window.location.origin}
//       onRedirectCallback={onRedirectCallback}
//     >
//       {children}
//     </Auth0Provider>
//   );
// };

// class MyApp extends App {
//   render() {
//     const { Component, pageProps } = this.props;
//     return (
//       <Auth0ProviderWithHistory>
//         <UserProvider>
//         <Component {...pageProps} />
//         </UserProvider>
        
//       </Auth0ProviderWithHistory>
//     );
//   }
// }

// export default MyApp;