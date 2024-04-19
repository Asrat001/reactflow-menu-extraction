import React, { useState } from 'react'
import ReactFlow, {
	Background,
	BackgroundVariant,
	Controls,
	Edge,
	Node,
	ReactFlowProvider,
} from 'reactflow'
import 'reactflow/dist/style.css'
import { shallow } from 'zustand/shallow'
import { Header, Panel } from './components'
import { nodesConfig } from './config/site'
import useStore from './config/store'
import { handleDragOver, handleOnDrop } from './lib/utils'
import { Button } from './components/ui'
import { ArrowLeft } from 'lucide-react'
import { toast } from './components/ui/toast/use-toast'

const selector = (state: {
	nodes: Node[]
	edges: Edge[]
	onNodesChange: any
	onEdgesChange: any
	onConnect: any
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
})

export default function App() {
	const reactFlowWrapper = React.useRef<any>(null)
	const [reactFlowInstance, setReactFlowInstance] = React.useState<any>(null)
	const [text, setText] = useState<string>('');
	const [nnodes, setNNodes] = useState<Node[]>([]);

	const handleExtract = () => {
		const regex = /\d+\.\s[A-Za-z\s]+/g;
		const matches = text.match(regex);
	
		if (matches && matches.length > 0) {
		 
	
		 const nodes=  matches.map((item, index) => ({
			id: `${index}`,
			type: 'textNode',
			data: { label: item },
			position: { x: index * 350, y: Math.random()*200 },
		  }));
	    setNNodes(nodes);
		nnodes.map((item,index)=>{
			setNodes(item)
		})
		 
		} else {
			toast({
				description: 'Please enter Valid data',
				variant: 'destructive',
			})
		}
	  };
	const {
		nodes,
		edges,
		onNodesChange,
		onEdgesChange,
		onConnect,
		setSelectedNode,
		setNodes,
	} = useStore(selector, shallow)
	

	const onDragOver = React.useCallback(
		(event: React.DragEvent<HTMLDivElement>) => {
			handleDragOver(event)
		},
		[]
	)

	const onDrop = React.useCallback(
		(event: any) => {
			handleOnDrop(event, reactFlowWrapper, reactFlowInstance, setNodes)
		},
		[reactFlowInstance, setNodes]
	)

	return (
		<ReactFlowProvider>
			<Header />
			<main className="flex">
			<div className="hidden basis-[300px] md:block lg:basis-[350px]">
				<>
			<div className="p-2 font-semibold flex">
				<button
					onClick={() => {
						setSelectedNode(null)
					}}
				>
					<ArrowLeft/>
				</button>
				<h2 className="flex-grow text-center">Menu Extractor</h2>
			</div>
			<hr />

			<div className="p-2 mt-3">
				<label
					className="block text-sm font-medium text-start text-gray-700"
					htmlFor="message"
				>
					Text
				</label>
				<div className="mt-1">
					<textarea
						rows={4}
						name="message"
						id="message"
						placeholder='1. Shiro '
						onChange={(e) => setText(e.target.value)}
						className="border block w-full border-gray-300 rounded-md sm:text-sm p-2"
					/>
				</div>
				<div className=' mt-10'>
					<Button onClick={handleExtract}>
						Extract
					</Button>
				</div>
				
			</div>
			<Panel/>
		</>
				</div>
				<div
					className="h-[calc(100vh_-_48px)] flex-grow"
					ref={reactFlowWrapper}
				>
					<ReactFlow
						nodes={nodes}
						edges={edges}
						onNodesChange={onNodesChange}
						onEdgesChange={onEdgesChange}
						onConnect={onConnect}
						onPaneClick={() => {
							setSelectedNode(null)
						}}
						onDragOver={onDragOver}
						onDrop={onDrop}
						fitView
						fitViewOptions={{ maxZoom: 1 }}
						onInit={setReactFlowInstance}
						snapToGrid={true}
						nodeTypes={nodesConfig.nodeTypes}
					>
						<Controls />
						<Background variant={BackgroundVariant.Dots} gap={12} size={1} />
					</ReactFlow>
				</div>
			</main>
		</ReactFlowProvider>
	)
}
