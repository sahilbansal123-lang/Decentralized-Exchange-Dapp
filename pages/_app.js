import React from "react";
import "../styles/globals.css";
import merge from "lodash/merge";
import "@rainbow-me/rainbowkit/styles.css";

import {
  getDefaultWallets,
  rainbowkitProvider,
  darkTheme,
  midnightTheme,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";

import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { infuraProvider } from "wagmi/providers/infura";

const { chains, provider } = configureChains(
  [chain.polygonMumbai],
  [
    infuraProvider({
      apiKey: "f0267a8d7d5642caa8735db53507eefd",
      priority: 1,
    }),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "Custom Dex",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const myTheme = merge(midnightTheme(), {
  colors: {
    accentColor: "#18181b",
    accentColorForegrund: "#fff",
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <rainbowKitProvider chains={chains} theme={myTheme}>
        <Component {...pageProps} />
      </rainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
