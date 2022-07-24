import { ActivityType } from "../../app/types";
import { FaMapMarkedAlt } from 'react-icons/fa'
import WorldEditor from "../../components/WorldEditor/WorldEditor";

export const Activities: ActivityType[] = [
    {
        name: 'World Editor',
        path: 'world-editor',
        icon: <FaMapMarkedAlt/>,
        element: <WorldEditor/>
    }
]

export default Activities;