import React from 'react';

const Navbar = ({ account, balance }) => {
  return (
    <nav className="bg-white text-white p-4  fixed h-[1%] w-[80%] z-10">
      {/* <div className="container mx-auto flex justify-between items-center">
         */}
        <div className="flex flex-row-reverse items-center">
          <div className="bg-gray-700 p-2 rounded text-sm mr-4">
            <h2 className="font-semibold mb-1">Wallet Info</h2>
            <p><strong>Account:</strong> {account}</p>
            <p><strong>Balance:</strong> {balance} ETH</p>
          </div>
        </div>
      {/* </div> */}
    </nav>
  );
};

export default Navbar;
