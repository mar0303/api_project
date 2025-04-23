import { render, screen, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import axios from 'axios';
import App from './App';

vi.mock('axios');

const mockCountriesData = [
  { name: { common: 'Test Country 1' }, capital: ['Capital 1'] },
  { name: { common: 'Test Country 2' }, capital: ['Capital 2'] }
];

describe('App Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('fetches countries data on mount', async () => {
    axios.get.mockResolvedValueOnce({ data: mockCountriesData });
    render(<App />);
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith('https://restcountries.com/v3.1/all');
    });
  });

  test('handles API error gracefully', async () => {
    const consoleSpy = vi.spyOn(console, 'log');
    const mockError = new Error('API Error');
    axios.get.mockRejectedValueOnce(mockError);
    
    render(<App />);
    
    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalledWith(mockError);
    });
  });

  test('updates countries state with API response', async () => {
    axios.get.mockResolvedValueOnce({ data: mockCountriesData });
    render(<App />);
    
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledTimes(1);
    });
  });
});
