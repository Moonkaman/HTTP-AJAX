import React from "react";

const AddFriendForm = () => {
  return (
    <div className="add-friend-cont">
      <form action="">
        <h2>Add a Friend</h2>
        <input name="name" placeholder="Friend's Name..." type="text" />
        <input name="age" placeholder="Friend's Age..." type="number" />
        <input name="email" placeholder="Friend's Email..." type="text" />
        <button>Add Friend</button>
      </form>
    </div>
  );
};

export default AddFriendForm;
