export type Role = 'ADMIN' | 'SUPPORTER';

export type SessionUser = {
	id: string;
	email: string;
	role: Role;
};
