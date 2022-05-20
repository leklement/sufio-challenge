import cx from "classnames";
import React, {useCallback, useState} from "react";
import styles from "./styles.module.scss";

/* Outer Props
-------------------------------------------------------------------------*/

interface Props {
  className?: string;
  hoverClassName?: string;
  color?: string;
  testId?: string;
  disabled?: boolean;
  hidden?: boolean;
  transparent?: boolean;
  isActive?: boolean;
  size?: number;
  icon: React.ReactElement;

  onClick?: (ev: React.MouseEvent) => void;
  onMouseDown?: (ev: React.MouseEvent) => void;
  onMouseEnter?: (ev: React.MouseEvent) => void;
  onMouseLeave?: (ev: React.MouseEvent) => void;
}

/* Template
-------------------------------------------------------------------------*/

export const RoundButton: React.FC<Props> = (props) => {
  // Props

  const {onMouseEnter, onMouseLeave, isActive, className, hoverClassName, testId} = props;

  // State

  const [isHovered, setHovered] = useState(false);

  // Handlers

  const handleMouseEntered = useCallback(
    (ev: React.MouseEvent) => {
      onMouseEnter?.(ev);
      setHovered(true);
    },
    [onMouseEnter],
  );

  const handleMouseLeave = useCallback(
    (ev: React.MouseEvent) => {
      onMouseLeave?.(ev);
      setHovered(false);
    },
    [onMouseLeave],
  );

  // Memos

  const hoverClassNames = cx(styles.hover, hoverClassName);

  const classNames = cx(styles.RoundButton, className, {
    [styles.disabled]: props.disabled,
    [styles.hidden]: props.hidden ?? false,
    [styles.transparent]: props.transparent,
    [styles.hover]: isHovered || isActive,
    [styles.active]: isActive,
    [hoverClassNames]: isHovered || isActive,
  });

  const size = props.size !== undefined ? props.size : 24;

  const style: React.CSSProperties = {
    width: `${size}px`,
    height: `${size}px`,
    lineHeight: `${size}px`,
  };

  // Render

  return (
    <div
      className={classNames}
      onMouseDown={props.onMouseDown}
      onMouseEnter={handleMouseEntered}
      onMouseLeave={handleMouseLeave}
      style={style}
      onClick={(ev) => {
        const {onClick} = props;

        if (onClick && !props.disabled) {
          ev.stopPropagation();
          ev.preventDefault();
          onClick(ev);
        }
      }}
      data-testid={testId}
      data-disabled={props.disabled}
    >
      {props.icon}
    </div>
  );
};
