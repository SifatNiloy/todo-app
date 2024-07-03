import { Button } from "../ui/button";
import deleteIcon from '../../assets/delete.svg';
import editIcon from '../../assets/edit.svg';
import { useAppDispatch } from "../../redux/hooks";
import { removeTodo } from "../../redux/features/todoSlice";

type TTodoCardProps={
    id: string;
    title: string;
    description: string;
    isCompleted: boolean;
}


const TodoCard = ({title, description, id, isCompleted}: TTodoCardProps) => {
    const dispatch= useAppDispatch()
    return (
        <div className="bg-white rounded-md flex justify-between items-center p-3 border ">
        <input type="checkbox" name="" id="" />
        <p className="font-semibold">{title}</p>
        {/* <p>Time</p> */}
        <div>{isCompleted?<p className="text-green-500">Done</p>:<p className="text-orange-500">Pending</p>}</div>
        <p>{description}</p>
        <div className="flex space-x-4">
            <Button onClick={()=> dispatch(removeTodo(id))} className="bg-red-500"><img className="size-5" src={deleteIcon} alt="" /></Button>
            <Button className="bg-[#5C53FE]"><img className="size-5 " src={editIcon} alt="" /></Button>
        </div>
    </div>
    );
};

export default TodoCard;