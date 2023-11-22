import { FC } from "react";

import { userData, userHeaders } from "@database/donationRecords";

import Table from "@components/Table/Table";
import Form from "@components/Form/Form";

const App: FC = () => {
  return (
    <>
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
      <Table headers={userHeaders} data={userData} />
    </>
  );
};

export default App;
