import Input from "@atoms/Input/Input";
import Button from "@atoms/Button/Button";
import Select from "@atoms/Select.jsx/Select";
import React, { useState } from "react";

const BillForm = ({ friend, onSplitBill, setSelectedFriend }) => {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!bill || !paidByUser) return;

    const valueSplit = whoIsPaying === "user" ? paidByFriend : -paidByUser;

    onSplitBill(friend, valueSplit);
    setSelectedFriend(null);
  };

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split the Bill with {friend.name}</h2>
      <Input
        type="text"
        label="💰 Bill value"
        name="value"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
      <Input
        type="text"
        label="🫣 Your expense"
        name="expense"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
          )
        }
      />
      <Input
        type="text"
        label={`🤷‍♂️ ${friend.name}'s expense`}
        name="xExpense"
        value={paidByFriend}
        disabled
      />

      <Select
        label="Who is paying the bill?"
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
        options={[
          { value: "user", label: "You" },
          { value: "friend", label: `${friend.name}` },
        ]}
      />
      <Button>Split Bill</Button>
    </form>
  );
};

export default BillForm;
