import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import { ThreeDots } from "react-loader-spinner";
const LoaderIndex: React.FC<{ type?: string, skeleton?: string }> = ({ type, skeleton }) => {

  if (type === "small") {
    return (
      <div
        className="flex item-center justify-center"
      >
        <ThreeDots
          height="60"
          width="60"
          radius="10"
          color={"var(--dark-1)"}
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          visible={true}
        />
      </div>
    );
  }

  if (type === "skeleton") {
    return (
      <div className="w-100 px-2 py-2 flex column gap-1">
        <div className="flex w-100 gap-1">
          <Skeleton circle width={40} height={40} />
          <div className="w-100 flex column gap-1">
            <div className="flex items-center gap-1">
              <Skeleton circle width={30} height={30} />
              <div className="flex w-100 column">
                <Skeleton
                  width={"75%"}
                  height={7}
                />
                <Skeleton
                  width={"35%"}
                  height={5}
                />
              </div>
            </div>
            <div className="flex w-100 column gap-1">
              <Skeleton
                width={"100%"}
                height={200}
              />
              <div className="w-100 flex column">
                <Skeleton
                  width={"80%"}
                  height={7}
                />
                <Skeleton
                  width={"75%"}
                  height={7}
                />
                <Skeleton
                  width={"50%"}
                  height={7}
                />
                <Skeleton
                  width={"40%"}
                  height={7}
                />
                <Skeleton
                  width={"30%"}
                  height={7}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "rightBar") {
    return (
      <div className="w-100 px-2 flex column gap-1">
        <div className="flex w-100 gap-1">
          <div className="flex flex-1 item-center gap-1">
            <Skeleton circle width={40} height={40} />
            <div className="flex w-100 column">
              <Skeleton
                width={"75%"}
                height={10}
              />
              <Skeleton
                width={"35%"}
                height={5}
              />
            </div>
            <Skeleton circle width={30} height={20} />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div
      className="flex item-center justify-center column gap-1"
      style={{
        width: "100vw",
        zIndex: "200000",
        position: "fixed", height: "100vh", top: 0, left: 0,
        background: "rgba(255, 255, 255, 0.422)"
      }}
    >
      <ThreeDots
        height="60"
        width="60"
        radius="10"
        color={"var(--dark-1)"}
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        visible={true}
      />
    </div>
  );
}

export default LoaderIndex
