vi.mock('sharp', () => ({
  default: vi.fn().mockReturnThis(),
  toFile: vi.fn(),
}));
