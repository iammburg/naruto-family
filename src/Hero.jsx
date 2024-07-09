import narutoFamily from "./assets/naruto-family.webp";
import naruto from "./assets/uzumaki-naruto-illustrations.jpg";
export default function Hero() {
    return (
        <div
            className="hero min-h-screen bg-top"
            style={{
                backgroundImage: `url(${naruto})`,
            }}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl text-white font-bold font-montserrat">
                        Tribute to{" "}
                        <span className="text-orange-400">
                            Uzumaki Naruto
                        </span>
                        : A Journey of Gratitude
                    </h1>
                    <p className="mb-5 text-white">
                        Lorem ipsum, dolor sit amet consectetur
                        adipisicing elit. Alias architecto sint quod
                        sequi nulla in obcaecati aspernatur, ratione
                        assumenda odit quis incidunt illum numquam
                        adipisci. Quia vero ipsum iusto illum
                        perferendis deleniti totam suscipit dolor,
                        cumque laudantium, odit ea tempore!
                    </p>
                    <button className="btn rounded-3xl text-orange-400">
                        Let's Start the Journey
                    </button>
                </div>
            </div>
        </div>
    );
}
