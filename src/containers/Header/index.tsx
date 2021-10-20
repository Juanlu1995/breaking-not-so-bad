import { AppBar, Typography } from '@mui/material';
import { useMemo } from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  margin-bottom: 3rem;
`;

const Header = (): JSX.Element => {
  const existTitle: boolean = useMemo(() => !!process?.env?.REACT_APP_NAME, []);

  return existTitle ? (
    <HeaderWrapper>
      <AppBar>
        <Typography variant={'h4'}>{process?.env?.REACT_APP_NAME?.toLocaleUpperCase()}</Typography>
      </AppBar>
    </HeaderWrapper>
  ) : (
    <></>
  );
};

export default Header;
