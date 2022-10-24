import {AntDesignResult} from 'components';
import {Button} from '@material-ui/core';
import Link from 'next/link';
import React from 'react';

/**
 * The component shown when there is a 404 HTTP status error.
 */
export function Custom404() {
  return (
    <AntDesignResult
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Link href="/" passHref>
          <Button color="primary">Back Home</Button>
        </Link>
      }
    />
  );
}

export default Custom404;
