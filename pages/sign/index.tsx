import React from 'react';
import { WagmiWeb3ConfigProvider,MetaMask,WalletConnect,Sepolia, Polygon } from "@ant-design/web3-wagmi";
import {createConfig, http } from "wagmi";
import { mainnet,sepolia, polygon } from "wagmi/chains";
import { injected, walletConnect } from "wagmi/connectors";

import SignDemo from "../../components/SignDemo";

const config = createConfig({
    chains:[mainnet,sepolia, polygon ],
    transports:{
        [mainnet.id]:http(),
        [sepolia.id]:http(),
        [polygon.id]:http(),
    },
    connectors: [
        injected({
            target:"metaMask",
        }),
        walletConnect({
            projectId: 'c07c0051c2055890eade3556618e38a6',
            showQrModal: false,
        }),
    ]
})

const Demo:React.FC = () => {
    return (
        <WagmiWeb3ConfigProvider
            eip6963
            config={config}
            wallets={[MetaMask()]}
        >
            <SignDemo />
        </WagmiWeb3ConfigProvider>
    );
}
export default Demo;