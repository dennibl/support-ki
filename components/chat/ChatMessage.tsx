import React from 'react';

interface Props {
	children?: React.ReactNode;
	className?: string;
	text?: string;
	type?: 'usermessage' | 'botmessage';
}

const ChatMessage = ({
	children,
	className = '',
	text,
	type = 'usermessage',
}: Props) => {
	// Variable außerhalb deklarieren
	let specificClasses = '';

	if (type === 'usermessage') {
		specificClasses = `self-end`;
	} else if (type === 'botmessage') {
		specificClasses = `bg-secondary self-start`;
	}

	return (
		<article
			className={`relativ border rounded p-2 my-5 w-3/4 hover:outline-foreground hover:outline focus:outline-foreground focus:outline focus-visible:outline focus-visible:outline-foreground transition-all ${specificClasses} ${className}`}
		>
			<div>{children}</div>
			{text && <p>{text}</p>}
		</article>
	);
};

export default ChatMessage;
