import ReactFlow, {
	Edge,
	Node,
} from 'reactflow'
import  useStore  from '../../config/store'
import { shallow } from 'zustand/shallow'
const selector = (state: {
	nodes: Node[]
	edges: Edge[]
	onNodesChange: any
	onEdgesChange: any
	onConnect: any
  open:boolean
  deleteNode:(nodeId:string) => void
  setOpen:(open:boolean) =>void
	setSelectedNode: (node: Node | null) => void
	setNodes: (node: Node) => void
}) => ({
	nodes: state.nodes,
	edges: state.edges,
	onNodesChange: state.onNodesChange,
	onEdgesChange: state.onEdgesChange,
	onConnect: state.onConnect,
	setSelectedNode: state.setSelectedNode,
	setNodes: state.setNodes,
  deleteNode:state.deleteNode
})
interface MyComponentProps {
  node:Node
}

const DropDownMenu:React.FC<MyComponentProps> = ({node}) => {
  const {
	
		setSelectedNode,
    deleteNode,
    setNodes
		
	} = useStore(selector, shallow)
  const handleDeletClick = (node:Node) => {
    deleteNode(node.id)
  };
  const handleEditClick = (node:Node) => {
    console.log(node.id)
    setSelectedNode(node)
  };
const handelDuplicate = (node:Node) => {
   const oldId:number=parseInt(node.id)
   const newId:number = oldId * Math.max(1,20)
  const dupnode={
    id: `${newId.toString}`,
    type: 'textNode',
    data:node.data,
    position: { x:Math.random()*600, y: Math.random()*200 },
            }
setNodes(dupnode)
}

  return (
    <div className=' flex flex-col  absolute top-10 right-1  border-r-4 border-cyan-300 rounded-sm  bg-white '>
        <ul className=' flex flex-col gap-4 '>
<li className=" hover:bg-slate-200 w-full p-2">
 <button onClick={()=>handleEditClick(node)}>
  Edit
 </button>
</li>
<li
className="hover:bg-slate-200 w-full p-2"
>
  <button onClick={()=>handleDeletClick(node)}>
  Delete
  </button>
</li>
<li
className="hover:bg-slate-200 w-full p-2"
>
 <button onClick={()=>handelDuplicate(node)}>
 Duplicate
 </button>
</li>
        </ul>

    </div>
  )
}

export default DropDownMenu