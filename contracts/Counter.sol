//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Counter {

    uint256 private counter;

    constructor(uint256 _counter) {
        counter = _counter;
    }

    function getCounter() public view returns (uint256) {
        return counter;
    }

    function setCounter(uint256 _counter) public {
        counter = _counter;
    }

    function incrementCounter() public {
        counter++;
    }

}
