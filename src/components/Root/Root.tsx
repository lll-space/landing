'use client';

import { type PropsWithChildren } from 'react';

import { ErrorBoundary } from '@/components/Error/ErrorBoundary';
import { ErrorPage } from '@/components/Error/ErrorPage';
import { useDidMount } from '@/hooks/useDidMount';

import './index.css';
import Header from './Header';
import Footer from './Footer';
import LllLoading from './Loading';
import { ProgressProvider } from '@bprogress/next/app';


function RootInner({ children }: PropsWithChildren) {

  return (
    <ProgressProvider
      height="2px"
      color="#fffd00"
      options={{ showSpinner: false }}
      shallowRouting
    >
      <Header />
      {children}
      <Footer />
    </ProgressProvider>
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
    <LllLoading />
  );
}
