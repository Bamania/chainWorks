import { getContract, createThirdwebClient, defineChain } from 'thirdweb';

const CLIENT_ID = '4c6ae10a37650f22d07593502301ef5e';

export const client = createThirdwebClient({
  clientId: CLIENT_ID,
});

export const chain = defineChain(2442); // polygon cardona zkEVM testnet

export const contractAddress = '0xf8e81D47203A594245E36C48e151709F0C19fBe8'; // MainDemo.sol
const contractABI = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bytes32",
				"name": "ipfsFileHash",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"internalType": "uint32",
				"name": "jobId",
				"type": "uint32"
			}
		],
		"name": "WorkNodeAdded",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "ipfsFileHash",
				"type": "bytes32"
			},
			{
				"internalType": "uint32",
				"name": "jobId",
				"type": "uint32"
			}
		],
		"name": "addWorkNode",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getWorkNodes",
		"outputs": [
			{
				"components": [
					{
						"internalType": "bytes32",
						"name": "ipfsFileHash",
						"type": "bytes32"
					},
					{
						"internalType": "uint32",
						"name": "jobId",
						"type": "uint32"
					}
				],
				"internalType": "struct WorkRegistry.WorkNode[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

export const CONTRACT = getContract({
  client: client,
  chain: chain,
  address: contractAddress,
  abi: contractABI,
});

