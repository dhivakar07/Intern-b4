function Features() {
    return (
        <>
            <div style={{ paddingLeft: "5vw", paddingRight: "5vw" }} className="p-10" >

                <p className="text-gray-400 text-sm font-light py-2  ">
                    WHAT KEES DOES
                </p>

                <h2 className="text-black text-[5vw] font-bold py-5">
                    Six things, done properly.</h2>

                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-500 
                leading-relaxed max-w-xl lg:max-w-2xl py-5">

                    No configuration weekend, no plugin marketplace. The parts of the job
                    a product team actually repeats every fortnight.

                </p>

               
                    <div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-6 m-4">

                        <div className="border rounded-lg border-gray-700 p-4 
                        transition-all duration-300 hover:-translate-y-2">

                            <h3 className="font-bold pb-3">Cycle Planning</h3>
                            <p >Drag work into a two-week cycle and Keel flags the overcommitment
                                before the cycle starts, not at the retro.</p>
                        </div>

                        <div className=" border rounded-lg border-gray-700 p-4
                        transition-all duration-300 hover:-translate-y-2">

                            <h3 className="font-bold pb-3">Release notes that write themselves</h3>
                            <p>Merge a pull request and Keel drafts the customer-facing note 
                                from the issue it closed. 
                                You edit and publish.

                            </p>
                        </div>

                        <div className="border rounded-lg border-gray-700 p-4
                        transition-all duration-300 hover:-translate-y-2">
                            <h3 className="font-bold pb-3">Numbers that hold up</h3>
                            <p>Throughput, carry-over and cycle time measured per team. 
                                No story points, no velocity theatre.</p>
                        </div>

                        <div className="border rounded-lg border-gray-700 p-4
                        transition-all duration-300 hover:-translate-y-2">
                            <h3 className="font-bold pb-3">Connected to the real work</h3>
                            <p>Two-way sync with GitHub and GitLab, 
                            threaded updates in Slack, and Figma frames attached to the issue.</p>
                        </div>

                        <div className="border rounded-lg border-gray-700 p-4
                        transition-all duration-300 hover:-translate-y-2">
                            <h3 className="font-bold pb-3">Built for the keyboard</h3>
                            <p>Every action has a shortcut and a command menu entry. 
                                Triage a week of inbox in a couple of minutes.</p>
                        </div>

                        <div className="border rounded-lg border-gray-700 p-4
                        transition-all duration-300 hover:-translate-y-2">
                            <h3 className="font-bold pb-3">Admin without the ticket queue</h3>
                            <p>SAML single sign-on, granular roles and a searchable audit 
                                log your security reviewer can read alone.</p>
                        </div>

                    </div>
                </div>

            {/* </div> */}
        </>
    )
}
export default Features