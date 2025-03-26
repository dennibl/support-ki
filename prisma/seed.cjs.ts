const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

async function main() {
	const passwordAdmin = await bcrypt.hash('adminpass123', 10);
	const passwordSupport = await bcrypt.hash('supportpass123', 10);

	await prisma.user.upsert({
		where: { email: 'admin@support.local' },
		update: {},
		create: {
			email: 'admin@support.local',
			name: 'Admin User',
			password: passwordAdmin,
			role: 'ADMIN',
		},
	});

	await prisma.user.upsert({
		where: { email: 'support@support.local' },
		update: {},
		create: {
			email: 'support@support.local',
			name: 'Support Mitarbeiter',
			password: passwordSupport,
			role: 'SUPPORTER',
		},
	});

	console.log('✅ Seed erfolgreich ausgeführt!');
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
