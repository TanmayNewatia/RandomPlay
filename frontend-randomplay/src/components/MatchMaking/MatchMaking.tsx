// import styles from "../../styles/matchmaking.module.css";
import MatchMakingCard from "./MatchMakingCard";

export default function Matchmaking() {
    return (
        <div className="w-screen min-h-screen h-auto flex flex-col justify-center items-center md:h-screen">
            <div className="bg-[#1E0057]/[.5] w-10/12 min-h-4/6 h-4/6 items-center flex flex-col justify-evenly rounded-lg">
                <h2 className="text-white text-4xl font-bold">Random Matchmaking</h2>
                <div className="mx-auto flex w-11/12 h-4/6 justify-between">
                    <MatchMakingCard data={1} />
                    <MatchMakingCard data={2} />
                    <MatchMakingCard data={3} />
                    <MatchMakingCard data={4} />
                </div>
            </div>
            <button></button>
        </div>
    )
}