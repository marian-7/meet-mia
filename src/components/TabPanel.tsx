import React, { FC, memo } from "react";

interface Props {
  index: string | number;
  value: string | number;
  className?: string;
}

export const TabPanel: FC<Props> = memo(function TabPanel(props) {
  const { children, index, value, className } = props;

  return (
    <div
      className={className}
      role="tabpanel"
      id={`tabpanel-${index}`}
      hidden={value !== index}
      aria-labelledby={`tab-${index}`}
    >
      {index === value && children}
    </div>
  );
});
