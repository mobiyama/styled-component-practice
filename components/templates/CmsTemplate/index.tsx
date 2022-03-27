import { useEffect, useState } from 'react';
import styled from 'styled-components';

type CmsTemplate = {
  id: string;
  name: string;
  description: string;
  title: string;
};

type ContainerProps = {};

type Props = {
  data: CmsTemplate[];
  className?: string;
} & ContainerProps;

const Component = ({ className, data: datas }: Props) => {
  const [data, setData] = useState<CmsTemplate[]>([]);

  useEffect(() => {
    fetch('https://96edc51sya.microcms.io/api/v1/test', {
      headers: { 'X-MICROCMS-API-KEY': 'bb9b9c87e89e4314ac040618410d7ef9f544' },
    })
      .then((v) => v.json())
      .then((d) => {
        setData(d.contents);
      });
  }, []);
  return (
    <div className={className}>
      <section>
        <h1>CMS Practice</h1>
        <ul>
          {data.map((v) => (
            <li key={v.id}>
              <p>{v.name}</p>
              <p>{v.title}</p>
              <p>{v.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

const StyledComponent = styled(Component)`
  > section {
    height: 1000px;
    width: 1400px;
    margin: auto;
    background-color: #808080;
    > h1 {
      text-align: center;
      font-size: 40px;
    }

    > ul > li {
      font-size: 14px;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px black solid;
    }
  }
`;

export const CmsTemplate = (props: ContainerProps): JSX.Element => {
  const [data, setData] = useState<CmsTemplate[]>([]);

  useEffect(() => {
    fetch('https://96edc51sya.microcms.io/api/v1/test', {
      headers: { 'X-MICROCMS-API-KEY': 'bb9b9c87e89e4314ac040618410d7ef9f544' },
    })
      .then((v) => v.json())
      .then((d) => {
        setData(d.contents);
      });
  }, []);

  return <StyledComponent data={data} />;
};
