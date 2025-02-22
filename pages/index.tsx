import type { NextPage } from "next";
import Header from "../components/header";
import FrameComponent from "../components/frame-component";
import FrameComponent2 from "../components/frame-component2";
import Content from "../components/content";
import FrameComponent1 from "../components/frame-component1";
import SwapSection from "../components/swap-section";
import FrameComponent3 from "../components/frame-component3";
import Footer from "../components/footer";

const Desktop: NextPage = () => {
  return (
    <div className="w-full relative bg-grays-black overflow-hidden flex flex-col items-end justify-start pt-5 px-0 pb-0 box-border opacity-[0.99] leading-[normal] tracking-[normal]">
      <section className="self-stretch flex flex-row items-start justify-end pt-0 px-10 pb-[107px] box-border max-w-full mq750:pb-[45px] mq750:box-border mq1050:pb-[70px] mq1050:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-5 max-w-full">
          <Header />
          <FrameComponent />
        </div>
      </section>
      <FrameComponent2 />
      <section className="self-stretch flex flex-row items-start justify-end pt-0 px-10 pb-[236px] box-border max-w-full mq750:pb-[153px] mq750:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[50px] max-w-full mq750:gap-[25px]">
          <Content />
          <FrameComponent1 />
        </div>
      </section>
      <SwapSection />
      <Footer />
    </div>
  );
};

export default Desktop;
