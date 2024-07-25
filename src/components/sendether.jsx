import { TransactionButton } from "thirdweb/react";
import { useContract } from '@thirdweb-dev/react';
import { useState, useEffect } from "react";
import { prepareTransaction, toWei } from "thirdweb";
import { chain, client } from '../utils/constants';

const SendEther = ({walletAddress}) => {
  console.log("wallet adress passed as props",walletAddress)
  const wall = walletAddress.toString();
  console.log(typeof(wall)) 
  const handleTransactionSent = () => {
    console.log('Transaction sent...');
  };

  const handleTransactionConfirmed = () => {
    console.log('Transaction confirmed');
    // refetch(); // Refetch the contract data after a successful transaction
  };
//account here 
  const prepareRawTransaction = () => {
    return prepareTransaction({
    // The account that will be the receiver
    to: wall,
    // The value is the amount of ether you want to send with the transaction
    value: toWei("0.0001"),
    // The chain to execute the transaction on
    chain: chain,
    // Your thirdweb client
    client: client,
  });
};

  return (
    <div style={{ marginTop: "20px", padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <TransactionButton
        transaction={prepareRawTransaction}
        onTransactionSent={handleTransactionSent}
        onTransactionConfirmed={handleTransactionConfirmed}
        onError={(error) => {
          console.error("Transaction error", error);
        }}
        style={{ marginTop: "20px", padding: "10px 20px", borderRadius: "4px", backgroundColor: "#007bff", color: "#fff", border: "none" }}
      >
        Do raw transaction
      </TransactionButton>
    </div>
  );
};

export default SendEther;