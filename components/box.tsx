import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type BoxType = {
  className?: string;
  trustworthy?: string;
  builtOnSecureBlockchainTechnolo?: string;

  /** Style props */
  boxPadding?: CSSProperties["padding"];
  trustworthyAlignSelf?: CSSProperties["alignSelf"];
};

const Box: NextPage<BoxType> = ({
  className = "",
  boxPadding,
  trustworthy,
  trustworthyAlignSelf,
  builtOnSecureBlockchainTechnolo,
}) => {
  const boxStyle: CSSProperties = useMemo(() => {
    return {
      padding: boxPadding,
    };
  }, [boxPadding]);

  const trustworthyStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: trustworthyAlignSelf,
    };
  }, [trustworthyAlignSelf]);

  return (
    <div
      className={`flex-1 rounded-21xl bg-gray-100 border-gray-300 border-solid border-[1px] overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[38px] px-[39px] pb-[70px] gap-5 text-left text-13xl text-red font-space-grotesk ${className}`}
      style={boxStyle}
    >
      <div className="self-stretch flex flex-col items-start justify-center">
        <h1
          className="m-0 self-stretch relative text-inherit leading-[32px] font-normal font-[inherit] mq450:text-lgi mq450:leading-[19px] mq1050:text-7xl mq1050:leading-[26px]"
          style={trustworthyStyle}
        >
          {trustworthy}
        </h1>
      </div>
      <div className="self-stretch flex flex-row items-center justify-start text-base text-white font-archivo">
        <div className="flex-1 relative tracking-[0.02em] leading-[25.6px] font-light">
          {builtOnSecureBlockchainTechnolo}
        </div>
      </div>
    </div>
  );
};

export default Box;
