import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
  width: 100%;

  .label-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  title: string;
  type: string;
  id: string;
  actionComponent?: React.ReactNode;
}
export default function FormField({
  title,
  type,
  id,
  actionComponent,
  ...props
}: Props) {
  return (
    <Wrapper>
      <div className="label-wrapper">
        <label data-testid="label" htmlFor={id}>
          {title}
        </label>
        {actionComponent && actionComponent}
      </div>
      <input data-testid="input-field" type={type} id={id} {...props} />
    </Wrapper>
  );
}
