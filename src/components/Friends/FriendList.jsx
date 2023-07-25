import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
// import { FriendList, FrAvatar, FrName, FrStatus } from './FriendList.styled';
import { ItemsFriend } from './FriendListItem.styled';


const FriendList = ({ friends }) => {
  return (
    <ItemsFriend>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ItemsFriend>
  );
};
export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

