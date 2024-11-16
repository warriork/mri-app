import React, { PropsWithChildren } from 'react';
import { ApolloError } from '@apollo/client';
import {Loader} from "@/components/loader/Loader";


interface QueryResultProps {
  loading: boolean;
  error?: ApolloError | undefined;
  data?: unknown;
}

const QueryResult: React.FC<PropsWithChildren<QueryResultProps>> = ({ loading, error, data, children }): React.ReactElement<any, any> | null => {
  if (error) {
    return <p className='font-bold text-4xl'>ERROR: {error.message}</p>;
  }
  if (loading) {
    return (
      <Loader/>
    );
  }
  if (data) {
    return <>{children}</>;
  }

  return <p>No results to show...</p>;
};

export default QueryResult;

