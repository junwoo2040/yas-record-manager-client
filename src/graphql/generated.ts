import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };

function fetcher<TData, TVariables extends { [key: string]: any }>(client: GraphQLClient, query: string, variables?: TVariables, requestHeaders?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request({
    document: query,
    variables,
    requestHeaders
  });
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
};

export type DonationRecord = {
  __typename?: 'DonationRecord';
  amount?: Maybe<Scalars['Float']['output']>;
  author?: Maybe<User>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  donorContact?: Maybe<Scalars['String']['output']>;
  donorName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type DonationRecordCreateInput = {
  amount: Scalars['Float']['input'];
  donorContact: Scalars['String']['input'];
  donorName: Scalars['String']['input'];
};

export type DonationRecordDeleteInput = {
  donationRecordId: Scalars['String']['input'];
};

export type DonationRecordUpdateAmountInput = {
  amount: Scalars['Float']['input'];
  donationRecordId: Scalars['String']['input'];
};

export type DonationRecordUpdateDonorContactInput = {
  donationRecordId: Scalars['String']['input'];
  donorContact: Scalars['String']['input'];
};

export type DonationRecordUpdateDonorNameInput = {
  donationRecordId: Scalars['String']['input'];
  donorName: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createDonationRecord?: Maybe<DonationRecord>;
  createSalesRecord?: Maybe<SalesRecord>;
  createSpendingRecord?: Maybe<SpendingRecord>;
  createUser?: Maybe<User>;
  deleteDonationRecord?: Maybe<DonationRecord>;
  deleteSalesRecord?: Maybe<SalesRecord>;
  deleteSpendingRecord?: Maybe<SpendingRecord>;
  deleteUser?: Maybe<User>;
  updateDonationRecordDonorContact?: Maybe<DonationRecord>;
  updateDonationRecordDonorName?: Maybe<DonationRecord>;
  updateDonationRecordSchool?: Maybe<DonationRecord>;
  updateSalesRecordClientContact?: Maybe<SalesRecord>;
  updateSalesRecordClientName?: Maybe<SalesRecord>;
  updateSalesRecordDiscount?: Maybe<SalesRecord>;
  updateSalesRecordPrice?: Maybe<SalesRecord>;
  updateSalesRecordProduct?: Maybe<SalesRecord>;
  updateSalesRecordQuantity?: Maybe<SalesRecord>;
  updateSpendingRecordAmount?: Maybe<SpendingRecord>;
  updateSpendingRecordNote?: Maybe<SpendingRecord>;
  updateUserName?: Maybe<User>;
  updateUserPassword?: Maybe<User>;
  updateUserSchool?: Maybe<User>;
};


export type MutationCreateDonationRecordArgs = {
  input: DonationRecordCreateInput;
};


export type MutationCreateSalesRecordArgs = {
  input: SalesRecordCreateInput;
};


export type MutationCreateSpendingRecordArgs = {
  input: SpendingRecordCreateInput;
};


export type MutationCreateUserArgs = {
  input: UserCreateInput;
};


export type MutationDeleteDonationRecordArgs = {
  input: DonationRecordDeleteInput;
};


export type MutationDeleteSalesRecordArgs = {
  input: SalesRecordDeleteInput;
};


export type MutationDeleteSpendingRecordArgs = {
  input: SpendingRecordDeleteInput;
};


export type MutationDeleteUserArgs = {
  input: UserDeleteInput;
};


export type MutationUpdateDonationRecordDonorContactArgs = {
  input: DonationRecordUpdateDonorContactInput;
};


export type MutationUpdateDonationRecordDonorNameArgs = {
  input: DonationRecordUpdateDonorNameInput;
};


export type MutationUpdateDonationRecordSchoolArgs = {
  input: DonationRecordUpdateAmountInput;
};


export type MutationUpdateSalesRecordClientContactArgs = {
  input: SalesRecordUpdateClientContactInput;
};


export type MutationUpdateSalesRecordClientNameArgs = {
  input: SalesRecordUpdateClientNameInput;
};


export type MutationUpdateSalesRecordDiscountArgs = {
  input: SalesRecodUpdateDiscountInput;
};


export type MutationUpdateSalesRecordPriceArgs = {
  input: SalesRecordUpdatePriceInput;
};


export type MutationUpdateSalesRecordProductArgs = {
  input: SalesRecordUpdateProductInput;
};


export type MutationUpdateSalesRecordQuantityArgs = {
  input: SalesRecordUpdateQuantityInput;
};


export type MutationUpdateSpendingRecordAmountArgs = {
  input: SpendingRecordUpdatePasswordInput;
};


export type MutationUpdateSpendingRecordNoteArgs = {
  input: SpendingRecordUpdateNoteInput;
};


export type MutationUpdateUserNameArgs = {
  input: UserUpdateNameInput;
};


export type MutationUpdateUserPasswordArgs = {
  input: UserUpdatePasswordInput;
};


export type MutationUpdateUserSchoolArgs = {
  input: UserUpdateSchoolInput;
};

export type Query = {
  __typename?: 'Query';
  donationRecord?: Maybe<DonationRecord>;
  donationRecords?: Maybe<Array<DonationRecord>>;
  salesRecord?: Maybe<SalesRecord>;
  salesRecords?: Maybe<Array<SalesRecord>>;
  spendingRecord?: Maybe<SpendingRecord>;
  spendingRecords?: Maybe<Array<SpendingRecord>>;
  user?: Maybe<User>;
  users?: Maybe<Array<User>>;
};


export type QueryDonationRecordArgs = {
  recordId: Scalars['String']['input'];
};


export type QuerySalesRecordArgs = {
  salesRecordId: Scalars['String']['input'];
};


export type QuerySpendingRecordArgs = {
  spendingRecordId: Scalars['String']['input'];
};


export type QueryUserArgs = {
  userId: Scalars['String']['input'];
};

export type SalesRecodUpdateDiscountInput = {
  discount: Scalars['Float']['input'];
  salesRecordId: Scalars['String']['input'];
};

export type SalesRecord = {
  __typename?: 'SalesRecord';
  author?: Maybe<User>;
  clientContact?: Maybe<Scalars['String']['output']>;
  clientName?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  discount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  product?: Maybe<Scalars['String']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
};

export type SalesRecordCreateInput = {
  clientContact: Scalars['String']['input'];
  clientName: Scalars['String']['input'];
  discount: Scalars['Float']['input'];
  price: Scalars['Float']['input'];
  product: Scalars['String']['input'];
  quantity: Scalars['Int']['input'];
};

export type SalesRecordDeleteInput = {
  salesRecordId: Scalars['String']['input'];
};

export type SalesRecordUpdateClientContactInput = {
  clientContact: Scalars['String']['input'];
  salesRecordId: Scalars['String']['input'];
};

export type SalesRecordUpdateClientNameInput = {
  clientName: Scalars['String']['input'];
  salesRecordId: Scalars['String']['input'];
};

export type SalesRecordUpdatePriceInput = {
  price: Scalars['Float']['input'];
  salesRecordId: Scalars['String']['input'];
};

export type SalesRecordUpdateProductInput = {
  product: Scalars['String']['input'];
  salesRecordId: Scalars['String']['input'];
};

export type SalesRecordUpdateQuantityInput = {
  quantity: Scalars['Int']['input'];
  salesRecordId: Scalars['String']['input'];
};

export type SpendingRecord = {
  __typename?: 'SpendingRecord';
  amount?: Maybe<Scalars['Float']['output']>;
  author?: Maybe<User>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  note?: Maybe<Scalars['String']['output']>;
};

export type SpendingRecordCreateInput = {
  amount: Scalars['Float']['input'];
  note: Scalars['String']['input'];
};

export type SpendingRecordDeleteInput = {
  spendingRecordId: Scalars['String']['input'];
};

export type SpendingRecordUpdateNoteInput = {
  note: Scalars['String']['input'];
  spendingRecordId: Scalars['String']['input'];
};

export type SpendingRecordUpdatePasswordInput = {
  amount: Scalars['Float']['input'];
  spendingRecordId: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  donationRecords?: Maybe<Array<DonationRecord>>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  salesRecord?: Maybe<Array<SalesRecord>>;
  school?: Maybe<Scalars['String']['output']>;
  spendingRecords?: Maybe<Array<SpendingRecord>>;
  username?: Maybe<Scalars['String']['output']>;
};

export type UserCreateInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type UserDeleteInput = {
  userId: Scalars['String']['input'];
};

export type UserUpdateNameInput = {
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['String']['input'];
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserUpdatePasswordInput = {
  password: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type UserUpdateSchoolInput = {
  school: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type GetAllDonationRecordsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllDonationRecordsQuery = { __typename?: 'Query', donationRecords?: Array<{ __typename?: 'DonationRecord', id?: string | null, donorName?: string | null, donorContact?: string | null, amount?: number | null, createdAt?: any | null, author?: { __typename?: 'User', id?: string | null, firstName?: string | null, lastName?: string | null } | null }> | null };

export type GetAllSalesRecordsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllSalesRecordsQuery = { __typename?: 'Query', salesRecords?: Array<{ __typename?: 'SalesRecord', id?: string | null, clientName?: string | null, clientContact?: string | null, product?: string | null, price?: number | null, quantity?: number | null, discount?: number | null, createdAt?: any | null }> | null };



export const GetAllDonationRecordsDocument = `
    query getAllDonationRecords {
  donationRecords {
    id
    donorName
    donorContact
    amount
    author {
      id
      firstName
      lastName
    }
    createdAt
  }
}
    `;

export const useGetAllDonationRecordsQuery = <
      TData = GetAllDonationRecordsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetAllDonationRecordsQueryVariables,
      options?: UseQueryOptions<GetAllDonationRecordsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) => {
    
    return useQuery<GetAllDonationRecordsQuery, TError, TData>(
      variables === undefined ? ['getAllDonationRecords'] : ['getAllDonationRecords', variables],
      fetcher<GetAllDonationRecordsQuery, GetAllDonationRecordsQueryVariables>(client, GetAllDonationRecordsDocument, variables, headers),
      options
    )};

useGetAllDonationRecordsQuery.getKey = (variables?: GetAllDonationRecordsQueryVariables) => variables === undefined ? ['getAllDonationRecords'] : ['getAllDonationRecords', variables];

export const GetAllSalesRecordsDocument = `
    query getAllSalesRecords {
  salesRecords {
    id
    clientName
    clientContact
    product
    price
    quantity
    discount
    createdAt
  }
}
    `;

export const useGetAllSalesRecordsQuery = <
      TData = GetAllSalesRecordsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetAllSalesRecordsQueryVariables,
      options?: UseQueryOptions<GetAllSalesRecordsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) => {
    
    return useQuery<GetAllSalesRecordsQuery, TError, TData>(
      variables === undefined ? ['getAllSalesRecords'] : ['getAllSalesRecords', variables],
      fetcher<GetAllSalesRecordsQuery, GetAllSalesRecordsQueryVariables>(client, GetAllSalesRecordsDocument, variables, headers),
      options
    )};

useGetAllSalesRecordsQuery.getKey = (variables?: GetAllSalesRecordsQueryVariables) => variables === undefined ? ['getAllSalesRecords'] : ['getAllSalesRecords', variables];
