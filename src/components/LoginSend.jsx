import { ConnectButton, useActiveAccount } from "thirdweb/react";
import { ThirdwebProvider } from "thirdweb/react";
// import Counter from './counter';
import SendEther from './sendether';
import { client, chain } from '../utils/constants';
import { useNavigate ,useLocation} from "react-router-dom";

const LoginSend = () => {
  const navigate=useNavigate()
  const location = useLocation();
  const walletAddress = location.state?.walletAddress;
  console.log("wallet adeess onn loginsend ",walletAddress)
  const activeAccount = useActiveAccount();
  return (
        <ThirdwebProvider>
    <div style={{
      display: "flex",
      flexdirection: "column",
      alignItems: "center",
      justifyContent: 'center',
      height: "100vh",
    }}>
    {activeAccount ? (
      <div>
        <ConnectButton
        client={client}
        chain={chain}
        />
          <SendEther walletAddress={walletAddress} />
          <button className="mt-4 bg-blue-500 rounded-md text-white px-4 ml-5 py-2 rounded hover:bg-blue-600" onClick={()=>{navigate("/progress")}}>
        Go back !
      </button>
      </div>
    ) : (
      <div>
        <ConnectButton
          client={client}
          chain={chain}
        />
         <button className="mt-4 bg-blue-500 rounded-md text-white px-4 ml-5 py-2 rounded hover:bg-blue-600" onClick={()=>{navigate("/progress")}}>
        Go back !
      </button>
      </div>
     
      
    )}
    </div>
        </ThirdwebProvider>
  )
}

export default LoginSend;