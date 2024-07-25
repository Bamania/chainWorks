import { getContract, createThirdwebClient, defineChain } from 'thirdweb';

const CLIENT_ID = '4c6ae10a37650f22d07593502301ef5e';

export const client = createThirdwebClient({
  clientId: CLIENT_ID,
});

export const chain = defineChain(2442); // polygon cardona zkEVM testnet

export const contractAddress = '0x4e8df2056a33a8dc53da4e9a8a8f36b1dbe2d904'; // MainDemo.sol
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
				"internalType": "bytes32[2]",
				"name": "ipfsFilePath",
				"type": "bytes32[2]"
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
				"internalType": "bytes32[2]",
				"name": "ipfsFilePath",
				"type": "bytes32[2]"
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
						"internalType": "bytes32[2]",
						"name": "ipfsFilePath",
						"type": "bytes32[2]"
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
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "workNodes",
		"outputs": [
			{
				"internalType": "uint32",
				"name": "jobId",
				"type": "uint32"
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