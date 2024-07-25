import { ConnectButton, useActiveAccount } from "thirdweb/react";
import { ThirdwebProvider } from "thirdweb/react";
// import Counter from './counter';
import CreateNode from './pushNode';
import { client, chain } from '../utils/constants';
import { useLocation, useNavigate } from 'react-router-dom';

const LoginNode = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const proposalid = location.state?.proposalid;
  const jsonnObject = location.state?.jsonForIPFS;
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
          <CreateNode proposalid={proposalid} jsonn={jsonnObject} />
          <button className="mt-4 bg-blue-500 text-white ml-5 px-4 py-2 rounded hover:bg-blue-600" onClick={()=>{navigate("/ongoing-projects")}}>
        Cancel 
      </button>
      </div>
    ) : (
      <div>
        <ConnectButton
          client={client}
          chain={chain}
        />
      <button className="mt-4 bg-blue-500 rounded-md text-white px-4 ml-5 py-2 rounded hover:bg-blue-600" onClick={()=>{navigate("/ongoing-projects")}}>
        Return to Proposals
      </button>
      </div>
    )}
    </div>
        </ThirdwebProvider>
  )
}

export default LoginNode;