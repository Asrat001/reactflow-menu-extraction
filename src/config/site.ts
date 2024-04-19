import { TextNode } from '@/components/nodes'
import { Edge, Node } from 'reactflow'

export const nodesConfig = {
	initialNodes: [
{
	id: `1`,
	type: 'textNode',
	data:  {
		label: '1. shiro',
		isInitial: true,
	},
	position: { x:  200, y: Math.random()*200 },
},
{
	id: `2`,
	type: 'textNode',
	data:  {
		label: '3. Beyayentu',
		
	},
	position: { x:  600, y: Math.random()*200 },
}
	] as Node[],
	initialEdges: [{ id: 'e1-1', source: '1', target: '2' }] as Edge[],
	nodeTypes: {
		textNode: TextNode,
	} as any,
}
