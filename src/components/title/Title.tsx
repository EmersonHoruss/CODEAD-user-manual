import { titleHeight } from "./constants";

const Title = ({ title }: { title: string }) => {
  return (
    <div
      className="w-full shadow-sm flex items-center"
      style={{ height: titleHeight }}
    >
      <h2 className="text-lg font-semibold pl-4">{title}</h2>
    </div>
  );
};

export default Title;
