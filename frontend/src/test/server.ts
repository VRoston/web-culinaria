import { rest } from 'msw';
import { setupServer } from 'msw/node';

const recipes = [
    {
        id: 1,
        name: 'Spaghetti Carbonara'
    },
    {
        id: 2,
        name: 'Chicken Curry'
    }
];

export const handlers = [
    rest.get('/api/recipes', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(recipes));
    })
];

export const server = setupServer(...handlers);
