
# **Fake Product Identification using Blockchain**  
### **A Decentralized Solution for Supply Chain Transparency**  

## **📌 Overview**  
This project provides a **blockchain-based full-stack web application** to combat counterfeit products by ensuring **supply chain transparency and product authentication**. It leverages **Ethereum smart contracts** and **QR code tracking** to store and verify product details immutably. The system enables **manufacturers, distributors, and consumers** to validate product authenticity at every stage of the supply chain using **Metamask authentication**.  

## **🚀 Key Features**  

### **🛠 Manufacturer’s Portal**  
- A web-based dashboard where manufacturers log in via **Metamask** and register products.  
- Each product is assigned a **unique QR code** that links to an immutable **Ethereum blockchain entry**.  
- The system captures **product origin, transaction timestamps, and owner details**, ensuring authenticity.  

### **📦 Supply Chain Tracking (Intermediaries)**  
- Distributors and retailers log in using their **Metamask wallet** to verify and update product details.  
- The system tracks the product’s journey, recording every transaction on the blockchain.  
- If a fake product is detected, intermediaries can flag it instantly, preventing further circulation.  

### **🔍 Consumer Verification via Mobile App**  
- Consumers scan the **QR code** using the mobile app to retrieve the product’s entire transaction history.  
- The app provides **real-time authenticity checks** by cross-referencing blockchain records.  
- If inconsistencies are detected, users can report counterfeit activity directly through the app.  

### **🔗 Blockchain Integration (Ethereum & Smart Contracts)**  
- **Ethereum Smart Contracts** store product data immutably.  
- Transactions are executed using **Solidity-based functions** (`add()`, `update()`, `show()`).  
- The blockchain ensures **tamper-proof, decentralized data storage**, eliminating the need for centralized authorities.  

### **🔑 Metamask Authentication**  
- **Metamask is required** for all users (manufacturers, intermediaries, consumers) to interact with the blockchain.  
- Users sign transactions securely using their **private keys**.  
- Ensures **decentralized identity verification** without relying on traditional login systems.  

---

## **🛠 Full-Stack Technologies Used**  

### **📌 Backend (Blockchain & Server)**  
- **Ethereum Blockchain** – Stores product transaction history.  
- **Solidity Smart Contracts** – Manages product records on the blockchain.  
- **Web3.js** – Connects frontend with the Ethereum blockchain.  
- **Node.js & Express** – Handles backend API requests for data retrieval.  

### **🌐 Frontend (Web & Mobile Interfaces)**  
- **React.js** – Builds an interactive and responsive manufacturer portal.  
- **Metamask API** – Facilitates authentication and blockchain transactions.  
- **QR Code Generator API** – Generates unique QR codes linked to blockchain transactions.  

### **📱 Mobile App (Consumer Verification)**  
- **React Native** – Enables product scanning via mobile devices.  
- **Web3.js Integration** – Fetches blockchain-stored product details upon QR scan.  

### **🗄 Database & Storage**  
- **Ethereum Ledger** – Stores product transactions permanently.  
- **IPFS (Future Scope)** – Could be used to store product metadata efficiently.  

---

## **🛠 System Workflow**  

### **1️⃣ Manufacturer Registers a Product**  
- Logs in via **Metamask**.  
- Enters **product details** (name, origin, timestamp).  
- Blockchain transaction is signed and stored.  
- **QR Code is generated** and attached to the product.  

### **2️⃣ Product Moves Through Supply Chain**  
- **Intermediaries verify & update** product details upon receiving stock.  
- Each transaction is **added to the blockchain**, maintaining a transparent history.  
- Any attempt to modify existing records **is blocked by Ethereum’s immutability**.  

### **3️⃣ Consumer Scans QR Code**  
- Uses **mobile app** to scan product QR code.  
- Fetches **entire blockchain transaction history**.  
- Verifies if the product details match the manufacturer’s original entry.  
- If **discrepancies are found**, the product may be counterfeit.  

---

## **📊 Smart Contract Implementation**  

### **Solidity Contract Structure**  

```solidity
struct Product {
    uint id;
    string name;
    string source;
    string destination;
    string timestamp;
    address owner;
}

mapping(uint => Product) public products;

function addProduct(uint _id, string memory _name, string memory _source, string memory _destination, string memory _timestamp) public {
    products[_id] = Product(_id, _name, _source, _destination, _timestamp, msg.sender);
}
```

This contract ensures that **each product has a unique blockchain entry**, and every interaction with it is permanently recorded.


### **Prerequisites**  
- Install **Metamask** and configure the **Sepolia testnet**.  
- Install **Node.js** and **npm**.  
- Ensure you have access to an Ethereum wallet (e.g., Metamask).  

### **🔹 Clone the Repository**  
```sh
git clone https://github.com/your-repo/blockchain-fake-product-identification.git
cd blockchain-fake-product-identification
```

### **🔹 Install Dependencies**  
```sh
npm install
```

### **🔹 Start the Development Server**  
```sh
npm start
```

### **🔹 Deploy Smart Contract (Using Hardhat or Truffle)**  
```sh
npx hardhat run scripts/deploy.js --network sepolia
```
