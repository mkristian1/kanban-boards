/* eslint-disable import/no-extraneous-dependencies */
// tests/setup.ts
import matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';

expect.extend(matchers);
