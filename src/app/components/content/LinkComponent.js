import React from 'react';

import Link from 'next/link';

export default function LinkComponent({ url, name }) {
  return (
    <Link href={url} target="_blank">
      {name}
    </Link>
  );
}
