import React from 'react';
import { ReactComponent as SignOutIcon } from 'assets/icons/Sign_out.svg';
import { ReactComponent as UserIcon } from 'assets/icons/user_icon.svg';
import { Wrapper } from './SignOut.styles';

const SignOut = () => {
  return (
    <Wrapper>
      <UserIcon />
      <p>User</p>
      <SignOutIcon />
    </Wrapper>
  );
};

export default SignOut;
