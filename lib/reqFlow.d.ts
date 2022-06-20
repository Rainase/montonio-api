export declare const isDefined: <T>(x: T | null | undefined) => x is T;
/** Takes a dictionary containing nullish values and returns a dictionary of all the defined
 * (non-nullish) values.
 */
export declare const compactDefined: <A>(obj: Record<string, A | null | undefined>) => Record<string, A>;
/**
 * copied from `fp-ts`
 * https://github.com/gcanti/fp-ts/blob/70190b5a03ddc2d31b4708c75c6dfad81d0bfa21/perf/function/flow.t¡s
 */
export declare function flow<A extends Array<unknown>, B>(ab: (...a: A) => B): (...a: A) => B;
export declare function flow<A extends Array<unknown>, B, C>(ab: (...a: A) => B, bc: (b: B) => C): (...a: A) => C;
export declare function flow<A extends Array<unknown>, B, C, D>(ab: (...a: A) => B, bc: (b: B) => C, cd: (b: C) => D): (...a: A) => D;