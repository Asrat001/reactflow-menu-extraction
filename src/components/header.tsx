import { GitFork, Github, Workflow } from 'lucide-react'


export function Header() {
	




	return (
		<header className="py-2 px-4 shadow-sm flex justify-between gap-3 flex-wrap">
			<div className="flex    gap-6 i items-center">
			
			<Workflow size={24} />
				<h1 className="text-xl font-bold text-center sm:text-2xl ">
				Menu Extractor and Visualization by by Asrat
				</h1>
			
				<a href='https://github.com/Asrat001/reactflow-menu-extraction' target='_blank'>
				<Github size={24}/>
				</a>
			</div>
			
		</header>
	)
}
