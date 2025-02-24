import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import styles from './Spacing.module.css';

export interface SpacingProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Высота спэйсинга
   */
  size?: number;
  children?: React.ReactNode;
}

/**
 * @see https://vkcom.github.io/VKUI/#/Spacing
 */
export const Spacing = ({ size = 8, style: styleProp, className, ...restProps }: SpacingProps) => {
  const style: React.CSSProperties = {
    height: size,
    padding: `${size / 2}px 0`,
    ...styleProp,
  };

  return (
    <div
      {...restProps}
      aria-hidden
      className={classNames(className, styles['Spacing'])}
      style={style}
    />
  );
};
