const List = ({
  list,
  introduction,
}: {
  list: { key: string; content: string }[];
  introduction: string;
}) => {
  return (
    <>
      <p className="pb-2">{introduction}</p>
      <ul className="pl-8 flex flex-col gap-2">
        {list.map((item) => (
          <li key={item.key} className="list-disc text-blue-700">
            <span className="font-bold pr-2 text-blue-700">{item.key}: </span>
            <span className="text-black">{item.content}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default List;
