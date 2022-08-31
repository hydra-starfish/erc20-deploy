import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();

  // Update the tokenName and tokenSymbol
  const tokenName = "Test Terra";
  const tokenSymbol = "test-LUNA";

  const Erc20Token = await ethers.getContractFactory("MockERC20", deployer);
  const erc20Token = await Erc20Token.deploy(
    tokenName,
    tokenSymbol,
    deployer.address,
    ethers.utils.parseEther("1000000000"),
    18
  );
  await erc20Token.deployed();
  console.log(
    `${tokenName}, with symbol ${tokenSymbol}, is deployed to: ${erc20Token.address}`
  );
  console.log("All Done");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
