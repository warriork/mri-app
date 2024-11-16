'use client'
import {FC} from "react";
import {ApolloProvider} from "@apollo/client";
import client from "../../../lib/apolloClient";
import type * as ReactTypes from "react";

export const CustomApolloProvider: FC<{children:ReactTypes.ReactNode | ReactTypes.ReactNode[] | null}> = ({ children }) => (
    <ApolloProvider client={client} >
        {children}
    </ApolloProvider>
)