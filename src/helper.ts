export default function counter(val: number): number {
    return val + 1;
}

//write a function to generate the fibonacci series
export function fibonacci(n: number): number[] {
    // eslint-disable-next-line prefer-const
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib;
}