import React , { useState , useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';            // yo {{{useLoaderData}}} react-router ko hooks ho

function Github() {

    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     fetch("https://api.github.com/users/iammuskan-git")
    //     .then(res => res.json())
    //     .then(data =>
    //         setData(data)
    //     )
    // }, [])


    const data = useLoaderData();    // useLoaderData le chai data fetch gareko ho

  return (
    <div className='bg-gray-800 text-center text-white pt-3 flex items-center justify-evenly pb-3 rounded-md'>
                                GithubFollowers:  {data.followers}
      <img src={data.avatar_url} alt="Github profile picture" width={300} className='' />
    </div>
  )
}

export default Github


                            // optimatized way for API calling

export const getApiLoader =  async () => {
    const response = await fetch("https://api.github.com/users/iammuskan-git");
    return response.json();
}
