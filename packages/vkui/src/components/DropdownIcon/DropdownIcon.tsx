import * as React from 'react';
import {
  Icon20ChevronUp,
  Icon20Dropdown,
  Icon24ChevronDown,
  Icon24ChevronUp,
} from '@vkontakte/icons';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivityConditionalRender } from '../../hooks/useAdaptivityConditionalRender';
import styles from './DropdownIcon.module.css';

export interface DropdownIconProps extends React.HTMLAttributes<SVGSVGElement> {
  opened?: boolean;
}

export const DropdownIcon = ({ opened = false, className, ...restProps }: DropdownIconProps) => {
  const { sizeY } = useAdaptivityConditionalRender();
  const IconCompact = opened ? Icon20ChevronUp : Icon20Dropdown;
  const IconRegular = opened ? Icon24ChevronUp : Icon24ChevronDown;

  return (
    <React.Fragment>
      {sizeY.compact && (
        <IconCompact
          className={classNames(styles['DropdownIcon'], sizeY.compact.className, className)}
          {...restProps}
        />
      )}
      {sizeY.regular && (
        <IconRegular
          className={classNames(styles['DropdownIcon'], sizeY.regular.className, className)}
          {...restProps}
        />
      )}
    </React.Fragment>
  );
};
