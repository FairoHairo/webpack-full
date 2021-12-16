import React, { ComponentType, ReactNode, useState } from 'react';

export interface WithToolTip {
  tooltip: string;
}
export type OuterProps<P> = Omit<P, 'tooltip'| 'render'>

export const withToolTip = <P extends WithToolTip> (
  Component: ComponentType
) => {

  const InnerComponent = ({ tooltip, render, ...otherProps }: P & {
    render: (p: OuterProps<P>) => ReactNode}) => {
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
