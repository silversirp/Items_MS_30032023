// Connect to sqlite database in backend/prisma/database.db
const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();
const chance = require('chance').Chance();

//  import sample data
async function main() {

    // Empty database
    await prisma.item.deleteMany()

    const sampleData = Array.from({length: 10}).map(() => ({
        name: chance.name(),
        description: chance.sentence(),
        // Create a random data URL
        image: `https://picsum.photos/96/96?random=${Math.floor(Math.random() * 1000)}`
    }));
    for (const data of sampleData) {
        const item = await prisma.item.create({data})
        console.log(`Created new item: ${item.name} (ID: ${item.id})`)
    }
}

main().then(() => {
    console.log('Done')
    process.exit()
});