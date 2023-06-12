import { ethers } from 'ethers'
import abi from './abi.json'
import { Web3 } from 'web3'
import axios from '@/services/request'

const Financial = {
  address:'0x262cb17AA9c8cdf91721F80976f73d278498cdD9',
  'abi':abi
}

const claimToken11 = async() => {
  // await window.ethereum.enable()
  await window.ethereum.request({ method: 'eth_requestAccounts' });
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = provider.getSigner()
  const c = new ethers.Contract(
    Financial.address,
    Financial.abi,
    signer
  )
  var res =  await c.release(2)
  return await res.wait()
}



const connectToWallet = async () =>{
  var res =  await window.ethereum.request({ method: 'eth_requestAccounts' });
  if (!window.ethereum) return alert('请连接钱包')
  // if (ethereum.networkVersion != 56 && ethereum.networkVersion != 97) return alert('请链接币安智能链')
  if (ethereum.networkVersion != 56 && ethereum.networkVersion != 97) return 1
  else return res
}
export {
  connectToWallet,
  claimToken11,
}
