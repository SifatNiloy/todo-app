const TodoCard = () => {
    return (
        <div className="bg-white rounded-md flex justify-between items-center p-3">
        <input type="checkbox" name="" id="" />
        <p className="font-semibold">Todo title</p>
        <p>Time</p>
        <p>description</p>
        <div className="flex space-x-4">
            <button>Delete</button>
            <button>Edit</button>
        </div>
    </div>
    );
};

export default TodoCard;