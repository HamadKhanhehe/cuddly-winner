import SavedShows from "../../components/savedShows/SavedShows"


export default function Account() {
    return (
        <>
        <div className="w-full text-white ">
        <img className="w-full h-[400px] object-cover" src="https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/6e49f73d-f955-4b69-a57c-468e22aadb27/PK-en-20231016-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="/" />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]"></div>
        <div className="absolute top-[20%] p-4 md:p-8">
            <h1 className="text-3xl  md:text-5xl font-bold"></h1>
            

        </div>
        </div>
        <SavedShows />
        </>
    )
}