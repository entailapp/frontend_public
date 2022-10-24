import React from 'react';
import {useRouter} from 'next/router';
import {ChevronRightIcon} from '@iconicicons/react';
import clsx from 'clsx';
import {NextLinkComposed} from 'components';

export interface SettingsPageButtonProps {
  title: string;
  href: string;
}

/** */
export function SettingsPageButton(props: SettingsPageButtonProps) {
  const router = useRouter();
  return (
    <NextLinkComposed
      to={props.href}
      className={clsx(
        'flex justify-between items-center text-left cursor-pointer w-full normal-case p-0 rounded-none',
        {
          'bg-entail-base-dark text-entail-yellow-text':
            router.pathname === props.href,
          'hover:bg-white hover:bg-opacity-5 focus:bg-white focus:bg-opacity-5':
            router.pathname !== props.href,
        }
      )}
    >
      <h3 className="text-lg font-medium px-4 py-3">{props.title}</h3>
      <ChevronRightIcon className="flex-shrink-0" width={48} height={48} />
    </NextLinkComposed>
  );
}

export default SettingsPageButton;
