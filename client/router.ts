import { Router, Request, Response, NextFunction } from 'express';
import { requireAuth } from '../auth/middlewares';
import controller from './controller'
 

const router = Router();

router.get("/", requireAuth, async (req: Request, res: Response, next: NextFunction) => {
    const list = await controller.list();
    res.json(list);
});

router.post("./", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const client = await controller.clientes(req.body);
        res. status(201).json(client);
    } catch (error) {
        res.json({
            message: error
        })
    }
})

router.get("/:id", requireAuth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params;
        const client = await controller.getOne(id);
        res.json(client);
    } catch (error: any) {
        console.log("Client is missing");
        
        res.json({
            message: error.message
        })
    }
});

router.delete("/:id", requireAuth, async (req: Request, res: Response, next: NextFunction) => {
    const {id} = req.params;
    try {
         await controller.deleteOne(id);
        res.status(204).json({});
        } catch (error: any) {
            if (error.name === 'clientException') {
                res.status(400).json({
                    message: error.message
                })
            }
            if (error.message === 'Inventary not found') {
                res.json({
                    message: error.message
                });
            }
    };
});

router.patch("/id", requireAuth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const model = await controller.update(req.params.id, req.body);
        res.status(200).json(model);

    } catch (error: any) {
        if (error.name === 'inventaryException') {
            res.status(400).json({
                message: error
            })
        }
        res.status(500).json({
            message: error
        });
    }
})


export default router;