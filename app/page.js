"use client";
import Todo from "@/components/Todo";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

export default function Home() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const [todos, setTodos] = useState([]);

  // Fetch todos from the API
  const fetchTodos = async () => {
    try {
      const response = await axios.get("/api");
      setTodos(response.data.todos);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  const deleteTodo = async (mongoId) => {

    const response = await axios.delete(`/api?mongoId=${mongoId}`);
    toast.success(response.data.message);
  }

  useEffect(() => {
    fetchTodos();
  }, []);

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((form) => ({ ...form, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api", formData);

      toast.success(response.data.message);

      setFormData({
        title: "",
        description: "",
      });

      // Refresh the todo list
      fetchTodos();
    } catch (error) {
      console.error("Error adding todo:", error);
      toast.error("Failed to add task.");
    }
  };

  return (
    <>
      <ToastContainer theme="dark" />
      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col items-start gap-2 w-[80%] max-w-[600px] mt-24 px-2 mx-auto"
      >
        <input
          value={formData.title}
          onChange={onChangeHandler}
          type="text"
          name="title"
          placeholder="Add a new task"
          className="w-full p-2 border-2 border-gray-300 rounded-md"
        />
        <textarea
          value={formData.description}
          onChange={onChangeHandler}
          placeholder="Add a description"
          name="description"
          className="w-full p-2 border-2 border-gray-300 rounded-md"
        ></textarea>
        <button className="bg-blue-500 text-white p-2 rounded-md">
          Add Task
        </button>
      </form>

      <div className="relative overflow-x-auto mt-24 w-[60%] mx-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo, index) => (
              <Todo
                key={todo._id}
                id={index + 1}
                title={todo.title}
                description={todo.description}
                mongoId={todo._id}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
