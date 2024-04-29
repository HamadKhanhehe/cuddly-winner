import { useState ,useEffect } from "react"
import { UserAuth } from "../../context/AuthContext"
import { db } from "../../firebase/Firebase";
import { doc, onSnapshot } from "firebase/firestore";


export default function SavedShows() {
    const [movies,setMovies] = useState([])
    const { user } = UserAuth();

    useEffect(()=> {
        onSnapshot(doc(db, 'users' , `${user?.email}`),(doc) => {
            setMovies(doc.data()?.savedShows);
        } )
    }, [user?.email]
    )

    if (!movies) {
        // Handle the case where movies is still loading
        return <p>Loading...</p>;
      }

    return (
  <>
        <h2 className="text-white font-bold md:text-xl p-4">My Shows</h2>
        <div className="relative flex items-center ">
<div id={'slider'} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
{movies.map((item) => (
 <div key={item.id} className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
 <img
   className='w-full h-auto block'
   src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
   alt={item?.title}
 />
 <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
   <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>
     {item?.title}
   </p>
 </div>
</div>)
)}
</div>
        </div>
  </>

    )
}
































