
export const Ricked = () => {
    return (
        <div className="py-5 px-5 bg-zinc-800/[0.75] rounded-md space-y-2">
            <iframe
                className="w-full aspect-video"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=24t4lEvUOJNFazP6&autoplay=1"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
            ></iframe>
        </div>
    )
}