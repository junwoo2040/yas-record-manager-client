import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useMutation, useQuery, UseMutationOptions, UseQueryOptions } from '@tanstack/react-query';
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

export type AccountAcceptInput = {
  email: Scalars['String']['input'];
};

export type AccountDenyInput = {
  email: Scalars['String']['input'];
};

export type AccountLoginInput = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type AccountRequest = {
  __typename?: 'AccountRequest';
  acceptedAt?: Maybe<Scalars['Date']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  school?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

export type AccountRequestInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
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

export type DonationRecordFindByIdInput = {
  recordId: Scalars['String']['input'];
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

export type Error = {
  __typename?: 'Error';
  message?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  accountAccept?: Maybe<MutationAccountAcceptResult>;
  accountDeny?: Maybe<MutationAccountDenyResult>;
  accountLogin?: Maybe<MutationAccountLoginResult>;
  accountRequest?: Maybe<MutationAccountRequestResult>;
  createDonationRecord?: Maybe<MutationCreateDonationRecordResult>;
  createSalesRecord?: Maybe<MutationCreateSalesRecordResult>;
  createSpendingRecord?: Maybe<MutationCreateSpendingRecordResult>;
  deleteDonationRecord?: Maybe<MutationDeleteDonationRecordResult>;
  deleteSalesRecord?: Maybe<MutationDeleteSalesRecordResult>;
  deleteSpendingRecord?: Maybe<MutationDeleteSpendingRecordResult>;
  deleteUser?: Maybe<MutationDeleteUserResult>;
  updateDonationRecordAmount?: Maybe<MutationUpdateDonationRecordAmountResult>;
  updateDonationRecordDonorContact?: Maybe<MutationUpdateDonationRecordDonorContactResult>;
  updateDonationRecordDonorName?: Maybe<MutationUpdateDonationRecordDonorNameResult>;
  updateSalesRecordClientContact?: Maybe<MutationUpdateSalesRecordClientContactResult>;
  updateSalesRecordClientName?: Maybe<MutationUpdateSalesRecordClientNameResult>;
  updateSalesRecordDiscount?: Maybe<MutationUpdateSalesRecordDiscountResult>;
  updateSalesRecordPrice?: Maybe<MutationUpdateSalesRecordPriceResult>;
  updateSalesRecordProduct?: Maybe<MutationUpdateSalesRecordProductResult>;
  updateSalesRecordQuantity?: Maybe<MutationUpdateSalesRecordQuantityResult>;
  updateSpendingRecordAmount?: Maybe<MutationUpdateSpendingRecordAmountResult>;
  updateSpendingRecordNote?: Maybe<MutationUpdateSpendingRecordNoteResult>;
  updateUserName?: Maybe<MutationUpdateUserNameResult>;
  updateUserPassword?: Maybe<MutationUpdateUserPasswordResult>;
  updateUserSchool?: Maybe<MutationUpdateUserSchoolResult>;
};


export type MutationAccountAcceptArgs = {
  input: AccountAcceptInput;
};


export type MutationAccountDenyArgs = {
  input: AccountDenyInput;
};


export type MutationAccountLoginArgs = {
  input: AccountLoginInput;
};


export type MutationAccountRequestArgs = {
  input: AccountRequestInput;
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


export type MutationUpdateDonationRecordAmountArgs = {
  input: DonationRecordUpdateAmountInput;
};


export type MutationUpdateDonationRecordDonorContactArgs = {
  input: DonationRecordUpdateDonorContactInput;
};


export type MutationUpdateDonationRecordDonorNameArgs = {
  input: DonationRecordUpdateDonorNameInput;
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

export type MutationAccountAcceptResult = Error | MutationAccountAcceptSuccess;

export type MutationAccountAcceptSuccess = {
  __typename?: 'MutationAccountAcceptSuccess';
  data: User;
};

export type MutationAccountDenyResult = Error | MutationAccountDenySuccess;

export type MutationAccountDenySuccess = {
  __typename?: 'MutationAccountDenySuccess';
  data: User;
};

export type MutationAccountLoginResult = Error | MutationAccountLoginSuccess;

export type MutationAccountLoginSuccess = {
  __typename?: 'MutationAccountLoginSuccess';
  data: User;
};

export type MutationAccountRequestResult = Error | MutationAccountRequestSuccess;

export type MutationAccountRequestSuccess = {
  __typename?: 'MutationAccountRequestSuccess';
  data: AccountRequest;
};

export type MutationCreateDonationRecordResult = Error | MutationCreateDonationRecordSuccess;

export type MutationCreateDonationRecordSuccess = {
  __typename?: 'MutationCreateDonationRecordSuccess';
  data: DonationRecord;
};

export type MutationCreateSalesRecordResult = Error | MutationCreateSalesRecordSuccess;

export type MutationCreateSalesRecordSuccess = {
  __typename?: 'MutationCreateSalesRecordSuccess';
  data: SalesRecord;
};

export type MutationCreateSpendingRecordResult = Error | MutationCreateSpendingRecordSuccess;

export type MutationCreateSpendingRecordSuccess = {
  __typename?: 'MutationCreateSpendingRecordSuccess';
  data: SpendingRecord;
};

export type MutationDeleteDonationRecordResult = Error | MutationDeleteDonationRecordSuccess;

export type MutationDeleteDonationRecordSuccess = {
  __typename?: 'MutationDeleteDonationRecordSuccess';
  data: DonationRecord;
};

export type MutationDeleteSalesRecordResult = Error | MutationDeleteSalesRecordSuccess;

export type MutationDeleteSalesRecordSuccess = {
  __typename?: 'MutationDeleteSalesRecordSuccess';
  data: SalesRecord;
};

export type MutationDeleteSpendingRecordResult = Error | MutationDeleteSpendingRecordSuccess;

export type MutationDeleteSpendingRecordSuccess = {
  __typename?: 'MutationDeleteSpendingRecordSuccess';
  data: SpendingRecord;
};

export type MutationDeleteUserResult = Error | MutationDeleteUserSuccess;

export type MutationDeleteUserSuccess = {
  __typename?: 'MutationDeleteUserSuccess';
  data: User;
};

export type MutationUpdateDonationRecordAmountResult = Error | MutationUpdateDonationRecordAmountSuccess;

export type MutationUpdateDonationRecordAmountSuccess = {
  __typename?: 'MutationUpdateDonationRecordAmountSuccess';
  data: DonationRecord;
};

export type MutationUpdateDonationRecordDonorContactResult = Error | MutationUpdateDonationRecordDonorContactSuccess;

export type MutationUpdateDonationRecordDonorContactSuccess = {
  __typename?: 'MutationUpdateDonationRecordDonorContactSuccess';
  data: DonationRecord;
};

export type MutationUpdateDonationRecordDonorNameResult = Error | MutationUpdateDonationRecordDonorNameSuccess;

export type MutationUpdateDonationRecordDonorNameSuccess = {
  __typename?: 'MutationUpdateDonationRecordDonorNameSuccess';
  data: DonationRecord;
};

export type MutationUpdateSalesRecordClientContactResult = Error | MutationUpdateSalesRecordClientContactSuccess;

export type MutationUpdateSalesRecordClientContactSuccess = {
  __typename?: 'MutationUpdateSalesRecordClientContactSuccess';
  data: SalesRecord;
};

export type MutationUpdateSalesRecordClientNameResult = Error | MutationUpdateSalesRecordClientNameSuccess;

export type MutationUpdateSalesRecordClientNameSuccess = {
  __typename?: 'MutationUpdateSalesRecordClientNameSuccess';
  data: SalesRecord;
};

export type MutationUpdateSalesRecordDiscountResult = Error | MutationUpdateSalesRecordDiscountSuccess;

export type MutationUpdateSalesRecordDiscountSuccess = {
  __typename?: 'MutationUpdateSalesRecordDiscountSuccess';
  data: SalesRecord;
};

export type MutationUpdateSalesRecordPriceResult = Error | MutationUpdateSalesRecordPriceSuccess;

export type MutationUpdateSalesRecordPriceSuccess = {
  __typename?: 'MutationUpdateSalesRecordPriceSuccess';
  data: SalesRecord;
};

export type MutationUpdateSalesRecordProductResult = Error | MutationUpdateSalesRecordProductSuccess;

export type MutationUpdateSalesRecordProductSuccess = {
  __typename?: 'MutationUpdateSalesRecordProductSuccess';
  data: SalesRecord;
};

export type MutationUpdateSalesRecordQuantityResult = Error | MutationUpdateSalesRecordQuantitySuccess;

export type MutationUpdateSalesRecordQuantitySuccess = {
  __typename?: 'MutationUpdateSalesRecordQuantitySuccess';
  data: SalesRecord;
};

export type MutationUpdateSpendingRecordAmountResult = Error | MutationUpdateSpendingRecordAmountSuccess;

export type MutationUpdateSpendingRecordAmountSuccess = {
  __typename?: 'MutationUpdateSpendingRecordAmountSuccess';
  data: SpendingRecord;
};

export type MutationUpdateSpendingRecordNoteResult = Error | MutationUpdateSpendingRecordNoteSuccess;

export type MutationUpdateSpendingRecordNoteSuccess = {
  __typename?: 'MutationUpdateSpendingRecordNoteSuccess';
  data: SpendingRecord;
};

export type MutationUpdateUserNameResult = Error | MutationUpdateUserNameSuccess;

export type MutationUpdateUserNameSuccess = {
  __typename?: 'MutationUpdateUserNameSuccess';
  data: User;
};

export type MutationUpdateUserPasswordResult = Error | MutationUpdateUserPasswordSuccess;

export type MutationUpdateUserPasswordSuccess = {
  __typename?: 'MutationUpdateUserPasswordSuccess';
  data: User;
};

export type MutationUpdateUserSchoolResult = Error | MutationUpdateUserSchoolSuccess;

export type MutationUpdateUserSchoolSuccess = {
  __typename?: 'MutationUpdateUserSchoolSuccess';
  data: User;
};

export type Query = {
  __typename?: 'Query';
  currentUser?: Maybe<QueryCurrentUserResult>;
  donationRecord?: Maybe<QueryDonationRecordResult>;
  donationRecords?: Maybe<QueryDonationRecordsResult>;
  salesRecord?: Maybe<QuerySalesRecordResult>;
  salesRecords?: Maybe<QuerySalesRecordsResult>;
  spendingRecord?: Maybe<QuerySpendingRecordResult>;
  spendingRecords?: Maybe<QuerySpendingRecordsResult>;
  user?: Maybe<QueryUserResult>;
  users?: Maybe<QueryUsersResult>;
};


export type QueryDonationRecordArgs = {
  input: DonationRecordFindByIdInput;
};


export type QuerySalesRecordArgs = {
  input: SalesRecordFindByIdInput;
};


export type QuerySpendingRecordArgs = {
  input: SpendingRecordFindByIdInput;
};


export type QueryUserArgs = {
  input: UserFindByIdInput;
};

export type QueryCurrentUserResult = Error | QueryCurrentUserSuccess;

export type QueryCurrentUserSuccess = {
  __typename?: 'QueryCurrentUserSuccess';
  data: User;
};

export type QueryDonationRecordResult = Error | QueryDonationRecordSuccess;

export type QueryDonationRecordSuccess = {
  __typename?: 'QueryDonationRecordSuccess';
  data: DonationRecord;
};

export type QueryDonationRecordsResult = Error | QueryDonationRecordsSuccess;

export type QueryDonationRecordsSuccess = {
  __typename?: 'QueryDonationRecordsSuccess';
  data: Array<DonationRecord>;
};

export type QuerySalesRecordResult = Error | QuerySalesRecordSuccess;

export type QuerySalesRecordSuccess = {
  __typename?: 'QuerySalesRecordSuccess';
  data: SalesRecord;
};

export type QuerySalesRecordsResult = Error | QuerySalesRecordsSuccess;

export type QuerySalesRecordsSuccess = {
  __typename?: 'QuerySalesRecordsSuccess';
  data: Array<SalesRecord>;
};

export type QuerySpendingRecordResult = Error | QuerySpendingRecordSuccess;

export type QuerySpendingRecordSuccess = {
  __typename?: 'QuerySpendingRecordSuccess';
  data: SpendingRecord;
};

export type QuerySpendingRecordsResult = Error | QuerySpendingRecordsSuccess;

export type QuerySpendingRecordsSuccess = {
  __typename?: 'QuerySpendingRecordsSuccess';
  data: Array<SpendingRecord>;
};

export type QueryUserResult = Error | QueryUserSuccess;

export type QueryUserSuccess = {
  __typename?: 'QueryUserSuccess';
  data: User;
};

export type QueryUsersResult = Error | QueryUsersSuccess;

export type QueryUsersSuccess = {
  __typename?: 'QueryUsersSuccess';
  data: Array<User>;
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

export type SalesRecordFindByIdInput = {
  recordId: Scalars['String']['input'];
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

export type SpendingRecordFindByIdInput = {
  recordId: Scalars['String']['input'];
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

export type UserDeleteInput = {
  userId: Scalars['String']['input'];
};

export type UserFindByIdInput = {
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

export type AccountLoginMutationVariables = Exact<{
  password?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
}>;


export type AccountLoginMutation = { __typename?: 'Mutation', accountLogin?: { __typename?: 'Error', message?: string | null } | { __typename: 'MutationAccountLoginSuccess', data: { __typename?: 'User', id?: string | null, email?: string | null, username?: string | null, firstName?: string | null, lastName?: string | null, school?: string | null } } | null };

export type GetAllDonationRecordsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllDonationRecordsQuery = { __typename?: 'Query', donationRecords?: { __typename?: 'Error', message?: string | null } | { __typename: 'QueryDonationRecordsSuccess', data: Array<{ __typename?: 'DonationRecord', id?: string | null, donorName?: string | null, donorContact?: string | null, amount?: number | null, createdAt?: any | null }> } | null };



export const AccountLoginDocument = `
    mutation AccountLogin($password: String = "", $username: String = "") {
  accountLogin(input: {username: $username, password: $password}) {
    ... on MutationAccountLoginSuccess {
      __typename
      data {
        id
        email
        username
        firstName
        lastName
        school
      }
    }
    ... on Error {
      message
    }
  }
}
    `;

export const useAccountLoginMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<AccountLoginMutation, TError, AccountLoginMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) => {
    
    return useMutation<AccountLoginMutation, TError, AccountLoginMutationVariables, TContext>(
      ['AccountLogin'],
      (variables?: AccountLoginMutationVariables) => fetcher<AccountLoginMutation, AccountLoginMutationVariables>(client, AccountLoginDocument, variables, headers)(),
      options
    )};

export const GetAllDonationRecordsDocument = `
    query GetAllDonationRecords {
  donationRecords {
    ... on QueryDonationRecordsSuccess {
      __typename
      data {
        id
        donorName
        donorContact
        amount
        createdAt
      }
    }
    ... on Error {
      message
    }
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
      variables === undefined ? ['GetAllDonationRecords'] : ['GetAllDonationRecords', variables],
      fetcher<GetAllDonationRecordsQuery, GetAllDonationRecordsQueryVariables>(client, GetAllDonationRecordsDocument, variables, headers),
      options
    )};

useGetAllDonationRecordsQuery.getKey = (variables?: GetAllDonationRecordsQueryVariables) => variables === undefined ? ['GetAllDonationRecords'] : ['GetAllDonationRecords', variables];
