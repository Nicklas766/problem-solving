function twoStrings(s1, s2) {
    const unS1 = new Set([...s1]);
    const unS2 = new Set([...s2]);

    return new Set([...unS1, ...unS2]).size !== unS1.size + unS2.size ? 'YES' : 'NO';
}