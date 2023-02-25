

class Burger {
    constructor() {
        this.cheese = undefined;
        this.bun = undefined;
        this.patty = undefined;
    }

    setCheese(cheese) {
        this.cheese = cheese;
    }

    setBun(bun) {
        this.bun = bun;
    }

    setPatty(patty) {
        this.patty = patty;
    }
}

class BurgerBuilder {
    constructor() {
        this.burger = new Burger();
    }

    setCheese(cheese) {
        this.burger.setCheese(cheese);
        return this;
    }

    setBun(bun) {
        this.burger.setBun(bun);
        return this;
    }

    setPatty(patty) {
        this.burger.setPatty(patty);
        return this;
    }

    build() {
        return this.burger;
    }
}

const builder = new BurgerBuilder();

const burger = builder.setBun("toasted").setCheese("swiss").setPatty("bison").build();
console.log(burger);