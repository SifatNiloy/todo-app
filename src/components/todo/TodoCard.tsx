import { Button } from "../ui/button";
import deleteIcon from '../../assets/delete.svg';
import editIcon from '../../assets/edit.svg';

const TodoCard = () => {
    return (
        <div className="bg-white rounded-md flex justify-between items-center p-3 border ">
        <input type="checkbox" name="" id="" />
        <p className="font-semibold">Todo title</p>
        <p>Time</p>
        <p>description</p>
        <div className="flex space-x-4">
            <Button className="bg-red-500"><img className="size-5" src={deleteIcon} alt="" /></Button>
            <Button className="bg-[#5C53FE]"><img className="size-5 " src={editIcon} alt="" /></Button>
        </div>
    </div>
    );
};

export default TodoCard;