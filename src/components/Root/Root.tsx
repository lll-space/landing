'use client';

import { type PropsWithChildren } from 'react';

import { ErrorBoundary } from '@/components/Error/ErrorBoundary';
import { ErrorPage } from '@/components/Error/ErrorPage';
import { useDidMount } from '@/hooks/useDidMount';

import './index.css';
import Header from './Header';
import Footer from './Footer';
import LllLoading from './Loading';


function RootInner({ children }: PropsWithChildren) {

  return (
    <>
          <Header />

      {children}
            <Footer />

    </>
  );
}

export function Root(props: PropsWithChildren) {
  // Unfortunately, Telegram Mini Apps does not allow us to use all features of
  // the Server Side Rendering. That's why we are showing loader on the server
  // side.
  const didMount = useDidMount();

  return didMount ? (
    <ErrorBoundary fallback={ErrorPage}>
      <RootInner {...props} />
    </ErrorBoundary>
  ) : (
    <LllLoading/>
  );
}
