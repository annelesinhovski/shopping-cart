import { useEffect } from 'react';
import Router from 'next/router';

const ENTRY_PAGE = '/checkout';

const Home = () => {
  useEffect(() => {
    Router.push({ pathname: ENTRY_PAGE });
  }, []);

  return null;
};

export default Home;
