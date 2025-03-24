import MenuSidebar from '@/components/sidebar/MenuSidebar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';

interface Props {
	children: React.ReactNode;
}

export default function ProtectedLayout({ children }: Props) {
	return (
		<>
			<SidebarProvider>
				<MenuSidebar />
				<main className='w-full h-[100vh] relative'>
					<SidebarTrigger className='fixed z-10 cursor-pointer h-12 w-12 mt-2' />
					{children}
				</main>
			</SidebarProvider>
		</>
	);
}
