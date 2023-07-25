import PropTypes from 'prop-types';
import { FriendList, FrAvatar, FrName, FrStatus } from './FriendList.styled';
// import { ItemsFriend } from './FriendListItem.styled';

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
      <FriendList>
        <FrStatus statusType={isOnline} style={{ backgroundColor: isOnline ? "green" : "red" }}></FrStatus>
        <FrAvatar src={avatar} alt={name} width="48" />
        <FrName>{name}</FrName>
      </FriendList>
    );
}
export default FriendListItem;

FriendListItem.propeTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};