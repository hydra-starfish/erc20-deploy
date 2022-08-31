ERC20 Deploy Readme

1. Install dependencies

```
yarn install
```

2. Compile contracts

```
yarn run compile
```

3. Copy `.env.example` as `.env` and input private key to `PRIVATE_KEY=` in `.env`

```
cp .env.example .env
```

4. deploy ERC20

```
yarn hardhat run --network <NETWORK> scripts/deployERC20.ts
```
