import { useState } from "react";
import { ethers } from "ethers";
import { create as ipfsHttpClient } from "ipfs-http-client";
import { BrowserRouter as Router, Route, useNavigate } from "react-router-dom";
import Web3Modal from "web3modal";
import {Buffer} from "buffer"
import { nftaddress, nftmarketaddress } from "../config";

import NFT from "../artifacts/contracts/NFT.sol/NFT.json";
import Market from "../artifacts/contracts/NFTMarket.sol/NFTMarket.json";
const projectId = '2P9H4sRaCxCvN1nbuSLvKvVkezZ';
const projectSecret = 'e8663ec6461a4862350c269ebd0c5de1';
const auth =
  'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');

  
  const client = ipfsHttpClient({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
    apiPath: '/api/v0',
    headers: {
      authorization: auth,
    },
  });

export default function CreateItem() {
const [fileUrl, setFileUrl] = useState(null);
const [formInput, updateFormInput] = useState({
price: "",
name: "",
description: "",
});
const navigate = useNavigate();

async function onChange(e) {
const file = e.target.files[0];
try {
const added = await client.add(file);
const url = `https://land-bloc-1.infura-ipfs.io/ipfs/${added.path}`;
setFileUrl(url);
} catch (error) {
console.log("Error uploading file: ", error);
}
}

async function createMarket() {
const { name, description, price } = formInput;
if (!name || !description || !price || !fileUrl) return;

const data = JSON.stringify({
  name,
  description,
  image: fileUrl,
});
try {
  const added = await client.add(data);
  const url = `https://land-bloc-1.infura-ipfs.io/ipfs/${added.path}`;
  createSale(url);
} catch (error) {
  console.log("Error uploading file: ", error);
}
}

  async function createSale(url) {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    /* next, create the item */
    let contract = new ethers.Contract(nftaddress, NFT.abi, signer);
    let transaction = await contract.createToken(url);
    let tx = await transaction.wait();
    let event = tx.events[0];
    let value = event.args[2];
    let tokenId = value.toNumber();

    const price = ethers.utils.parseUnits(formInput.price, "ether");

    /* then list the item for sale on the marketplace */
    contract = new ethers.Contract(nftmarketaddress, Market.abi, signer);
    let listingPrice = await contract.getListingPrice();
    listingPrice = listingPrice.toString();

    transaction = await contract.createMarketItem(nftaddress, tokenId, price, {
      value: listingPrice,
    });
    await transaction.wait();
    navigate("/home"); // Use history object to navigate to /home route
  }

  return (
    <div
      // style={{
      //   // backgroundColor: "#20bf55",
      //   // backgroundImage: " linear-gradient(315deg, #20bf55 0%, #01baef 74%)",
      //   minHeight: "100%",
      //   height: "81.5vh"
      // }}
      // className="w-full h-screen bg-gradient-to-r from-gray-800 via-indigo-500 to-gray-800"
      className="w-full h-screen bg-gradient-to-r bg-indigo-700"
    >
      {/* <Particles /> */}
      <div className="flex text-black justify-center" style = {{zIndex:"100"}}> 
        <div className="w-1/2 flex flex-col mt-8 pb-12">
          <input
            placeholder="Asset Name"
            className="mt-8 border rounded-2xl p-4"
            onChange={(e) =>
              updateFormInput({ ...formInput, name: e.target.value })
            }
          />
          <textarea
            placeholder="Asset Description"
            className="mt-2 border rounded-2xl p-4"
            onChange={(e) =>
              updateFormInput({ ...formInput, description: e.target.value })
            }
          />
          <input
            placeholder="Asset Price in Eth"
            className="mt-2 border rounded-2xl p-4"
            onChange={(e) =>
              updateFormInput({ ...formInput, price: e.target.value })
            }
          />
          <input 
                    type = "file"
                    name = "Asset"
                    className="my-4"
                    onChange={onChange}
                    />

                    {
                        fileUrl && (
                            <img className="rounded mt-4" width = "350" src = {fileUrl} />
                        )
                    }
          <button
            onClick={createMarket}
            className="font-bold mt-4 text-white rounded-2xl p-4 shadow-lg"
            style={{ backgroundColor: "#082850" }}
          >
            Create Digital Asset
          </button>
        </div>
      </div>
    </div>
  );
}