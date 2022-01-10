import styled from 'styled-components';
import { Thumbnail } from '../../atom';

type ContainerProps = {
  thumbnail?: string;
  name: string;
  description: string[];
};

type Props = {
  className?: string;
} & ContainerProps;

const Component = ({ className, thumbnail, name, description }: Props) => (
  <div className={className}>
    <div>
      <Thumbnail url={thumbnail} />
    </div>
    <div className="info">
      <div className="name">{name}</div>
      <div>{description}</div>
    </div>
  </div>
);

const StyledComponent = styled(Component)`
    display: flex;
    border: 1px solid red;
    width: 50rem;
  .info {
    .name {
      font-size: 13px;
      font-weight: bold;
    }
  }
`;

export const ProfileCard = (props: Props) => <StyledComponent {...props} />;
