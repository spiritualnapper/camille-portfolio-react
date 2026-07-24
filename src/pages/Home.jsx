import TenorGif from "../components/TenorGif";

function Home() {
  return (
    <>
      <h1 className="text-3xl md:text-4xl font-normal tracking-tight">
        Camille Elliott
      </h1>
      <p className="text-sm md:text-base text-neutral-800 leading-relaxed">
        Frontend web developer and UI designer based in Brooklyn, NY.
      </p>
      <div className="mt-8 w-full max-w-xs">
        <TenorGif postId="19489640" aspectRatio="0.953125" />
      </div>
    </>
  );
}

export default Home;
