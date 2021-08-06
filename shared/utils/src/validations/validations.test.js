import { defaultSchema, paymentSchema } from './validations';

test('defaultSchema', async () => {
  expect(await defaultSchema.isValid('')).toBeFalsy();
  expect(await defaultSchema.isValid({})).toBeTruthy();
});
