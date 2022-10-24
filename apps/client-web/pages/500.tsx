import {AntDesignResult} from 'components';
import {Button} from '@material-ui/core';
import Link from 'next/link';
import React from 'react';

/**
 * The component shown when there is a 500 HTTP status error.
 */
export function Custom500() {
  return (
    <AntDesignResult
      status="500"
      title="500"
      subTitle="Sorry, something went wrong. Is Enny playing with the wires again?"
      extra={
        <Link href="/" passHref>
          <Button color="primary">Back Home</Button>
        </Link>
      }
    />
  );
}

export default Custom500;
