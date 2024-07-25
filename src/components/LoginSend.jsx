import { ConnectButton, useActiveAccount } from "thirdweb/react";
import { ThirdwebProvider } from "thirdweb/react";
// import Counter from './counter';
import SendEther from './sendether';
import { client, chain } from '../utils/constants';

const LoginSend = () => {
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
          <SendEther />
      </div>
    ) : (
      <div>
        <ConnectButton
          client={client}
          chain={chain}
        />
      </div>
    )}
    </div>
        </ThirdwebProvider>
  )
}

export default LoginSend;