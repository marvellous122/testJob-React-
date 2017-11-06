import React from 'react';

export const PageHeader = ({ title, subtitle }) => {
  return (
    <h2 className="page-header" style={style.headerStyle}>
      {title} &nbsp;
      <small>{subtitle}</small>
    </h2>
  );
};

const style = {
  headerStyle: {
    borderBottom: '1px solid #ccc',
    marginTop: 20,
    marginBottom: 10
  }
};
