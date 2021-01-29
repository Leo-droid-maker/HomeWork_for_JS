// В этом задании я, как и многие одногруппники, считерил и использовал решето Эратосфена.
// Использовал код, изученный на курсе по питону и переписал его с учетом синтаксиса JS

let n = 100;
let sieve = [];

for (let i = 0; i <= n; i++) {
    sieve.push(i);
}

sieve[1] = 0;

let m = 2;
let j;

while (m < n) {
    if (sieve[m] != 0) {
        j = m * 2;
        while (j < n) {
            sieve[j] = 0;
            j += m;
        }
    }
    m += 1;
}

for (let i in sieve) {
    if (sieve[i] != 0) console.log(i);
}
