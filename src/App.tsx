"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const phrases = [
    "Hong",
    "Chắc chưaaaa?",
    "Đi màaa?",
    "Điiii",
    "Đồng ý đi cho ăn donutt",
    "Dị trà sữaaaa",
    "Điiii",
    "Người ta bùnnn :((((",
    "Anh chết á",
    "*chết*",
    "Đang nch dới ma nèe",
    "please babe",
    ":((((",
    "Điiiii",
    "sdadsadfds",
    "Hong hả :(",
  ];

  const yesButton = 
  <button
    className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
    style={{ fontSize: yesButtonSize }}
    onClick={() => setYesPressed(true)}
  >
    Yes
  </button>

  const getNoButtonText = () => {
    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="my-4 text-4xl font-bold">Hehe, I love youuuu :*</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="my-4 text-4xl">Will you be my Valentine?</h1>
          <div className="flex items-center">
            {yesButton}
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {(() => {
                if (noCount === 0) {
                  return "No"
                }
                if (noCount < phrases.length) {
                  return getNoButtonText()
                }
                return yesButton
              })()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
