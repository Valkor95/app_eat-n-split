import React, { useState } from "react";
import Button from "@atoms/Button/Button";
import Input from "../../atoms/Input/Input";

const AddForm = ({ onAddFriend }) => {
  const [formData, setFormData] = useState({
    name: "",
    image: "https://i.pravatar.cc/48",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) return;
    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name: formData.name.trim(),
      image: `${formData.image}?u=${id}`,
      balance: 0,
    };
    console.log(newFriend);
    onAddFriend(newFriend);
    setFormData({
      name: "",
      image: "https://i.pravatar.cc/48",
    });
  };

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <Input
        type="text"
        label="🧑‍🤝‍🧑Friend name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      <Input
        type="text"
        label="🌇 Image URL"
        name="image"
        disabled
        value={formData.image}
        onChange={handleChange}
      />

      <Button>Add Friend</Button>
    </form>
  );
};

export default AddForm;
