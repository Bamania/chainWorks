import { TransactionButton } from "thirdweb/react";
import { useState, useEffect } from "react";
import { prepareContractCall } from "thirdweb";
import { CONTRACT } from '../utils/constants';
import { upload } from "thirdweb/storage";
import bs58 from 'bs58';

const CreateNode = ({ proposalid, jsonn }) => {
  const [ipfsFilePathBytes32, setIpfsFilePathBytes32] = useState(""); // bytes32
  const [urisoriginal, setUrisoriginal] = useState(""); // State to store URIs
  const jobid = proposalid; // 32-bit number

  // Function to process URI
  const processUri = (uri) => {
    // Remove 'ipfs://' from the start
    let processedUri = uri.replace('ipfs://', '');
    // Remove 'worknode.json' from the end
    if (processedUri.endsWith('/worknode.json')) {
      processedUri = processedUri.slice(0, -'/worknode.json'.length);
    }
    return processedUri;
  };

  useEffect(() => {
    const fetchAndProcessData = async () => {
      try {
        // Upload the JSON and get the URI
        const uploadedUris = await upload({
          client,
          files: [new File([JSON.stringify(jsonn)], "worknode.json")],
        });
        
        // Store the URIs in the state
        setUrisoriginal(uploadedUris);

        // Process the URI to get the CID
        const processedUri = processUri(uploadedUris);
        const cid = processedUri;
        const bytes = bs58.decode(cid).slice(2);
        const hexString = "0x" + Buffer.from(bytes).toString('hex');
        setIpfsFilePathBytes32(hexString);
      } catch (error) {
        console.error('Error uploading or processing URI:', error);
      }
    };

    fetchAndProcessData();
  }, [jsonn]); // Dependency array: re-run if `jsonn` changes

  const prepareTransaction = () => {
    // Log the current values of IPFS file path and Job ID
    console.log("IPFS CID in bytes32: ", ipfsFilePathBytes32);
    console.log("Job ID: ", jobid);

    return prepareContractCall({
      contract: CONTRACT,
      method: "addWorkNode",
      params: [ipfsFilePathBytes32, jobid],
    });
  };

  const handleTransactionSent = () => {
    console.log('Transaction sent...');
  };

  const handleTransactionConfirmed = () => {
    console.log('Transaction confirmed');
    // refetch(); // Refetch the contract data after a successful transaction
  };

  return (
    <div style={{ marginTop: "20px", padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <TransactionButton
        transaction={prepareTransaction}
        onTransactionSent={handleTransactionSent}
        onTransactionConfirmed={handleTransactionConfirmed}
        onError={(error) => {
          console.error("Transaction error", error);
        }}
        style={{ marginTop: "20px", padding: "10px 20px", borderRadius: "4px", backgroundColor: "#007bff", color: "#fff", border: "none" }}
      >
        Add to WorkChain
      </TransactionButton>
    </div>
  );
};

export default CreateNode;

