import cx from "classnames";
import React, {MutableRefObject, useState} from "react";
import styles from "./styles.module.scss";
import {ButtonAlign, ButtonColor, ButtonSize} from "./types";

/* Outer Props
-------------------------------------------------------------------------*/

export interface IButtonOuterProps {
  label?: string;
  className?: string;
  labelClassName?: string;
  disabled?: boolean;
  loader?: boolean;
  isActive?: boolean;
  stopPropagation?: boolean;
  accessory?: JSX.Element;
  children?: React.ReactElement;

  onClick?: (ev: React.MouseEvent<HTMLButtonElement>) => void;
  buttonRef?: MutableRefObject<HTMLButtonElement | null>;

  size?: ButtonSize;
  align?: ButtonAlign;
  color?: ButtonColor;
}

/* Template
-------------------------------------------------------------------------*/

export const Button: React.FC<IButtonOuterProps> = (props) => {
  const color = props.color || ButtonColor.TRANSPARENT;
  const size = props.size || ButtonSize.REGULAR;
  const align = props.align || ButtonAlign.CENTER;

  // States

  const [isActive, setActive] = useState(false);

  // Memos

  const activeValue = isActive || props.isActive;

  const classNames = {
    [styles.disabled]: props.disabled,
    [styles.active]: activeValue,
    [styles.accessory]: !!props.accessory,
  };

  // Render

  return (
    <button
      ref={props.buttonRef}
      type={"button"}
      className={cx(
        styles.Button,
        props.className,
        styles[color],
        styles[size],
        styles[align],
        classNames,
      )}
      onMouseDown={(ev) => {
        setActive(true);
      }}
      onMouseUp={(ev) => {
        setActive(false);
      }}
      onClick={(ev) => {
        if (props.stopPropagation) {
          ev.stopPropagation();
        }
        if (props.disabled) {
          return;
        }
        props.onClick?.(ev);
      }}
      disabled={props.disabled}
    >
      {props.accessory}

      <span className={cx(styles.label, props.labelClassName)}>
        {props.label ? props.label : props.children}
      </span>
    </button>
  );
};
