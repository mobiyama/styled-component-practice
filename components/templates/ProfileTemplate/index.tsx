import styled from 'styled-components';
import { PageTitle } from '../../atom';
import { ProfileCard } from '../../organisms';

type SampleType = {
  name: string;
  thumbnail?: string;
  description: string[];
};

type ContainerProps = {
  profiles: SampleType[];
};

type Props = {
  className?: string;
} & ContainerProps;

const Component = ({ className, profiles }: Props) => (
  <div className={className}>
    <PageTitle>プロフィール</PageTitle>
    <section>
      {profiles.map((profile, index) => (
        <div key={`${profile.name}_${index}`} className="profile">
          <ProfileCard
            name={profile.name}
            thumbnail={profile.thumbnail}
            description={profile.description}
          />
        </div>
      ))}
    </section>
  </div>
);

const StyledComponent = styled(Component)`
  text-align: center;
  >section {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
  .profile {
    margin-bottom: 2rem;
  }
`;

export const ProfileTemplate = (props: Props): JSX.Element => (
  <StyledComponent {...props} />
);
