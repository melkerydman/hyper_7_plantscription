import express from 'express';

const orderRoutes = express.Router();

orderRoutes.post('/', createOrder);
orderRoutes.put('/:id', updateOrder);
orderRoutes.get('/:id', getOrder);
orderRoutes.get('/', getAllOrders);
orderRoutes.get('/income', getMonthlyIncome);

export default orderRoutes;
