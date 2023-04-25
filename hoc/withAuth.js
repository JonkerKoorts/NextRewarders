/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useRouter } from "next/router";
import Parse from "../utils/parse";

const withAuth = (WrappedComponent) => {
  const WithAuthComponent = (props) => {
    return <WrappedComponent {...props} />;
  };

  WithAuthComponent.getInitialProps = async (ctx) => {
    const user = await Parse.User.currentAsync();

    if (!user) {
      if (ctx.res) {
        ctx.res.writeHead(302, { Location: "/login_register" });
        ctx.res.end();
      } else {
        useRouter().replace("/login_register");
      }
    }

    const componentProps =
      WrappedComponent.getInitialProps &&
      (await WrappedComponent.getInitialProps(ctx));

    return { ...componentProps };
  };

  return WithAuthComponent;
};

export default withAuth;
