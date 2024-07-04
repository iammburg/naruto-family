import kbKonoha from "./assets/kb-konoha.jpg";
export default function Hero() {
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: `url(${kbKonoha})`,
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl text-white font-bold">
                        Program KB <br /> Desa Konoha
                    </h1>
                    <p className="mb-5 text-white text-shadow-lg">
                        Desa Konoha menyelenggarakan Program
                        Keluarga Berencana (KB) yang wajib diikuti
                        oleh seluruh penduduk desa. Dengan harapan,
                        tidak hanya menurunkan angka kelahiran, tapi
                        juga mewujudkan bonus demografi berkualitas.
                        Moto dua anak cukup yang digunakan untuk
                        mewujudkan keluarga berencana masih berlaku.
                    </p>
                    <button className="btn btn-primary">
                        Daftar Sekarang
                    </button>
                </div>
            </div>
        </div>
    );
}
