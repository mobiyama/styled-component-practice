import { NextPage } from 'next';
import { ProfileTemplate } from '../components/templates';

type SampleType = {
  name: string;
  thumbnail?: string;
  description: string[];
};
const SampleData: SampleType[] = [
  {
    name: 'test1',
    thumbnail: '/img/pika.jpg',
    description: ['テスト', 'です'],
  },
  {
    name: 'test2',
    thumbnail: '/img/hengao.jpg',
    description: ['テスト', 'です'],
  },
];

const Profiles: NextPage = () => {
  const data = SampleData;

  return (
    <ProfileTemplate profiles={data} />
  );
};

export default Profiles;
