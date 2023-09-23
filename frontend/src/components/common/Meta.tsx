import React from "react";
import { Helmet } from "react-helmet";

const Meta: React.FC<{ title?: string, keyword?: string, description?: string }>=({ title, keyword, description })=> {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="keyword" keyword={keyword} />
      <meta name="description" description={description} />
    </Helmet>
  );
}

Meta.defaultProps = {
};
