import { Button } from '@radix-ui/themes';
import Link from 'next/link';
import React from 'react';

const Actions = () => {
  return (
    <div className="mb-5">
      <Button>
        <Link href="/issues/newIssue">New Issue</Link>
      </Button>
    </div>
  );
};

export default Actions;