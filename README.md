# Sui NFT Marketplace

A decentralized NFT marketplace built on the **Sui blockchain** that enables users to mint, buy, sell, transfer NFTs, and reward creators.

🎥 **Video Demo**  
[Watch Demo](https://u.pcloud.link/publink/show?code=XZzDA55ZFFJ0tyAOfwuKRjNWz4igPVglGJu7)

---

## 🚀 Core Features

### 🖼 NFT Management

- Mint new NFTs with custom attributes  
- List NFTs for sale with custom pricing  
- Transfer NFTs between addresses  
- View owned NFTs and their details  

### 🛒 Marketplace Functions

- Browse all available NFTs  
- Buy NFTs using SUI tokens  

### 🎁 Creator Rewards

- Send rewards in SUI to NFT creators  

### 🔐 Wallet Integration

- Supports Sui Wallet  
- Secure transaction signing with dApp interaction  

---

## 🛠 Technical Stack

### ⛓ Blockchain

- Sui Blockchain  
- Move Language  
- Sui Framework  

### 💻 Frontend

- React 18  
- TypeScript  
- Vite  
- Tailwind CSS  

### 🔧 Development Tools

- Node.js  
- Sui CLI  
- Move Compiler  
- Git  

---

## ⚙️ Prerequisites

### Development Environment

- Node.js >= v16.0.0  
- npm >= v8.0.0  
- Sui CLI >= v1.16.0  

### Wallet Requirements

- Sui Wallet Browser Extension  
- Devnet SUI Tokens  

---

## 📜 Smart Contract Structure

```move
struct NFT has key {
    id: u64,
    owner: address,
    creator: address,
    name: vector<u8>,
    description: vector<u8>,
    uri: vector<u8>,
    price: u64,
    for_sale: bool,
    rarity: u8,
}

struct Marketplace has key {
    nfts: vector<NFT>,
    sales: vector<NFT>,
    next_id: u64,
}
```

---

## 🚀 Deployment Steps

### 1. Install Sui CLI

```bash
curl -fsSL https://install.sui.io | sh
```

### 2. Initialize Local Network

```bash
sui genesis
```

### 3. Build and Deploy Smart Contract

```bash
sui move build
sui move publish --gas-budget 100000000
```

### 4. Update Contract Address

Replace all instances of:

```move
@0xYOUR_CONTRACT_ADDRESS
```

with your deployed contract address.

---

## 🧑‍💻 Frontend Setup

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/sui-nft-marketplace
cd sui-nft-marketplace
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Update Constants

Edit `src/constants/Constants.ts`:

```ts
export const MARKETPLACE_ADDRESS = "YOUR_DEPLOYED_CONTRACT_ADDRESS";
export const MODULE_NAME = "Marketplace";
```

### 4. Start Development Server

```bash
npm run dev
```

---

## 🗂 Project Structure

```
├── contracts/
│   └── sources/
│       └── NFT.move          # Smart contract
├── src/
│   ├── components/
│   │   ├── Header.tsx        # Navigation
│   │   └── wallet/           # Wallet integration
│   ├── constants/
│   │   └── Constants.ts      # Global constants
│   ├── pages/
│   │   ├── Discover.tsx      # Marketplace page
│   │   ├── Mint.tsx          # NFT minting
│   │   ├── MintedNFT.tsx     # User NFTs
│   │   └── Reward.tsx        # Reward creators
│   └── App.tsx               # Root component
└── public/                   # Static assets
```

---

## 🧪 Usage Guide

### ✅ Minting NFTs

1. Connect your Sui Wallet  
2. Go to the **Mint** page  
3. Fill in:
   - Name  
   - Description  
   - Image URI  
   - Rarity Level  
4. Submit and approve the transaction  

### 💰 Listing NFTs

1. Visit the **Minted** page  
2. Select an NFT  
3. Click "List for Sale"  
4. Enter price in SUI  
5. Confirm listing  

### 🛍 Buying NFTs

1. Navigate to the **Discover** page  
2. Browse NFTs  
3. Click **Buy**  
4. Confirm the purchase transaction  

### 🎉 Rewarding Creators

1. Visit the **Reward** page  
2. Select a creator  
3. Enter reward amount  
4. Send SUI reward  

---

## 🧰 Development

### Run Tests

```bash
npm run test
```

### Build for Production

```bash
npm run build
```

---

## 🧹 Code Style

- ESLint + Prettier Configured  
- TypeScript Strict Mode Enabled  

---

## ❗ Troubleshooting

### Wallet Connection

```ts
if (!connected) {
  alert("Please connect your wallet first");
  return;
}
```

### Transaction Errors

- Ensure sufficient SUI balance  
- Validate gas budget  
- Confirm contract address  

### Image Loading Fallback

```tsx
onError={(e) => {
  (e.target as HTMLImageElement).src = "/placeholder-image.png";
}}
```

---

## 📞 Support

- [Sui GitHub](https://github.com/MystenLabs/sui)  
- [Sui Discord](https://discord.gg/sui)  
- [Official Docs](https://docs.sui.io/)  

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 🤝 Contributing

1. Fork this repo  
2. Create a feature branch  
3. Commit your changes  
4. Push your branch  
5. Open a pull request  

---

## 🙌 Acknowledgments

- Sui Network & Mysten Labs  
- Move Language Team  
- Open Source Contributors  
- React & TypeScript Community