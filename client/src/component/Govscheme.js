import React from "react";

const Govscheme = (props) => {
  const outerContainerStyles = {
    display: "flex",
    boxShadow: "-3px 2px 12px 0px rgba(0,0,0,0.75)",
    minHeight: "200px",
    borderRadius: "10px",
    padding: "20px 10px",
    backgroundColor: ""
  }
  return (
    // <div style = {outerContainerStyles}>
    //   <a href={props.url} target="_blank" rel="noreferrer" style = {{display:"flex" , textDecoration: "none" , gap:"20px" , justifyContent: "space-around"}}>
    //     <div>
    //         <img src = {props.image} alt = "news_image" width = "200px"/>
    //     </div>
    //     <div>
    //         <h1 style = {{color:"#082850" , fontWeight:"600" , fontSize:"larger"}}>
    //             {props.title}
    //         </h1>
    //         <p style = {{paddingRight:"30px"}}>{props.description}</p>
    //         <span style = {{color:"#082850"}}>Author : {(props.author) ? props.author : ""}</span>
    //         <p className = "text-gray-500">Source : {props.sourceName}</p>
    //     </div>
    //   </a>
    // </div>


    // <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    //   <a href={props.url} target="_blank" rel="noreferrer">
    //     <img className="rounded-t-lg object-cover" src={props.image} alt="news_image" />
    //   </a>
    //   <div className="p-5">
    //     {/* <a href={props.url} target="_blank" rel="noreferrer">
    //         <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
    //       </a> */}
    //     {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.title}</p> */}
    //     <div>
    //       <h1 style={{ color: "#082850", fontWeight: "600", fontSize: "larger" }}>
    //         {props.title}...
    //       </h1>
    //       <p style={{ paddingRight: "30px" }}>{props.description}...</p>
    //       <span style={{ color: "#082850" }}>Author : {(props.author) ? props.author : ""}</span>
    //       <p className="text-gray-500">Source : {props.sourceName}</p>
    //     </div>
    //     <a href={props.url} target="_blank" rel="noreferrer" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    //       Read more
    //       <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
    //     </a>
    //   </div>


    // </div>

    <div className="flex justify-center">
      <div
        className="flex flex-col rounded-lg bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 shadow-lg shadow-gray-800 dark:bg-neutral-700 md:max-w-xl md:flex-row">
        {/* <a href={props.url}> */}
        <img
          className="  rounded-t-lg object-fill md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={props.image}
          alt="..." />
        {/* </a> */}
        <div className="flex flex-col rounded-lg bg-transparent justify-start p-2">
          <h5
            className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
            {props.title}... <span className="bg-red-500 text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded">Latest</span>
          </h5>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            {props.description}...
          </p>
          <p className="text-xs text-neutral-500 dark:text-neutral-300">
            <span className="text-white" >Author : {(props.author) ? props.author : ""} </span>
            <p className="text-red-600">Source : {props.sourceName}</p>
          </p>
          <a href={props.url} target="_blank" rel="noreferrer">
          <button className="bg-transparent hover:bg-blue-500 text-sm mt-4 w-28 text-left  text-blue-700 font-semibold hover:text-white py-2 px-4 rounded-md">
            Read More
          </button>
          </a>
          
        </div>

      </div>
    </div>

  );
};

export default Govscheme;
