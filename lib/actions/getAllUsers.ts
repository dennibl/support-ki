import { prisma } from '@/lib/prisma';

export async function getAllUsers() {
	return prisma.user.findMany({
		select: {
			id: true,
			firstName: true,
			lastName: true,
			department: true,
			email: true,
			role: true,
		},
	});
}
