import {usePlayer} from "@/player";

export default function Play() {
    const player = usePlayer()
    return <div>
        <audio ref={player?.playerRef} controls></audio>
    </div>
}