import Todo from "@/components/Todo";

export default function Home() {
  return (
<>    
<form className="flex flex-col items-start  gap-2-w-[80%] max-w-[600px] mt-24 px-2 mx-auto">
  <input type = "text" placeholder="Add a new task" className="w-full p-2 border-2 border-gray-300 rounded-md"/>
  <textarea placeholder="Add a description" className="w-full p-2 border-2 border-gray-300 rounded-md"></textarea>
  <button className="bg-blue-500 text-white p-2 rounded-md">Add Task</button>
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
          <Todo/>



        </tbody>
    </table>
</div>

</>
  )
}
