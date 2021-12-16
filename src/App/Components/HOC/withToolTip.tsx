import React, { ComponentType, ReactNode, useState } from 'react';
import './style.scss';

export interface WithToolTip {
  tooltip: string;
  children?: ReactNode;
}
export type OuterProps<P> = Omit<P, 'tooltip'| 'render'>

export const withToolTip = <P extends WithToolTip> (
  Component: ComponentType
) => {

  const InnerComponent = ({ tooltip, render, ...otherProps }: P & {
    render: (p: OuterProps<P>) => JSX.Element}) => {
    const [open, setIsOpen] = useState(false);
    return (
      <div className="tooltip">
        <span className="tooltip__text">{tooltip}</span>
        {render(otherProps)}
      </div>
    );
  };

  return (props: P) => <InnerComponent {...props} render={(p) => <Component {...p} />} />;
};
