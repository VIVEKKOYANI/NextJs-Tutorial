import React from 'react'
import { useRouter } from 'next/router';

function firstparams() {
    const router  = useRouter();
    const { firstparams } = router.query;
  return (
    <div>firstparams: {firstparams}</div>
  )
}

export default firstparams