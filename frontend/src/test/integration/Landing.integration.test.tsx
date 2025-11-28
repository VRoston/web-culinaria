import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RecipesList from '../../RecipesList';

describe('Landing integration (RecipesList + API)', () => {
    it('renders recipes returned from API', async () => {
        render(<RecipesList />);

        const item = await screen.findByText(/Spaghetti Carbonara/i);
        expect(item).toBeInTheDocument();
    });
});
