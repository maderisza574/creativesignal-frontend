import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function UpdateProfile() {
  const user = useSelector((state) => state.user);
  //   user =  {
  //     userId: id,
  //     name: "Bagus Tri H",
  //     username: "bagus",
  //     gender: "Male",
  //     profession: "Trainer",
  //     nationality: "Indonesia",
  //     dateOfBirth: "2020-01-01",
  //     phoneNumber: "0812345678",
  //     role: "user",
  //   },

  const [form, setForm] = useState(user.data);
  console.log(setForm);
  console.log(form);
  return (
    <div>
      <h1>UpdateProfile</h1>
      <input type="text" placeholder="name ..." value={form.name} />
    </div>
  );
}
