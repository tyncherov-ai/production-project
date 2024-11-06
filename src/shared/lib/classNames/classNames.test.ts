import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('some-class')).toBe('some-class');
  });

  test('with additional class', () => {
    const expected = 'some-class class1 class2';
    expect(classNames('some-class', {}, ['class1', 'class2'])).toBe(expected);
  });

  test('with mods', () => {
    const expected = 'some-class class1 class2 hovered scrollable';
    expect(
      classNames('some-class', { hovered: true, scrollable: true }, [
        'class1',
        'class2',
      ]),
    ).toBe(expected);
  });

  test('with false mode', () => {
    const expected = 'some-class class1 class2 hovered';
    expect(
      classNames('some-class', { hovered: true, scrollable: false }, [
        'class1',
        'class2',
      ]),
    ).toBe(expected);
  });

  test('with undefined mode', () => {
    const expected = 'some-class class1 class2 hovered';
    expect(
      classNames('some-class', { hovered: true, scrollable: undefined }, [
        'class1',
        'class2',
      ]),
    ).toBe(expected);
  });
});
