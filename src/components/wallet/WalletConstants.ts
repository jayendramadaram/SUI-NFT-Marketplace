import { Aptos, AptosConfig, Network } from "@aptos-labs/ts-sdk";
export const aptosConfig = new AptosConfig({ network: Network.TESTNET });
export const aptos = new Aptos(aptosConfig);
