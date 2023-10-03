import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Web3Modal from "web3modal"
import img4 from '../public/img4.jpeg'
import img5 from '../public/img5.jpeg'
import img6 from '../public/img6.jpeg'
import img7 from '../public/img7.jpeg'
import img8 from '../public/img8.jpeg'
// import img from 'next/img'

import {
  nftmarketaddress, nftaddress
} from '../config'

import Market from '../artifacts/contracts/NFTMarket.sol/NFTMarket.json'
import NFT from '../artifacts/contracts/NFT.sol/NFT.json'

export default function MyAssets() {
  const [nfts, setNfts] = useState([])
  const [loadingState, setLoadingState] = useState('not-loaded')
  useEffect(() => {
    loadNFTs()
  }, [])
  async function loadNFTs() {
    const web3Modal = new Web3Modal({
      network: "mainnet",
      cacheProvider: true,
    })
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()

    const marketContract = new ethers.Contract(nftmarketaddress, Market.abi, signer)
    const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider)
    const data = await marketContract.fetchMyNFTs()

    const items = await Promise.all(data.map(async i => {
      const tokenUri = await tokenContract.tokenURI(i.tokenId)
      const meta = await axios.get(tokenUri)
      let price = ethers.utils.formatUnits(i.price.toString(), 'ether')
      let item = {
        price,
        tokenId: i.tokenId.toNumber(),
        seller: i.seller,
        owner: i.owner,
        img: meta.data.img,
      }
      return item
    }))
    setNfts(items)
    setLoadingState('loaded')
  }
  if (loadingState === 'loaded' && !nfts.length) return (<h1 className="py-10 px-20 text-3xl">No assets owned</h1>)
  return (
    <div className="flex justify-center">
      <div className="p-4">
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4"> */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {
            nfts.map((nft, i) => (
              <div key={i} className="border shadow rounded-xl overflow-hidden">
                {/* <img src={nft.img} className="rounded" /> */}
                <div className="p-4 bg-black">
                  <p className="text-2xl font-bold text-white">Price - {nft.price} Eth</p>
                </div>
              </div>
            ))
          }

          {/* <div className=" text-white font-[poppins]"> */}
            <div className="flex items-center text-white justify-center">
              <div className="my-10 w-72 cursor-pointer hover:shadow-lime-700 bg-gray-800 p-5 rounded-md shadow-xl">
                <img
                                            className="rounded-md"
                                            src={img4}
                                            alt="Workflow"
                                            style={{height:"185px", width: "300px"}}
                                        />
                  <h2 className="text-md font-bold mt-3">potato</h2>
                  <p className="text-gray-400 text-sm mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <div className="flex justify-between items-center text-sm">
                    <p className="text-cyan-400 font-bold">
                      <i className="fab fa-ethereum"></i> 70.1 ETH
                    </p>
                    <p className="text-gray-400">
                      <i className="fas fa-clock"></i> 3 days left
                    </p>
                  </div>
                  <p className="bg-gray-600 h-[0.5px] w-full my-2"></p>
                  {/* <div className="flex items-center">
                    <img src="https://ik.imgkit.io/bayc/assets/bayc-footer.png" alt="BAYC" className="h-8 w-8 border border-white rounded-full mr-2"/>
                      <p className="text-gray-400 text-[12px]">
                        Created by <a href="https://opensea.io/collection/boredapeyachtclub" target="_black" rel="no-opener"
                          className="text-white font-bold">Bored Ape Yatch Club</a>
                      </p>
                  </div> */}
              </div>
            </div>
          {/* </div> */}
           
            <div className="flex items-center text-white justify-center">
              <div className="my-10 w-72 cursor-pointer hover:shadow-lime-700 bg-gray-800 p-5 rounded-md shadow-xl">
                <img
                                            className="rounded-md"
                                            src={img5}
                                            alt="Workflow"
                                            style={{height:"185px", width: "300px"}}
                                        />
                  <h2 className="text-md font-bold mt-3">apple</h2>
                  <p className="text-gray-400 text-sm mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <div className="flex justify-between items-center text-sm">
                    <p className="text-cyan-400 font-bold">
                      <i className="fab fa-ethereum"></i> 70.1 ETH
                    </p>
                    <p className="text-gray-400">
                      <i className="fas fa-clock"></i> 3 days left
                    </p>
                  </div>
                  <p className="bg-gray-600 h-[0.5px] w-full my-2"></p>
                  {/* <div className="flex items-center">
                    <img src="https://ik.imagekit.io/bayc/assets/bayc-footer.png" alt="BAYC" className="h-8 w-8 border border-white rounded-full mr-2"/>
                      <p className="text-gray-400 text-[12px]">
                        Created by <a href="https://opensea.io/collection/boredapeyachtclub" target="_black" rel="no-opener"
                          className="text-white font-bold">Bored Ape Yatch Club</a>
                      </p>
                  </div> */}
              </div>
            </div>
           
          
            <div className="flex items-center text-white justify-center">
              <div className="my-10 w-72 cursor-pointer hover:shadow-lime-700 bg-gray-800 p-5 rounded-md shadow-xl">
                <img
                                            className="rounded-md"
                                            src={img6}
                                            alt="Workflow"
                                            style={{height:"185px", width: "300px"}}
                                        />
                  <h2 className="text-md font-bold mt-3">potato</h2>
                  <p className="text-gray-400 text-sm mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <div className="flex justify-between items-center text-sm">
                    <p className="text-cyan-400 font-bold">
                      <i className="fab fa-ethereum"></i> 70.1 ETH
                    </p>
                    <p className="text-gray-400">
                      <i className="fas fa-clock"></i> 3 days left
                    </p>
                  </div>
                  <p className="bg-gray-600 h-[0.5px] w-full my-2"></p>
                  {/* <div className="flex items-center">
                    <img src="https://ik.imagekit.io/bayc/assets/bayc-footer.png" alt="BAYC" className="h-8 w-8 border border-white rounded-full mr-2"/>
                      <p className="text-gray-400 text-[12px]">
                        Created by <a href="https://opensea.io/collection/boredapeyachtclub" target="_black" rel="no-opener"
                          className="text-white font-bold">Bored Ape Yatch Club</a>
                      </p>
                  </div> */}
              </div>
            </div>
          
          
            <div className="flex items-center text-white justify-center">
              <div className="my-10 w-72 cursor-pointer hover:shadow-lime-700 bg-gray-800 p-5 rounded-md shadow-xl">
                <img
                                            className="rounded-md"
                                            src={img7}                                            alt="Workflow"
                                            style={{height:"185px", width: "300px"}}
                                        />
                  <h2 className="text-md font-bold mt-3">apple</h2>
                  <p className="text-gray-400 text-sm mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <div className="flex justify-between items-center text-sm">
                    <p className="text-cyan-400 font-bold">
                      <i className="fab fa-ethereum"></i> 70.1 ETH
                    </p>
                    <p className="text-gray-400">
                      <i className="fas fa-clock"></i> 3 days left
                    </p>
                  </div>
                  <p className="bg-gray-600 h-[0.5px] w-full my-2"></p>
                  {/* <div className="flex items-center">
                    <img src="https://ik.imagekit.io/bayc/assets/bayc-footer.png" alt="BAYC" className="h-8 w-8 border border-white rounded-full mr-2"/>
                      <p className="text-gray-400 text-[12px]">
                        Created by <a href="https://opensea.io/collection/boredapeyachtclub" target="_black" rel="no-opener"
                          className="text-white font-bold">Bored Ape Yatch Club</a>
                      </p>
                  </div> */}
              </div>
            </div>
           
           
            <div className="flex items-center text-white justify-center">
              <div className="my-10 w-72 cursor-pointer hover:shadow-lime-700 bg-gray-800 p-5 rounded-md shadow-xl">
                <img
                                            className="rounded-md"
                                            src={img8}
                                            alt="Workflow"
                                            style={{height:"185px", width: "300px"}}
                                        />
                  <h2 className="text-md font-bold mt-3">potato</h2>
                  <p className="text-gray-400 text-sm mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <div className="flex justify-between items-center text-sm">
                    <p className="text-cyan-400 font-bold">
                      <i className="fab fa-ethereum"></i> 70.1 ETH
                    </p>
                    <p className="text-gray-400">
                      <i className="fas fa-clock"></i> 3 days left
                    </p>
                  </div>
                  <p className="bg-gray-600 h-[0.5px] w-full my-2"></p>
                  {/* <div className="flex items-center">
                    <img src="https://ik.imagekit.io/bayc/assets/bayc-footer.png" alt="BAYC" className="h-8 w-8 border border-white rounded-full mr-2"/>
                      <p className="text-gray-400 text-[12px]">
                        Created by <a href="https://opensea.io/collection/boredapeyachtclub" target="_black" rel="no-opener"
                          className="text-white font-bold">Bored Ape Yatch Club</a>
                      </p>
                  </div> */}
              </div>
            </div>
           
           
            <div className="flex items-center text-white justify-center">
              <div className="my-10 w-72 cursor-pointer hover:shadow-lime-700 bg-gray-800 p-5 rounded-md shadow-xl">
                <img
                                            className="rounded-md"
                                            src={img4}
                                            alt="Workflow"
                                            style={{height:"185px", width: "300px"}}
                                        />
                  <h2 className="text-md font-bold mt-3">apple</h2>
                  <p className="text-gray-400 text-sm mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <div className="flex justify-between items-center text-sm">
                    <p className="text-cyan-400 font-bold">
                      <i className="fab fa-ethereum"></i> 70.1 ETH
                    </p>
                    <p className="text-gray-400">
                      <i className="fas fa-clock"></i> 3 days left
                    </p>
                  </div>
                  <p className="bg-gray-600 h-[0.5px] w-full my-2"></p>
                  {/* <div className="flex items-center">
                    <img src="https://ik.imagekit.io/bayc/assets/bayc-footer.png" alt="BAYC" className="h-8 w-8 border border-white rounded-full mr-2"/>
                      <p className="text-gray-400 text-[12px]">
                        Created by <a href="https://opensea.io/collection/boredapeyachtclub" target="_black" rel="no-opener"
                          className="text-white font-bold">Bored Ape Yatch Club</a>
                      </p>
                  </div> */}
              </div>
            </div>
          
           

{/* <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="rounded-t-lg" src="/docs/imgs/blog/img-1.jpg" alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </a>
    </div>
</div> */}
          
        </div>
      </div>
    </div>
  )
}