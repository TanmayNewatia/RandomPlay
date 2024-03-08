import "../../styles/home.css";

export default function Home() {
    return (
        <div className={"home"}>
            <div className={"home_img"}>
                <div className={"home_content"}>
                    <h1 className="!m-0 font-bold text-[#CEB7B7]">
                        Experience True On-Chain
                    </h1>
                    <h1 className="!m-0 font-bold text-[#CEB7B7]">
                        Multiplayer Games
                    </h1>
                    <p className="text-[#8FB1B9] w-8/12 text-xl">
                        Randomplay Utilizes Aptos Randomness API to Power our multiplayer games not needing to rely on External Web2 Technolgies for Multiplayer Matchmaking
                    </p>
                </div>
            </div>
        </div>
    )
}