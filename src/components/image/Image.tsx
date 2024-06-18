const Image = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="flex justify-center items-center p-4 pb-5">
      <div className="w-full xl:w-4/5">
        <img
          className="w-full h-auto rounded-lg shadow-lg"
          src={src}
          alt={alt}
        />
      </div>
    </div>
  );
};

export default Image;
