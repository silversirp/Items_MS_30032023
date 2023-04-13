import express, {Request, Response} from 'express';
import {handleErrors} from './handleErrors';
import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();
const router = express.Router();

// Routes
router.get(
    '/',
    handleErrors(async (req: Request, res: Response) => {
        // Get all items from database using Prisma
        const items = await prisma.item.findMany();

        // Return items
        return res.status(200).send(items);
    })
);

router.post(
    '/',
    handleErrors(async (req: Request, res: Response) => {
        // Save item to database using Prisma
        const item = await prisma.item.create({
            data: {
                name: req.body.name,
                description: req.body.description,
                image: req.body.image,
            },
        });
        console.log('backend: ', item)
        // Return item
        return res.status(201).send(item);
    }))

export default router;
