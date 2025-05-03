import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get('/', getAllSubscription)
subscriptionRouter.get('/user/:id', getAllUserSubscription)
subscriptionRouter.post('/add-subscription', createSubscription)
subscriptionRouter.post('/:id/cancel', createSubscription)


