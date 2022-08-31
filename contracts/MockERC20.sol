// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MockERC20 is ERC20 {
    uint8 private _decimals;

    constructor(
        string memory name,
        string memory symbol,
        address initialAccount,
        uint256 initialBalance,
        uint8 destinedDecimals
    ) payable ERC20(name, symbol) {
        _decimals = destinedDecimals;
        _mint(initialAccount, initialBalance);
    }

    function decimals() public view virtual override returns (uint8) {
        return _decimals;
    }
}
