import { StateSchema } from 'app/providers/StoreProvider';

import { getProfileReadonly } from './getProfileReadonly';

describe('getProfileReadonly.test', () => {
  test('should return profile readonly', () => {
    const state = {
      profile: {
        readonly: true,
      },
    } as StateSchema;
    expect(getProfileReadonly(state)).toEqual(true);
  });
  test('should work with empty state', () => {
    const state = {} as StateSchema;
    expect(getProfileReadonly(state)).toEqual(undefined);
  });
});
