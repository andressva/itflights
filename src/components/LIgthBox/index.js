import React from 'react';

import { Result } from 'antd';

import './styles.scss'
export const LIghtBox = ({show}) => {

  return show && <div className='customlb'>
      <Result
        status="success"
        title={<p className='customlb-title'>Tu información fue enviada con éxito, estaremos en contacto contigo</p>}
    />,
  </div>;
};
