import React from "react";

// const withClass = props => {
//   return <div className={props.classes}>{props.children}</div>;
// };

const withClass = (WrappedComponenet, className) => {
  return props => (
    <div className={className}>
      <WrappedComponenet {...props} />
    </div>
  );
};

export default withClass;
