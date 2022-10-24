import React from 'react';
import {NextPage} from 'next';
import {Button, Collapse} from '@material-ui/core';
import {ChevronRightIcon} from '@iconicicons/react';
import clsx from 'clsx';
import {SettingsPageLayout, ExpandableView} from 'components';

/** */
export default function GeneralSettingsPage() {
  return (
    <div className="border-b border-entail-text-secondary border-opacity-20 divide-y divide-entail-text-secondary divide-opacity-20">
      <ExpandableView
        header={expanded => (
          <div className="flex justify-between items-center px-4 py-2">
            <div>
              <h3 className="text-lg font-medium">Update Email</h3>
              <Collapse in={!expanded}>
                <p className="text-entail-text-secondary">
                  example@ennymail.com
                </p>
              </Collapse>
            </div>
            <ChevronRightIcon
              className={clsx('transform transition-transform', {
                'rotate-90': expanded,
              })}
              width={48}
              height={48}
            />
          </div>
        )}
        body={expanded => (
          <div className="px-4 pb-4 space-y-4">
            <div>
              <p className="font-bold">Current Email</p>
              <input
                className="w-full bg-entail-base-dark placeholder-entail-text-secondary p-3 rounded-lg mt-1"
                placeholder="example@ennymail.com"
              />
            </div>

            <div>
              <p className="font-bold">New Email</p>
              <input className="w-full bg-entail-base-dark placeholder-entail-text-secondary p-3 rounded-lg mt-1" />
            </div>

            <div>
              <p className="font-bold">Confirm New Email</p>
              <input className="w-full bg-entail-base-dark placeholder-entail-text-secondary p-3 rounded-lg mt-1" />
            </div>

            <div className="flex flex-col">
              <Button
                color="primary"
                variant="contained"
                className="normal-case font-bold rounded-lg py-1 px-6 self-end"
              >
                Update
              </Button>
            </div>
          </div>
        )}
      />
      <ExpandableView
        header={expanded => (
          <div className="flex justify-between items-center px-4 py-2">
            <div>
              <h3 className="text-lg font-medium">Update Password</h3>
              <Collapse in={!expanded}>
                <p className="text-entail-text-secondary">**************</p>
              </Collapse>
            </div>
            <ChevronRightIcon
              className={clsx('transform transition-transform', {
                'rotate-90': expanded,
              })}
              width={48}
              height={48}
            />
          </div>
        )}
        body={expanded => (
          <div className="px-4 pb-4 space-y-4">
            <div>
              <p className="font-bold">Current Password</p>
              <input
                className="w-full bg-entail-base-dark placeholder-entail-text-secondary p-3 rounded-lg mt-1"
                placeholder="example@ennymail.com"
              />
            </div>

            <div>
              <p className="font-bold">New Password</p>
              <input className="w-full bg-entail-base-dark placeholder-entail-text-secondary p-3 rounded-lg mt-1" />
            </div>

            <div>
              <p className="font-bold">Confirm New Password</p>
              <input className="w-full bg-entail-base-dark placeholder-entail-text-secondary p-3 rounded-lg mt-1" />
            </div>

            <div className="flex flex-col">
              <Button
                color="primary"
                variant="contained"
                className="normal-case font-bold rounded-lg py-1 px-6 self-end"
              >
                Update
              </Button>
            </div>
          </div>
        )}
      />
      <ExpandableView
        header={expanded => (
          <div className="flex justify-between items-center px-4 py-2">
            <div>
              <h3 className="text-lg font-medium">Cached Data</h3>
              <Collapse in={!expanded}>
                <p className="text-entail-text-secondary">
                  Request access to your cached data
                </p>
              </Collapse>
            </div>
            <ChevronRightIcon
              className={clsx('transform transition-transform', {
                'rotate-90': expanded,
              })}
              width={48}
              height={48}
            />
          </div>
        )}
        body={expanded => (
          <div className="px-4 pb-4">
            <p className="font-bold">Request Access</p>
            <div className="flex items-center space-x-4">
              <p className="text-entail-text-secondary">
                Request Entail for all cached app data. Including likes,
                replies, boosts, visibility and usage statistics etc.
              </p>
              <div className="flex-shrink-0">
                <Button
                  color="primary"
                  variant="contained"
                  className="normal-case font-bold rounded-lg py-1 px-6 self-end"
                >
                  Request Access
                </Button>
              </div>
            </div>
          </div>
        )}
      />
      <ExpandableView
        header={expanded => (
          <div className="flex justify-between items-center px-4 py-2">
            <div>
              <h3 className="text-lg font-medium">Verification Status</h3>
              <Collapse in={!expanded}>
                <p className="text-entail-text-secondary">
                  Check your accounts verification status
                </p>
              </Collapse>
            </div>
            <ChevronRightIcon
              className={clsx('transform transition-transform', {
                'rotate-90': expanded,
              })}
              width={48}
              height={48}
            />
          </div>
        )}
        body={expanded => (
          <div className="px-4 pb-4">
            <p>This profile is not Verified.</p>
            <a href="#" className="text-entail-yellow font-light">
              What does this mean?
            </a>
          </div>
        )}
      />
    </div>
  );
}

// eslint-disable-next-line react/display-name
GeneralSettingsPage.getLayout = (page: NextPage) => (
  <SettingsPageLayout title="General">{page}</SettingsPageLayout>
);
