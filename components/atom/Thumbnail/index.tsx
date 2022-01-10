import styled from 'styled-components';
import Image from 'next/image';

type ContainerProps = {
  url: string | undefined;
};

type Props = {
  className?: string;
} & ContainerProps;

const Component = ({ className, url }: Props) => (
  <div className={className}>
    <div>{url ? <Image width={'100px'} height={'100px'} src={url} alt="サムネイル" /> : 'NoImage'}</div>
  </div>
);

const StyledComponent = styled(Component)`
  height: 10rem;
  width: 10rem;
  border: 1px solid blue;
  border-radius: 50%;
  position: relative;
  > div {
    font-size: 2rem;
    position: absolute;
    top: 50%; /* 親要素の半分下にずらす */
    left: 50%; /* 親要素の半分右にずらす */
    transform: translateY(-50%) translateX(-50%); /* 要素自体の半分、上と左にずらす */
  }
`;

export const Thumbnail = (props: Props) => <StyledComponent {...props} />;
