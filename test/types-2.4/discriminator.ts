export interface Dog {
    type: 'dog';
    favoriteHuman: string;
}

export interface Cat {
    type: 'cat';
    nemesis: string;
}

export type Animal = Cat | Dog;

// tslint:disable-next-line:no-string-throw
const assertNever = (obj: never): never => {throw 'This should not happen'; };

const doYourThing = (animal: Animal) =>
    animal.type === 'dog'
    ? `So good to see ${animal.favoriteHuman} again`
    : animal.type === 'cat'
    ? `I'm planning to kill ${animal.nemesis} at some point`
    : assertNever(animal)
;

function createAnimal(condition: boolean): Animal {
    if (condition) {
        return {
            type: 'cat',
            nemesis: 'you'
        };
    } else {
        return {
            type: 'dog',
            favoriteHuman: 'you'
        };
    }
}
function createAnimalPromiseFail(condition: boolean): Promise<Animal> {
    let result: Promise<{
        type: string;
        nemesis?: string;
        favoriteHuman?: string;
    }>;

    result = Promise
        .resolve(null)
        .then(_ => {
            if (condition) {
                return {
                    type: 'cat',
                    nemesis: 'you'
                };
            } else {
                return {
                    type: 'dog',
                    favoriteHuman: 'you'
                };
            }
        });
    // $ExpectError
    return result;
}

function createAnimalPromise(condition: boolean): Promise<Animal> {
    return Promise
        .resolve(null)
        .then(_ => {
            if (condition) {
                return {
                    type: 'cat',
                    nemesis: 'you'
                } as Cat;
            } else  {
                return {
                    type: 'dog',
                    favoriteHuman: 'you'
                } as Dog;
            }
        });
}
