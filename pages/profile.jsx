import React from 'react';
import { Row, Col } from 'reactstrap';
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';

import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';

function Profile() {
  const { user, isLoading } = useUser();

  return (
    <>
      {isLoading && <Loading />}
      {user && (
        <>

    <div class="container">

    <div class = "row">
      <div class = "col-md-3 col-sm-12 col-xs-12">
      <img
                src={user.picture}
                alt="Profile"
                className="rounded-circle"
                data-testid="profile-picture"
              />
      </div>
      <div class = "col-md-9 col-sm-12 col-xs-12">
          <h3 id = "black">Profile Information</h3>
          <p>Name: {user.name}</p>
      </div>
    </div>
  </div>
        </>
      )}
    </>
  );
}

export default withPageAuthRequired(Profile, {
  onRedirecting: () => <Loading />,
  onError: error => <ErrorMessage>{error.message}</ErrorMessage>
});
