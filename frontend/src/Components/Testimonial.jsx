function Testimonial() {
    return (
        <>
            <div style={{ paddingLeft: "5vw", paddingRight: "5vw" }} className="p-10 bg-gray-100" >

                <p className="text-gray-400 text-sm font-light py-2  ">
                    Customers
                </p>

                <h2 className="text-black text-[5vw] font-bold py-5 max-w-xl lg:max-w-2xl leading-relaxed">
                    Teams that stopped narrating their work.</h2>

                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-500 
                leading-relaxed max-w-xl lg:max-w-2xl py-5">

                    Three notes from people who run cycles on Keel, lightly trimmed for length.

                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-6 m-4">

                    <div className="border rounded-lg border-gray-700 p-4 bg-white">
                        <p className="text-5xl font-bold text-teal-700">❝</p>
                        <p className="border-b border-gray-300 pb-3" >We stopped writing release notes by hand in week one.
                            Six months on, every ship still has a note,
                            which was never true before.</p>
                        <div className="items-center">
                            <h3 className="text-[20px] font-semibold text-teal-800">
                                Sana Okonkwo
                            </h3>

                            <p className="text-[17px] text-gray-500">
                                VP Engineering, Northwind Labs
                            </p>
                        </div>



                    </div>

                    <div className="border rounded-lg border-gray-700 p-4 bg-white">
                        <p className="text-5xl font-bold text-teal-700">❝</p>
                        <p className="border-b border-gray-300 pb-3" >Planning used to eat a full afternoon for eleven people.
                            It is a 25 minute call now, and the cycle actually reflects what we finish.</p>
                        <div className="items-center">
                            <h3 className="text-[20px] font-semibold text-teal-800">
                               Marcus Feld
                            </h3>

                            <p className="text-[17px] text-gray-500">
                               Head of Product, Cadence
                            </p>
                        </div>



                    </div>


                    <div className="border rounded-lg border-gray-700 p-4 bg-white">
                        <p className="text-5xl font-bold text-teal-700">❝</p>
                        <p className="border-b border-gray-300 pb-3" >
                            The carry-over chart was uncomfortable to look at, and then it was the thing that
                             got us to cut scope. That is a rare tool.</p>
                        <div className="items-center">
                            <h3 className="text-[20px] font-semibold text-teal-800">
                               Priya Raghunathan
                            </h3>

                            <p className="text-[17px] text-gray-500">
                                Engineering Manager, Orbital Freight
                            </p>
                        </div>



                    </div>

                </div>

            </div>
        </>
    )
}
export default Testimonial