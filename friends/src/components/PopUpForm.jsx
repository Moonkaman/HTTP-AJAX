import React from "react";

const PopUpForm = props => {
  return (
    <div className="add-friend-cont">
      <form onSubmit={props.addFriend}>
        <h2>Add a Friend</h2>
        <input
          name="name"
          value={props.newFriend.name}
          placeholder="Friend's Name..."
          type="text"
          onChange={props.handleChange}
        />
        <input
          name="age"
          value={props.newFriend.age}
          placeholder="Friend's Age..."
          type="number"
          onChange={props.handleChange}
        />
        <input
          name="email"
          value={props.newFriend.email}
          placeholder="Friend's Email..."
          type="text"
          onChange={props.handleChange}
        />
        <button>Add Friend</button>
      </form>
    </div>
  );
};

export default PopUpForm;
