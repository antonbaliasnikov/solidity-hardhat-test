import { expect } from 'chai';
import { getWallet, deployContract, LOCAL_RICH_WALLETS } from '../deploy/utils';

describe('Counter', function () {
    it("When I init Counter contract, it initializes the counter with the provided value", async function () {

        const wallet = getWallet(LOCAL_RICH_WALLETS[0].privateKey);

        const initialCounter = 100;
        const counter = await deployContract("Counter", [initialCounter], { wallet, silent: true });

        expect(await counter.getCounter()).to.eq(BigInt(initialCounter));
    });

    it("When I increment the counter, it increases by 1", async function () {

        const wallet = getWallet(LOCAL_RICH_WALLETS[0].privateKey);

        const initialCounter = 100;
        const counter = await deployContract("Counter", [initialCounter], { wallet, silent: true });

        const incrementTx = await counter.incrementCounter();

        // wait until the transaction is processed
        await incrementTx.wait();

        expect(await counter.getCounter()).to.eq(BigInt(initialCounter + 1));
    });

    it("When I set counter to a particular value, it resets to this value", async function () {

        const wallet = getWallet(LOCAL_RICH_WALLETS[0].privateKey);

        const initialCounter = 100;
        const counter = await deployContract("Counter", [initialCounter], { wallet, silent: true });

        const newCounter = 200;
        const setCounterTx = await counter.setCounter(newCounter);

        // wait until the transaction is processed
        await setCounterTx.wait();

        expect(await counter.getCounter()).to.eq(BigInt(newCounter));
    });

});
