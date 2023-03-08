import { v4 as uuidv4 } from "uuid";
import usersArray from "../users.json" assert { type: "json" };

let users = [...usersArray];

const getUsers = (req, res) => {
  res.status(200).json(users);
};

const getUser = (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === id);
  res.status(200).json(user);
};

const createUser = (req, res) => {
  let user = req.body;
  user = { id: uuidv4(), ...user };
  users.push(user);
  res.status(200).json({ msg: "new user created", data: user });
};

const deleteUser = (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id !== id);
  res.status(200).json({ msg: `user with ${id} deleted` });
};

const updateUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;

  const user = users.find((user) => user.id === id);

  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;
  if (age) user.age = age;

  res.status(200).json({ msg: `user with ${id} updated` });
};

export { getUsers, getUser, createUser, deleteUser, updateUser };
