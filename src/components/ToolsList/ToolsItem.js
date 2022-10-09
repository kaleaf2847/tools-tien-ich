import Image from 'next/image';

function ToolsItem() {
  return (
    <div className="border-gray-300 border-[1px] shadow-lg rounded-lg overflow-hidden">
      <Image layout="responsive" width={200} height={300} src="/image/an1.jpg" />
      <p className="text-xl line-clamp-2 m-3">Giới thiệu tên công cụ</p>
    </div>
  );
}

export default ToolsItem;
