import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import App from '../App.tsx';

describe('Tabs Component', () => {
  it('renders the Tabs component with TabList and TabPanels', () => {
    render(<App />);

    // Check if all tabs are rendered
    const tabs = screen.getAllByTestId('tab');
    expect(tabs[0]).toBeInTheDocument();
    expect(tabs[1]).toBeInTheDocument();
    expect(tabs[2]).toBeInTheDocument();

    // Check if all tab panels are rendered
    const tabPanels = screen.getAllByTestId('tab-panel');
    expect(tabPanels[0]).toBeInTheDocument();
    expect(tabPanels[1]).toBeInTheDocument();
    expect(tabPanels[2]).toBeInTheDocument();
  });

  it('switches tabs when a tab is clicked', () => {
    render(<App />);

    // Check if the second tab is selected
    const tabs = screen.getAllByTestId('tab');
    // Simulate clicking on the second tab
    fireEvent.click(tabs[1]);
    expect(tabs[1].getAttribute('aria-selected')).toBe('true');
    expect(tabs[0].getAttribute('aria-selected')).toBe('false');
    expect(tabs[0].getAttribute('aria-selected')).toBe('false');

    // Check if the second tab panel content is visible
    const tabPanels = screen.getAllByTestId('tab-panel');
    expect(tabPanels[0].getAttribute('aria-hidden')).toBe('true');
    expect(tabPanels[1].getAttribute('aria-hidden')).toBe('false');
    expect(tabPanels[2].getAttribute('aria-hidden')).toBe('true');
  });
});
