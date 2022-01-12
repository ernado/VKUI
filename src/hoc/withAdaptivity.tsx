import * as React from "react";
import {
  AdaptivityContext,
  SizeType,
  ViewHeight,
  ViewWidth,
  AdaptivityProps,
} from "../components/AdaptivityProvider/AdaptivityContext";

export { SizeType, ViewWidth, ViewHeight };
export type { AdaptivityProps };

interface Config {
  sizeX?: boolean;
  sizeY?: boolean;
  viewWidth?: boolean;
  viewHeight?: boolean;
  hasMouse?: boolean;
  deviceHasHover?: boolean;
  isDesktop?: boolean;
}

export function withAdaptivity<T>(TargetComponent: T, config: Config): T {
  function AdaptivityConsumer(props: AdaptivityProps) {
    const context = React.useContext(AdaptivityContext);
    let update = false;

    if (props.sizeX || props.sizeY) {
      update = true;
    }

    const sizeX = props.sizeX || context.sizeX;
    const sizeY = props.sizeY || context.sizeY;
    const viewWidth = context.viewWidth;
    const viewHeight = context.viewHeight;
    const hasMouse = context.hasMouse;
    const deviceHasHover = context.deviceHasHover;
    const isDesktop = context.isDesktop;

    const adaptivityProps: AdaptivityProps = {};
    config.sizeX ? (adaptivityProps.sizeX = sizeX) : undefined;
    config.sizeY ? (adaptivityProps.sizeY = sizeY) : undefined;
    config.viewWidth ? (adaptivityProps.viewWidth = viewWidth) : undefined;
    config.viewHeight ? (adaptivityProps.viewHeight = viewHeight) : undefined;
    config.hasMouse ? (adaptivityProps.hasMouse = hasMouse) : undefined;
    config.deviceHasHover
      ? (adaptivityProps.deviceHasHover = deviceHasHover)
      : undefined;
    config.isDesktop ? (adaptivityProps.isDesktop = isDesktop) : undefined;

    // @ts-ignore
    const target = <TargetComponent {...props} {...adaptivityProps} />;

    if (update) {
      return (
        <AdaptivityContext.Provider
          value={{
            sizeX,
            sizeY,
            viewWidth,
            viewHeight,
            hasMouse,
            deviceHasHover,
          }}
        >
          {target}
        </AdaptivityContext.Provider>
      );
    }

    return target;
  }

  return AdaptivityConsumer as unknown as T;
}
