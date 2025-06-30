import UserList from "@organisms/UserList/UserList";
import AddForm from "@organisms/AddForm/AddForm";
import Button from "@atoms/Button/Button";
import BillForm from "./components/organisms/BillForm/BillForm";
import initialFriends from "@utils/index";
import useNewFriend from "@hooks/useNewFriend";
import React, { useState } from "react";

function App() {
  const {
    showAddForm,
    setShowAddForm,
    friends,
    handleAddFriend,
    handleSplitBill,
  } = useNewFriend({ initialFriends });

  const [selectedFriend, setSelectedFriend] = useState(null);

  const handleSelectFriend = (friend) => {
    setSelectedFriend((selected) =>
      selected?.id === friend.id ? null : friend
    );
    setShowAddForm(false);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <UserList
          friends={friends}
          selectedFriend={selectedFriend}
          onSelection={handleSelectFriend}
        />

        {showAddForm && <AddForm onAddFriend={handleAddFriend} />}

        <Button onClick={() => setShowAddForm((prevState) => !prevState)}>
          {showAddForm ? "Close" : "Add Friend"}
        </Button>
      </div>

      {selectedFriend && (
        <BillForm
          key={selectedFriend.id}
          friend={selectedFriend}
          onSplitBill={handleSplitBill}
          setSelectedFriend={setSelectedFriend}
        />
      )}
    </div>
  );
}

export default App;
