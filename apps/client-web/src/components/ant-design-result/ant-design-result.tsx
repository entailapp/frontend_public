import {
  CheckCircleIcon,
  CloseCircleIcon,
  InformationIcon,
  WarningTriangleIcon,
} from '@iconicicons/react';

import React from 'react';
import {Typography} from '@material-ui/core';
import clsx from 'clsx';
import {useTheme} from '@material-ui/core/styles';

export const IconMap: {
  [key: string]: (props: React.ComponentProps<'svg'>) => JSX.Element;
} = {
  success: CheckCircleIcon,
  error: CloseCircleIcon,
  info: InformationIcon,
  warning: WarningTriangleIcon,
};

export const ExceptionMap: {[key: string]: string} = {
  '404': '/ant-design-result/no-found.svg',
  '500': '/ant-design-result/server-error.svg',
  '403': '/ant-design-result/unauthorized.svg',
};

export type ExceptionStatusType = 403 | 404 | 500 | '403' | '404' | '500';
export type ResultStatusType = ExceptionStatusType | keyof typeof IconMap;

export interface AntDesignResultProps {
  icon?: React.ReactNode;
  status?: ResultStatusType;
  title?: React.ReactNode;
  subTitle?: React.ReactNode;
  extra?: React.ReactNode;
  className?: string;
}

/**
 * Render icon if ExceptionStatus includes ,render svg image else render iconNode
 */
function renderIcon({status = 'info', icon}: AntDesignResultProps) {
  const theme = useTheme();

  let iconColor: string | undefined;
  switch (status) {
    case 'success':
      iconColor = theme.palette.success.main;
      break;
    case 'error':
      iconColor = theme.palette.error.main;
      break;
    case 'info':
      iconColor = theme.palette.info.main;
      break;
    case 'warning':
      iconColor = theme.palette.warning.main;
      break;
  }

  let SVGComponent: string;
  let SVGComponentClassName: string | undefined;

  let IconComponent: (props: React.ComponentProps<'svg'>) => JSX.Element;
  let iconNode: React.ReactNode;

  switch (status) {
    case 403:
    case '403':
    case 404:
    case '404':
    case 500:
    case '500':
      SVGComponent = ExceptionMap[status];
      SVGComponentClassName = 'w-64 m-auto';
      iconNode = <img src={SVGComponent} />;
      break;
    case 'success':
    case 'error':
    case 'info':
    case 'warning':
      IconComponent = IconMap[status];
      iconNode = <IconComponent width={72} height={72} color={iconColor} />;
      break;
  }

  return (
    <div className={clsx('mb-12 text-center', SVGComponentClassName)}>
      {icon || iconNode}
    </div>
  );
}

/**
 * Used to feed back the results of a series of operational tasks.
 * https://ant.design/components/result/
 */
export function AntDesignResult(props: AntDesignResultProps) {
  const {subTitle, title, status = 'info', icon, extra, className} = props;

  return (
    <div className={clsx(className, 'px-16 py-12 flex flex-col items-center')}>
      {renderIcon({status, icon})}
      <Typography variant="h4">{title}</Typography>
      {subTitle && <Typography variant="body2">{subTitle}</Typography>}
      {extra && <Typography className="m-4 space-x-4">{extra}</Typography>}
    </div>
  );
}

export default AntDesignResult;
