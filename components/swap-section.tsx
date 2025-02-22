import type { NextPage } from "next";
import Image from "next/image";

export type SwapSectionType = {
  className?: string;
};

const SwapSection: NextPage<SwapSectionType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch h-[1012px] relative bg-grays-black overflow-hidden shrink-0 max-w-full text-left text-221xl text-[transparent] font-space-grotesk mq1050:h-auto mq1050:min-h-[1012] ${className}`}
    >
      <div className="absolute top-[-396px] left-[-360px] [background:linear-gradient(179.23deg,_rgba(3,_194,_249,_0.8),_rgba(0,_0,_0,_0.8)_58.19%)] w-[1800px] h-[1289.1px]" />
      <div className="absolute top-[12px] left-[0px] [background:linear-gradient(179.23deg,_#03c2f9,_#000_58.19%)] w-full overflow-hidden flex flex-row items-start justify-start py-0 pl-[364px] pr-0 box-border gap-[3.5px] opacity-[0.2] max-w-full z-[1] mq1050:flex-wrap mq1050:pl-5 mq1050:pr-5 mq1050:pb-5 mq1050:box-border">
        <div className="w-[666px] flex flex-col items-start justify-start pt-[79px] px-0 pb-0 box-border max-w-full shrink-0">
          <div className="w-[555px] flex flex-row items-start justify-start relative max-w-full">
            <h1 className="!m-[0] w-[281px] absolute top-[-79px] left-[69.5px] text-inherit tracking-[-0.12em] leading-[168px] font-bold font-[inherit] inline-block [-webkit-text-stroke:1px_#9945ff] mq450:text-41xl mq450:leading-[67px] mq1050:text-77xl mq1050:leading-[101px]">
              P.P
            </h1>
            <h1 className="!m-[0] w-[281px] absolute top-[-79px] right-[-95.5px] text-inherit tracking-[-0.12em] leading-[168px] font-bold font-[inherit] inline-block [-webkit-text-stroke:1px_#9945ff] mq450:text-41xl mq450:leading-[67px] mq1050:text-77xl mq1050:leading-[101px]">
              P.P
            </h1>
            <h1 className="!m-[0] w-[848px] absolute top-[129px] left-[-364px] text-inherit tracking-[-0.12em] leading-[168px] font-bold font-[inherit] inline-block [-webkit-text-stroke:1px_#9945ff] mq450:text-41xl mq450:leading-[67px] mq1050:text-77xl mq1050:leading-[101px]">
              P.P P.P P.P
            </h1>
            <h1 className="!m-[0] w-[281px] absolute top-[337px] right-[-143px] text-inherit tracking-[-0.12em] leading-[168px] font-bold font-[inherit] inline-block [-webkit-text-stroke:1px_#9945ff] mq450:text-41xl mq450:leading-[67px] mq1050:text-77xl mq1050:leading-[101px]">
              P.P
            </h1>
            <h1 className="!m-[0] w-[281px] absolute bottom-[133px] left-[-80.5px] text-inherit tracking-[-0.12em] leading-[168px] font-bold font-[inherit] inline-block [-webkit-text-stroke:1px_#9945ff] mq450:text-41xl mq450:leading-[67px] mq1050:text-77xl mq1050:leading-[101px]">
              P.P
            </h1>
            <h1 className="!m-[0] w-[281px] absolute bottom-[-75px] left-[69.5px] text-inherit tracking-[-0.12em] leading-[168px] font-bold font-[inherit] inline-block [-webkit-text-stroke:1px_#9945ff] mq450:text-41xl mq450:leading-[67px] mq1050:text-77xl mq1050:leading-[101px]">
              P.P
            </h1>
            <h1 className="!m-[0] w-[281px] absolute right-[-95.5px] bottom-[-75px] text-inherit tracking-[-0.12em] leading-[168px] font-bold font-[inherit] inline-block [-webkit-text-stroke:1px_#9945ff] mq450:text-41xl mq450:leading-[67px] mq1050:text-77xl mq1050:leading-[101px]">
              P.P
            </h1>
            <div className="h-[846px] flex-1 rounded-21xl flex flex-col items-start justify-start pt-[38px] px-[39px] pb-2 box-border gap-10 bg-[url('/swap-module@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full z-[2] mq450:h-auto mq750:gap-5">
              <div className="self-stretch h-[122px] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border text-base text-white">
                <div className="self-stretch h-36 rounded-xl bg-black flex flex-col items-start justify-start pt-5 px-1 pb-1 box-border gap-5">
                  <div className="self-stretch flex flex-row items-start justify-start py-0 px-5">
                    <div className="relative leading-[16px] font-medium">
                      Blockchain
                    </div>
                  </div>
                  <div className="self-stretch flex-1 rounded-xl bg-dark-grey flex flex-row items-center justify-between py-5 pl-[149px] pr-5 gap-5 text-deepskyblue mq450:pl-5 mq450:box-border">
                    <div className="self-stretch rounded-25xl bg-dark-grey border-deepskyblue border-solid border-[1px] flex flex-row items-center justify-end py-0.5 pl-1.5 pr-[3px] gap-[11px]">
                      <Image
                        className="h-7 w-[30px] relative object-cover"
                        loading="lazy"
                        width={30}
                        height={28}
                        alt=""
                        src="/trone-1@2x.png"
                      />
                      <div className="flex flex-row items-center justify-center py-2.5 px-[15px]">
                        <div className="relative leading-[16px]">TRON</div>
                      </div>
                      <div className="rounded-17xl bg-dark-grey flex flex-row items-start justify-start p-1.5">
                        <Image
                          className="h-6 w-6 relative overflow-hidden shrink-0"
                          loading="lazy"
                          width={24}
                          height={24}
                          alt=""
                          src="/keyboard-arrow-down.svg"
                        />
                      </div>
                    </div>
                    <div className="h-11 w-0" />
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
                <b className="w-[376px] absolute !m-[0] bottom-[7px] left-[-18px] tracking-[-0.12em] leading-[168px] inline-block [-webkit-text-stroke:1px_#9945ff] mq450:text-41xl mq450:leading-[67px] mq1050:text-77xl mq1050:leading-[101px]">
                  888
                </b>
                <div className="flex-1 flex flex-col items-start justify-start relative gap-5 max-w-full text-base text-white">
                  <div className="self-stretch rounded-xl bg-black flex flex-col items-start justify-start pt-5 px-1 pb-1 gap-5">
                    <div className="self-stretch flex flex-row items-start justify-start py-0 px-5">
                      <div className="relative leading-[16px] font-medium inline-block min-w-[38px]">
                        from
                      </div>
                    </div>
                    <div className="self-stretch rounded-xl bg-dark-grey flex flex-row items-center justify-between p-xl gap-5 text-21xl text-[transparent] mq450:flex-wrap">
                      <div className="flex flex-row items-center justify-start">
                        <b className="relative leading-[44px] [-webkit-text-stroke:1px_#fff] mq450:text-5xl mq450:leading-[26px] mq1050:text-13xl mq1050:leading-[35px]">
                          2,194
                        </b>
                      </div>
                      <button className="cursor-pointer border-deepskyblue border-solid border-[1px] py-0.5 px-[3px] bg-dark-grey rounded-25xl overflow-x-auto flex flex-row items-center justify-end">
                        <div className="flex flex-row items-center justify-end">
                          <Image
                            className="h-9 w-9 relative"
                            width={36}
                            height={36}
                            alt=""
                            src="/protocol-icon.svg"
                          />
                        </div>
                        <div className="flex flex-row items-center justify-center py-2.5 px-[15px]">
                          <div className="relative text-base leading-[16px] font-space-grotesk text-deepskyblue text-left inline-block min-w-[31px]">
                            SOL
                          </div>
                        </div>
                        <div className="rounded-17xl bg-dark-grey flex flex-row items-start justify-start p-1.5">
                          <Image
                            className="h-6 w-6 relative overflow-hidden shrink-0"
                            width={24}
                            height={24}
                            alt=""
                            src="/keyboard-arrow-down-1.svg"
                          />
                        </div>
                      </button>
                    </div>
                  </div>
                  <div className="self-stretch rounded-xl bg-black flex flex-col items-start justify-start pt-5 px-1 pb-1 gap-5">
                    <div className="self-stretch flex flex-row items-start justify-start py-0 px-5">
                      <div className="relative leading-[16px] font-medium">
                        to
                      </div>
                    </div>
                    <div className="self-stretch rounded-xl bg-dark-grey flex flex-row items-center justify-between p-xl gap-5 text-21xl text-[transparent] mq750:flex-wrap">
                      <div className="flex flex-row items-center justify-start">
                        <b className="relative leading-[44px] [-webkit-text-stroke:1px_#fff] mq450:text-5xl mq450:leading-[26px] mq1050:text-13xl mq1050:leading-[35px]">
                          12,466
                        </b>
                      </div>
                      <button className="cursor-pointer border-deepskyblue border-solid border-[1px] py-0.5 px-[3px] bg-dark-grey h-[46px] rounded-25xl box-border flex flex-row items-center justify-end">
                        <div className="h-[38px] w-9 relative">
                          <div className="absolute top-[2px] left-[0px] w-9 h-9">
                            <div className="absolute top-[0px] left-[0px] flex flex-row items-center justify-end w-full h-full">
                              <div className="h-9 w-9 relative rounded-[50%] bg-grays-black" />
                            </div>
                          </div>
                          <Image
                            className="absolute top-[0px] left-[1px] rounded-2xl w-[35px] h-[37px] object-cover z-[1]"
                            width={35}
                            height={37}
                            alt=""
                            src="/chihuahua-1@2x.png"
                          />
                        </div>
                        <div className="flex flex-row items-center justify-center py-2.5 px-[15px]">
                          <div className="relative text-base leading-[16px] font-space-grotesk text-deepskyblue text-left">
                            Pinky Promise
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                  <div className="w-9 h-9 !m-[0] absolute top-[calc(50%_-_22px)] left-[calc(50%_-_21.5px)] rounded-17xl bg-deepskyblue border-black border-solid border-[4px] box-border flex flex-row items-start justify-start py-px px-0.5 z-[1]">
                    <Image
                      className="h-6 w-6 relative overflow-hidden shrink-0"
                      loading="lazy"
                      width={24}
                      height={24}
                      alt=""
                      src="/autorenew.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="w-[100px] h-[100px] relative rounded-[50%] bg-gainsboro" />
              <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
                <h1 className="!m-[0] w-[281px] absolute top-[-147px] right-[14.5px] text-inherit tracking-[-0.12em] leading-[168px] font-bold font-[inherit] inline-block [-webkit-text-stroke:1px_#9945ff] mq450:text-41xl mq450:leading-[67px] mq1050:text-77xl mq1050:leading-[101px]">
                  P.P
                </h1>
                <div className="flex-1 rounded-xl bg-black flex flex-col items-start justify-start p-xl box-border gap-5 max-w-full text-base text-white">
                  <div className="flex flex-row items-center justify-start gap-2.5 max-w-full text-xl mq750:flex-wrap">
                    <div className="flex flex-row items-end justify-start gap-1">
                      <b className="relative leading-[20px] mq450:text-base mq450:leading-[16px]">
                        2,194
                      </b>
                      <div className="relative leading-[20px] font-light mq450:text-base mq450:leading-[16px]">
                        SOL
                      </div>
                    </div>
                    <Image
                      className="h-6 w-6 relative overflow-hidden shrink-0"
                      loading="lazy"
                      width={24}
                      height={24}
                      alt=""
                      src="/drag-handle.svg"
                    />
                    <div className="flex flex-row items-end justify-start gap-1">
                      <b className="relative leading-[20px] inline-block min-w-[66px] mq450:text-base mq450:leading-[16px]">
                        12,466
                      </b>
                      <div className="relative leading-[20px] font-light mq450:text-base mq450:leading-[16px]">
                        PINKY PROMISE
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-between gap-5 mq450:flex-wrap">
                    <div className="flex flex-row items-center justify-start">
                      <div className="relative leading-[20px]">
                        Minimun Received
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-end gap-2">
                      <b className="relative leading-[16px]">10</b>
                      <div className="relative leading-[16px]">
                        PINKY PROMISE
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-between gap-5">
                    <div className="flex flex-row items-center justify-start">
                      <div className="relative leading-[20px] inline-block min-w-[98px]">
                        Price Impact
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-end gap-2">
                      <b className="relative leading-[16px]">-</b>
                      <div className="relative leading-[16px] hidden min-w-[8px]">
                        -
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="cursor-pointer [border:none] py-3.5 px-[216px] bg-colors-cyan rounded-25xl flex flex-row items-start justify-center relative mq450:pl-5 mq450:pr-5 mq450:box-border">
                <div className="relative text-base leading-[16px] font-space-grotesk text-dark-grey text-left">
                  Swap
                </div>
                <div className="!m-[0] absolute top-[calc(50%_-_18px)] right-[4px] rounded-17xl bg-dark-grey flex flex-row items-start justify-start p-1.5">
                  <Image
                    className="h-6 w-6 relative"
                    width={24}
                    height={24}
                    alt=""
                    src="/autorenew-1.svg"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="w-[730px] flex flex-col items-start justify-start gap-10 max-w-full shrink-0 mq750:gap-5">
          <div className="w-[600px] flex flex-row items-start justify-start py-0 pl-0 pr-5 box-border gap-5 max-w-full mq750:flex-wrap">
            <h1 className="m-0 flex-1 relative text-inherit tracking-[-0.12em] leading-[168px] font-bold font-[inherit] inline-block [-webkit-text-stroke:1px_#9945ff] min-w-[183px] mq450:text-41xl mq450:leading-[67px] mq1050:text-77xl mq1050:leading-[101px]">
              P.P
            </h1>
            <h1 className="m-0 flex-1 relative text-inherit tracking-[-0.12em] leading-[168px] font-bold font-[inherit] inline-block [-webkit-text-stroke:1px_#9945ff] min-w-[183px] mq450:text-41xl mq450:leading-[67px] mq1050:text-77xl mq1050:leading-[101px]">
              P.P
            </h1>
          </div>
          <div className="self-stretch flex flex-row items-start justify-end py-0 px-4 box-border max-w-full">
            <div className="w-[580px] flex flex-row items-start justify-start gap-5 max-w-full mq750:flex-wrap">
              <h1 className="m-0 flex-1 relative text-inherit tracking-[-0.12em] leading-[168px] font-bold font-[inherit] inline-block [-webkit-text-stroke:1px_#9945ff] min-w-[183px] mq450:text-41xl mq450:leading-[67px] mq1050:text-77xl mq1050:leading-[101px]">
                P.P
              </h1>
              <h1 className="m-0 flex-1 relative text-inherit tracking-[-0.12em] leading-[168px] font-bold font-[inherit] inline-block [-webkit-text-stroke:1px_#9945ff] min-w-[183px] mq450:text-41xl mq450:leading-[67px] mq1050:text-77xl mq1050:leading-[101px]">
                P.P
              </h1>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start py-0 px-[47px] box-border max-w-full mq750:pl-[23px] mq750:pr-[23px] mq750:box-border">
            <div className="w-[580px] flex flex-row items-start justify-start gap-5 max-w-full mq750:flex-wrap">
              <h1 className="m-0 flex-1 relative text-inherit tracking-[-0.12em] leading-[168px] font-bold font-[inherit] inline-block [-webkit-text-stroke:1px_#9945ff] min-w-[183px] mq450:text-41xl mq450:leading-[67px] mq1050:text-77xl mq1050:leading-[101px]">
                P.P
              </h1>
              <h1 className="m-0 flex-1 relative text-inherit tracking-[-0.12em] leading-[168px] font-bold font-[inherit] inline-block [-webkit-text-stroke:1px_#9945ff] min-w-[183px] mq450:text-41xl mq450:leading-[67px] mq1050:text-77xl mq1050:leading-[101px]">
                P.P
              </h1>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
            <h1 className="!m-[0] w-[281px] absolute top-[0px] left-[-150px] text-inherit tracking-[-0.12em] leading-[168px] font-bold font-[inherit] inline-block [-webkit-text-stroke:1px_#9945ff] mq450:text-41xl mq450:leading-[67px] mq1050:text-77xl mq1050:leading-[101px]">
              P.P
            </h1>
            <div className="flex-1 flex flex-row items-start justify-end max-w-full">
              <div className="w-[580px] flex flex-row items-start justify-start gap-5 max-w-full mq750:flex-wrap">
                <h1 className="m-0 flex-1 relative text-inherit tracking-[-0.12em] leading-[168px] font-bold font-[inherit] inline-block [-webkit-text-stroke:1px_#9945ff] min-w-[183px] mq450:text-41xl mq450:leading-[67px] mq1050:text-77xl mq1050:leading-[101px]">
                  P.P
                </h1>
                <h1 className="m-0 flex-1 relative text-inherit tracking-[-0.12em] leading-[168px] font-bold font-[inherit] inline-block [-webkit-text-stroke:1px_#9945ff] min-w-[183px] mq450:text-41xl mq450:leading-[67px] mq1050:text-77xl mq1050:leading-[101px]">
                  P.P
                </h1>
              </div>
            </div>
            <div className="w-[576px] absolute !m-[0] top-[-162px] left-[0.5px] text-xl tracking-[0.02em] leading-[32px] font-light font-archivo text-white inline-block z-[2] mq450:text-base mq450:leading-[26px]">
              The PINKYPROMISE token is the native asset of a DeFi platform on
              Solana that combines digital lotteries and global gaming. With a
              supply of 18.4 billion, it is used for ticket purchases, staking
              with rewards, and features a deflationary model that burns tokens
              on early withdrawals. Additionally, 10% of each prize is
              reinvested in liquidity, staking, and development. Its integration
              with lotteries like The Lotter makes it a pioneer in decentralized
              gambling, offering efficiency and eliminating intermediaries.
            </div>
          </div>
          <div className="w-[600px] flex flex-row items-start justify-start py-0 pl-0 pr-5 box-border gap-5 max-w-full mq750:flex-wrap">
            <h1 className="m-0 flex-1 relative text-inherit tracking-[-0.12em] leading-[168px] font-bold font-[inherit] inline-block [-webkit-text-stroke:1px_#9945ff] min-w-[183px] mq450:text-41xl mq450:leading-[67px] mq1050:text-77xl mq1050:leading-[101px]">
              P.P
            </h1>
            <h1 className="m-0 flex-1 relative text-inherit tracking-[-0.12em] leading-[168px] font-bold font-[inherit] inline-block [-webkit-text-stroke:1px_#9945ff] min-w-[183px] mq450:text-41xl mq450:leading-[67px] mq1050:text-77xl mq1050:leading-[101px]">
              P.P
            </h1>
          </div>
        </div>
        <div className="w-[576px] !m-[0] absolute top-[262px] left-[710px] flex flex-row items-start justify-start max-w-full">
          <div className="w-[743px] !m-[0] absolute top-[-54px] left-[-167px] flex flex-col items-start justify-start min-h-[168px]">
            <h1 className="m-0 w-[281px] relative text-inherit tracking-[-0.12em] leading-[168px] font-bold font-[inherit] inline-block [-webkit-text-stroke:1px_#9945ff] mq450:text-41xl mq450:leading-[67px] mq1050:text-77xl mq1050:leading-[101px]">
              P.P
            </h1>
            <div className="self-stretch flex flex-row items-start justify-end max-w-full mt-[-138px] text-xl text-gray-200">
              <b className="w-[577px] relative leading-[24px] inline-block shrink-0 max-w-full z-[2] mq450:text-base mq450:leading-[19px]">
                swap
              </b>
            </div>
          </div>
          <h1 className="m-0 flex-1 relative text-61xl leading-[80px] text-deepskyblue inline-block max-w-full z-[2] font-[inherit] mq450:text-5xl mq450:leading-[32px] mq1050:text-21xl mq1050:leading-[48px]">
            <p className="m-0 font-light">buy</p>
            <p className="m-0 font-medium">Pinky Promise</p>
          </h1>
        </div>
        <div className="flex flex-col items-start justify-start pt-52 px-0 pb-0">
          <h1 className="m-0 w-[281px] relative text-inherit tracking-[-0.12em] leading-[168px] font-bold font-[inherit] inline-block [-webkit-text-stroke:1px_#9945ff] mq450:text-41xl mq450:leading-[67px] mq1050:text-77xl mq1050:leading-[101px]">
            P.P
          </h1>
        </div>
      </div>
    </section>
  );
};

export default SwapSection;
