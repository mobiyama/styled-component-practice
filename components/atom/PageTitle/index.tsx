import styled from 'styled-components';

type ContainerProps = {
  color?: string;
  children: React.ReactNode;
};
type Props = {
  className?: string;
} & ContainerProps;

const Component = ({ className, children }: Props) => (
  <h1 className={className}>{children}</h1>
);

const StyledComponent = styled(Component)`
  color: ${(props) => props.color || 'black'};
  font-size: 3.2rem;
`;

export const PageTitle = (props: Props) => <StyledComponent {...props} />;
