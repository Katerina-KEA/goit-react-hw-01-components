import PropTypes from 'prop-types';
import { ProfDiv, Description, Avatar, Name, Text,  Stats, StatsList, SLabel, SQuantity } from './Profile.styled';


const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfDiv>
      <Description>
        <Avatar src={avatar} alt={username} />
        <Name>{username}</Name>
        <Text>@{tag}</Text>
        <Text>{location}</Text>
      </Description>

      <Stats>
        <StatsList>
          <SLabel>Followers</SLabel>
          <SQuantity>{stats.followers}</SQuantity>
        </StatsList>
        <StatsList>
          <SLabel>Views</SLabel>
          <SQuantity>{stats.views}</SQuantity>
        </StatsList>
        <StatsList>
          <SLabel>Likes</SLabel>
          <SQuantity>{stats.likes}</SQuantity>
        </StatsList>
      </Stats>
    </ProfDiv>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired
};

export default Profile;