import Button from "../Home/Button";

export default function GamePage() {
    return (
        <div className="w-screen min-h-screen h-auto flex flex-col justify-center items-center md:h-screen">
            <div className="w-10/12 flex flex-col mt-[100px]">
                <div className="hue-rotate-180 bg-[url('./assets/images/game.svg')] w-full bg-no-repeat bg-cover bg-center rounded-xl min-h-[500px] max-h-[500px] h-4/6">

                </div>
                <div className="w-2/12 mx-auto m-4">
                    <Button data={"EXIT MATCH"}/>
                </div>
            </div>
        </div>
    )
}