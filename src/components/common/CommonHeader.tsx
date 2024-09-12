interface HeaderProps {
  title: string;
}

const CommonHeader = ({ title }: HeaderProps) => {
  return (
    <header className="h-10 flex items-center pb-[1.25rem] text-[#060606] text-[1.25rem] font-normal">
      {title}
    </header>
  );
};
export default CommonHeader;
