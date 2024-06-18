const Title3 = ({ title, newZone }: { title: string; newZone?: boolean }) => {
  return (
    <span
      className={`text-3xl font-semibold text-blue-500 pb-5 ${
        newZone && "pt-10"
      }`}
    >
      {title}
    </span>
  );
};

export default Title3;
