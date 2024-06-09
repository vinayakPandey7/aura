const ProgressBar = ({ value }: { value: any }) => {
  console.log("sdfmbsdfj", value);
  return (
    <div className="h-1.5 w-full bg-[#EAECEF]">
      <div
        style={{
          width: `${value}%`,
        }}
        className="h-1.5 duration-500 bg-[#388e3c] rounded-[4px]"
      ></div>
    </div>
  );
};

export default ProgressBar;
