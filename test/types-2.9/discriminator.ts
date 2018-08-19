import { lit } from "./literal";

export interface Dog {
    type: 'dog';
    favoriteHuman: string;
}

export interface Cat {
    type: 'cat';
    nemesis: string;
}

export type Animal = Cat | Dog;

function createAnimalPromise(condition: boolean): Promise<Animal> {
    return Promise
        .resolve(null)
        .then(_ => {
            if (condition) {
                return {
                    type: lit('cat'),
                    nemesis: 'you'
                };
            } else {
                return {
                    type: lit('dog'),
                    favoriteHuman: 'you'
                };
            }
        });
}

const createAnimalPromiseDirect = (condition: boolean) =>
    new Promise<Animal>(resolve =>
        resolve(
            condition
            ? { type: 'cat', nemesis: 'you'}
            : { type: 'dog', favoriteHuman: 'you'}
        )
    );