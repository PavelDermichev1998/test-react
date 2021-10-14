import {mult, splitIntoWords, sum} from "./01";

test('sum should be correct', () => {
    let a: number;
    let b: number;
    let c: number;

    beforeEach(() => {
        a = 1
        b = 2
        c = 3
    });

    const result1 = sum(a, b);
    const result2 = sum(a, c);

    expect(result1).toBe(3);
    expect(result2).toBe(4);
})


test('mult should be correct', () => {
    let a = 1;
    let b = 2;
    let c = 3;

    const result3 = mult(a, b);
    const result4 = mult(a, c);

    expect(result3).toBe(2);
    expect(result4).toBe(3);
})


test('splitIntoWords should be correct', () => {

    let sentence1 = 'Hello my friend!'
    let sentence2 = 'JS - the best programing language.'

    const result1 = splitIntoWords(sentence1);
    const result2 = splitIntoWords(sentence2);

    expect(result1.length).toBe(3);
    expect(result1[0]).toBe('hello');
    expect(result1[1]).toBe('my');
    expect(result1[2]).toBe('friend');

    expect(result2.length).toBe(5);
    expect(result2[0]).toBe('js');
    expect(result2[1]).toBe('the');
    expect(result2[2]).toBe('best');
    expect(result2[3]).toBe('programing');
    expect(result2[4]).toBe('language');
})