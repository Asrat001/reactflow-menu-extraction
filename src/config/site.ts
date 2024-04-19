import { TextNode } from '@/components/nodes'
import { Position } from 'reactflow'
import { Edge, Node } from 'reactflow'

export const nodesConfig = {
	initialNodes: [
	
	] as Node[],
	initialEdges: [{ id: 'e1-1', source: '1', target: '2' }] as Edge[],
	nodeTypes: {
		textNode: TextNode,
	} as any,
}
