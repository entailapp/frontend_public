import {
  ApplicationUser,
  ApplicationUserServiceApi,
  ApplicationUserServiceGetListRequest,
} from '@entail/api-client';
import {PaginationState, isPotentialForMore} from '../lib/pagination-state';

import {AccountsContextType} from 'contexts';
import React from 'react';

/** @todo delete this once the backend is implemented */
const _mock: ApplicationUser[] = [
  {
    id: '13ed768c-3c51-4368-b9d6-b2a9ba509214',
    name: 'Roy Rogers',
    picture: 'https://picsum.photos/seed/picsum/500',
  },
  {
    id: '15efe220-1c10-4813-963e-c80f7a23dbce',
    name: 'Francis Green',
    picture: 'https://picsum.photos/seed/picsum/500',
  },
];

/**
 * A custom hook to fetch all of the user's accounts.
 * @todo replace with an actual call to the backend.
 */
export function useMineAccounts(
  useMockAccounts?: boolean
): AccountsContextType {
  const client = new ApplicationUserServiceApi();

  const [mineAccounts, setMineAccounts] = React.useState<
    PaginationState<ApplicationUser>
  >({});

  /** An automatic trigger to fetch additional items. */
  React.useEffect(() => {
    if (isPotentialForMore(mineAccounts)) {
      onFetchNextPage(mineAccounts)
        .then(response => setMineAccounts(response))
        .catch(() => {
          const state: PaginationState<ApplicationUser> = {
            ...mineAccounts,
            hasMadeAtLeastOneFetch: true,
          };

          if (useMockAccounts) {
            state.items = _mock;
          }

          setMineAccounts(state);
        });
    }
  }, [mineAccounts]);

  /**
   * Event called to load the next page of data.
   */
  async function onFetchNextPage(
    current: PaginationState<ApplicationUser>
  ): Promise<PaginationState<ApplicationUser>> {
    const request: ApplicationUserServiceGetListRequest = {
      mine: true,
    };

    // set the next page token if it exists
    const nextPageToken = current.nextPageToken;
    if (nextPageToken) {
      request.pageToken = nextPageToken;
    }

    const response = await client.applicationUserServiceGetList(request);

    const items: ApplicationUser[] = current.items ?? [];
    const extra: ApplicationUser[] = response.items ?? [];

    return {
      items: items.concat(extra),
      nextPageToken: response.nextPageToken,
      hasMadeAtLeastOneFetch: true,
    };
  }

  /**
   * A supplementary function used to retry the fetching of the user's accounts.
   */
  function resetToInitialState() {
    setMineAccounts({});
  }

  return {
    accounts: mineAccounts.items ?? [],
    retryFetch: resetToInitialState,
  };
}
