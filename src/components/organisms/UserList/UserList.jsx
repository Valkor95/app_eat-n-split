import UserItem from "@molecules/UserItem/UserItem.jsx";
const UserList = ({ friends, selectedFriend, onSelection }) => {
  if (!friends || friends.length === 0) {
    return <p>No friends found.</p>;
  }
  return (
    <ul>
      {friends.map((friend) => (
        <UserItem
          friend={friend}
          key={friend.id}
          onSelect={onSelection}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
};

export default UserList;
