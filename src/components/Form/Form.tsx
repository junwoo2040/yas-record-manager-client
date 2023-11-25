import { FC, HTMLInputTypeAttribute, useState } from "react";

interface Input {
  label: string;
  placeholder: string;
  type: HTMLInputTypeAttribute;
}

interface IProps {
  inputs: Input[];
}

interface IShape {
  [key: string]: string | number;
}

const Form: FC<IProps> = <T = IShape,>({ inputs }) => {
  const [value, setValue] = useState<T>({});

  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();
      }}
    >
      {inputs.map((input, i) => (
        <div key={i}>
          <label>{input.label}</label>
          <input type={input.type} placeholder={input.placeholder}></input>
        </div>
      ))}
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
