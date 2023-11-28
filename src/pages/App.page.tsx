import { FC } from "react";

import { userHeaders } from "@database/donationRecords";

import Table from "@components/Table/Table";
import Form from "@components/Form/Form";

import { useGetAllDonationRecordsQuery } from "@graphql/generated";
import { graphQLRequestClient } from "@utils/clients";

const App: FC = () => {
  const { data, isLoading, isError } =
    useGetAllDonationRecordsQuery(graphQLRequestClient);

  /*
      <Form
        inputs={[
          { label: "Donor Name", placeholder: "John Doe", type: "text" },
          {
            label: "Donor Contact",
            placeholder: "johndoe@email.com",
            type: "email",
          },
          { label: "Amount", placeholder: "10000", type: "number" },
        ]}
      />
      {isError ? (
        <p>Error</p>
      ) : isLoading ? (
        <p>Loading</p>
      ) : (
        <Table
          headers={userHeaders}
          data={data!.donationRecords!.map((record) => [
            record.donorName || undefined,
            record.donorContact || undefined,
            record.amount || undefined,
          ])}
        />
      )}

     */

  return (
    <>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <Table
          headers={userHeaders}
          data={data!.donationRecords!.map((record) => [
            record.donorName || undefined,
            record.donorContact || undefined,
            record.amount || undefined,
          ])}
        />
      )}
    </>
  );
};

export default App;
