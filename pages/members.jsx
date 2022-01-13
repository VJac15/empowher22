import React from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

export default withPageAuthRequired(function SSRPage() {
  return (
    <>
      <div>
          <h1>Welcome, Particpant!</h1>
          <p>This is where you will find information regarding the competition.</p>
          <p>You will also be able to access necessary forms and project submission information through this page.</p>
      </div>
    </>
  );
});
