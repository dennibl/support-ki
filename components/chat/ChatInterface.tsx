'use client';
import { useRef, KeyboardEvent, useLayoutEffect } from 'react';
import ChatMessage from './ChatMessage';

const ChatInterface = () => {
	const inputRef = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);

	const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
		if (e.key === 'Enter' && !e.shiftKey) {
			e.preventDefault();

			const message = inputRef.current?.innerText.trim();
			if (message && message.length > 0) {
				console.log('Gesendete Nachricht:', message);

				if (inputRef.current) {
					inputRef.current.innerText = '';
					resizeInput(); // Höhe nach Absenden zurücksetzen
				}
			}
		}
	};

	// Höhe des Eingabefelds automatisch anpassen
	const resizeInput = () => {
		const el = inputRef.current;
		if (el) {
			el.style.height = 'auto'; // Reset Höhe, damit Höhe korrekt neu berechnet wird
			const maxHeight = 160; // Ca. 9 Zeilen bei ~18px pro Zeile
			el.style.height = Math.min(el.scrollHeight, maxHeight) + 'px';
			el.style.overflowY = el.scrollHeight > maxHeight ? 'auto' : 'hidden';
		}
	};

	const handleInput = () => {
		const el = inputRef.current;
		if (!el) return;

		// Wenn nur unsichtbare Zeichen da sind → Element wirklich leeren
		if (el.innerText.trim() === '') {
			el.innerHTML = '';
		}

		// Danach Höhe neu berechnen
		resizeInput();
	};

	useLayoutEffect(() => {
		resizeInput();
	}, []);

	return (
		<div className='flex flex-col max-w-[800px] h-full mx-auto relative p-2 overflow-hidden'>
			<div
				ref={containerRef}
				className='flex-grow flex flex-col overflow-y-auto p-2 pb-4'
			>
				<ChatMessage type='usermessage'>
					<p>
						Das ist die Nachricht eines Benutzers Das ist die Nachricht eines
						Benutzers Das ist die Nachricht eines Benutzers Das ist die
						Nachricht eines Benutzers Das ist die Nachricht eines Benutzers
					</p>
					<p>Das ist die Nachricht eines Benutzers</p>
					<p>Das ist die Nachricht eines Benutzers</p>
					<p>Das ist die Nachricht eines Benutzers</p>
				</ChatMessage>
				<ChatMessage type='botmessage'>
					<p>Das ist die Antwort des Chatbots</p>
				</ChatMessage>
			</div>
			<div className='border bg-secondary h-auto rounded  '>
				<div
					ref={inputRef}
					contentEditable
					suppressContentEditableWarning={true}
					onInput={handleInput}
					onKeyDown={handleKeyDown}
					className='chat-placeholder p-2 rounded min-h-30  max-h-[160px] overflow-hidden overflow-y-auto hover:outline-foreground hover:outline focus:outline focus:outline-foreground focus-visible:outline focus-visible:outline-foreground transition-all'
				/>
			</div>
		</div>
	);
};

export default ChatInterface;
