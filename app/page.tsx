'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
	Dialog,
	DialogContent,
	DialogTrigger,
	DialogHeader,
	DialogTitle,
	DialogDescription,
} from '@/components/ui/dialog';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';

import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';

export default function Home() {
	return (
		<main className='container mx-auto py-10 space-y-8'>
			<h1 className='text-3xl font-bold'>KI-Support App Demo</h1>

			{/* Input & Button Test */}
			<section className=''>
				<Input placeholder='Stelle hier deine Frage...' />
				<Button>Frage senden</Button>
			</section>

			<hr />

			<Popover>
				<PopoverTrigger className='bg-black px-4 py-2 rounded-md text-white'>
					Upload
				</PopoverTrigger>
				<PopoverContent className='bg-white'>
					PDF-Datei hochladen
				</PopoverContent>
			</Popover>

			<DialogDemo />

			<TestTable />
		</main>
	);
}

// Dialog-Test-Komponente
function DialogDemo() {
	return (
		<div>
			<Dialog>
				<DialogTrigger>Open</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Are you absolutely sure?</DialogTitle>
						<DialogDescription>
							This action cannot be undone. This will permanently delete your
							account and remove your data from our servers.
						</DialogDescription>
					</DialogHeader>
				</DialogContent>
			</Dialog>
		</div>
	);
}

// Table-Test-Komponente
function TestTable() {
	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead>ID</TableHead>
					<TableHead>Dateiname</TableHead>
					<TableHead>Hochgeladen am</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				<TableRow>
					<TableCell>1</TableCell>
					<TableCell>sepa-leitfaden.pdf</TableCell>
					<TableCell>17.03.2025</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>2</TableCell>
					<TableCell>s-firm-faq.pdf</TableCell>
					<TableCell>16.03.2025</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	);
}
