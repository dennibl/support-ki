'use client';
import { useRef, KeyboardEvent, useEffect } from 'react';
import ChatMessage from './ChatMessage';

const ChatInterface = () => {
	const inputRef = useRef<HTMLParagraphElement>(null);

	const handleKeyDown = (e: KeyboardEvent<HTMLParagraphElement>) => {
		if (e.key === 'Enter' && !e.shiftKey) {
			e.preventDefault();

			const message = inputRef.current?.innerText.trim();
			if (message && message.length > 0) {
				console.log('Gesendete Nachricht:', message);

				if (inputRef.current) {
					inputRef.current.innerText = '';
				}
			}
		}
	};

	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.innerText = 'Texteingabefeld';
		}
	}, []);

	const textInputSize = 'h-20';

	return (
		<div className='flex flex-col max-w-[800px] h-full mx-auto relative'>
			<div
				id='messages'
				className={`relativ flex flex-col overflow-y-scroll max-h-[calc(100% - ${textInputSize})]`}
			>
				<ChatMessage>
					<p>Das ist die Nachricht eines Benutzers</p>
				</ChatMessage>
				<ChatMessage>
					<p>Das ist die Antwort des Chatbots</p>
				</ChatMessage>
				<ChatMessage>
					<p>Das ist die Nachricht eines Benutzers</p>
				</ChatMessage>
				<ChatMessage>
					<p>Das ist die Antwort des Chatbots</p>
				</ChatMessage>
				<ChatMessage>
					<p>Das ist die Nachricht eines Benutzers</p>
				</ChatMessage>
				<ChatMessage>
					<p>Das ist die Antwort des Chatbots</p>
				</ChatMessage>
				<ChatMessage>
					<p>Das ist die Nachricht eines Benutzers</p>
				</ChatMessage>
				<ChatMessage>
					<p>Das ist die Antwort des Chatbots</p>
				</ChatMessage>
			</div>
			<div
				className={`dark:bg-gray-900 bottom-0 absolute w-full z-10 ${textInputSize}`}
			>
				<p
					ref={inputRef}
					contentEditable
					suppressContentEditableWarning={true}
					onKeyDown={handleKeyDown}
					className='border p-2 rounded min-h-[3]'
				/>
			</div>
		</div>
	);
};

export default ChatInterface;
