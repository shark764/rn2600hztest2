/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React from 'react';
import icons from '@/components/icons/icons.svg';

interface Props {
  name: string;
}

export const Icon: React.FunctionComponent<Props> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    className={`icon icon-${props.name}`}>
    <use xlinkHref={`${icons}#${props.name}`} />
  </svg>
);
