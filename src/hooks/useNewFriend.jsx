import { useState } from "react";

const useNewFriend = ({ initialFriends }) => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [friends, setFriends] = useState(initialFriends);

  const handleAddFriend = (newFriend) => {
    setFriends((prevFriends) => [...prevFriends, newFriend]);
    setShowAddForm(false);
  };

  const handleSplitBill = (friend, value) => {
    if (value === 0) return;

    setFriends((prevFriends) =>
      prevFriends.map((f) =>
        f.id === friend.id ? { ...f, balance: f.balance + value } : f
      )
    );
  };

  return {
    showAddForm,
    setShowAddForm,
    friends,
    handleAddFriend,
    handleSplitBill,
  };
};

export default useNewFriend;
