import styled from 'styled-components';

type Size = 'middle';
type Color = 'red' | 'primary';

export type ButtonProps = {
  children: React.ReactNode;
  size?: Size;
  color: Color;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent) => void;
  type?: 'submit' | 'reset' | 'button';
};

type Props = {
  className?: string;
} & ButtonProps;

const Component = ({
  className,
  children,
  disabled,
  onClick,
  type = 'button',
}: Props) => (
  <button
    className={className}
    disabled={disabled}
    onClick={onClick}
    type={type}
  >
    {children}
  </button>
);

const StyledComponent = styled(Component)`
  font-size: 16px;
  display: block;
  color: white;
  ${(props) => {
    switch (props.color) {
      case 'red':
        return { backgroundColor: 'red' };
      case 'primary':
        return { backgroundColor: 'blue' };
    }
  }}
`;

export const Button = (props: Props) => <StyledComponent {...props} />;
