export default function counter(val: number): number {
    return val + 1;
}

//write a function to generate the fibonacci series
export function fibonacci(n: number): number {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}