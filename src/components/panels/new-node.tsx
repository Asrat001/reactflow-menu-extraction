import { NodeTypes } from '@/config/store'
import { UtensilsCrossed } from 'lucide-react'
import React from 'react'

export const AddNodePanel = () => {
	// using HTML Drag and Drop API
	const onDragStart = (
		event: React.DragEvent<HTMLDivElement>,
		nodeType: NodeTypes
	) => {
		event.dataTransfer.setData('application/reactflow', nodeType)
		event.dataTransfer.effectAllowed = 'move'
	}

	return (
		<aside>
			<div className="p-2 font-semibold">
				<h2>Add New Node</h2>
			</div>
			<hr />

			<div className="p-2 mt-3 w-fit min-w-[200px]">
				<div
					className="border border-primary bg-primary/5 text-primary-foreground hover:border-primary/90 hover:bg-primary/10 py-2 px-3 rounded-md cursor-pointer flex flex-col items-center gap-2 transition-colors"
					onDragStart={(event) => onDragStart(event, 'textNode')}
					draggable
				>
					
					<UtensilsCrossed  color="hsl(222.2,47.4%,11.2%)" size="32" />
					<p className=' text-black text-[12px]'>Drag this to the Canvas to create new node</p>
					<p className=' text-[9px] text-primary/80 block sm:hidden'> this feature only works in desktop browser</p>
					<span className="font-semibold text-primary">Add new Menu</span>
				</div>
			</div>
		</aside>
	)
}
