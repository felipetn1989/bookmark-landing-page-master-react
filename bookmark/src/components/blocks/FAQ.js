import { useState } from "react";
import Button from "../buttons/Button";
import arrow from "../images/icon-arrow.svg";

export default function FAQ() {
  const [expandedItemId, setExpandedItemId] = useState(null);

  function handleOnClick(itemId) {
    expandedItemId === itemId
      ? setExpandedItemId(null)
      : setExpandedItemId(itemId);
  }

  return (
    <div className="grid gap-4 px-8 mt-[8.6875rem] max-w-5xl m-auto">
      <h2 className="text-2xl font-medium px-2 tracking-wide">
        Frequently Asked Questions
      </h2>
      <p className="text-[#9194a1]">
        Here are some of our FAQs. If you have any other questions you’d like
        answered please feel free to email us.
      </p>
      <div className="mt-[1.9375rem] mb-7">
        <div className="border-b py-[1.375rem] hover:cursor-pointer ">
          <div
            className="flex items-center justify-between"
            onClick={() => handleOnClick(1)}
          >
            <h3 className="text-sm tracking-wider hover:text-[#fa5757]">
              What is Bookmark?
            </h3>
            <img
              src={arrow}
              alt="Arrow icon"
              className={expandedItemId === 1 ? "rotate-180" : ""}
            />
          </div>

          {expandedItemId === 1 && (
            <p className="text-left text-[#9194a1] pt-1 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum
              quis quam ornare mattis.
            </p>
          )}
        </div>
        <div className="border-b py-[1.375rem] hover:cursor-pointer hover:text-[#fa5757]">
          <div
            className="flex items-center justify-between"
            onClick={() => handleOnClick(2)}
          >
            <h3 className="text-sm tracking-wider">
              How can I request a new browser?
            </h3>
            <img
              src={arrow}
              alt="Arrow icon"
              className={expandedItemId === 2 ? "rotate-180" : ""}
            />
          </div>

          {expandedItemId === 2 && (
            <p className="text-left text-[#9194a1] pt-1 text-sm">
              Vivamus luctus eros aliquet convallis ultricies. Mauris augue
              massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus
              eros aliquet convallis ultricies. Mauris augue massa, ultricies
              non ligula. Suspendisse imperdie tVivamus luctus eros aliquet
              convallis ultricies. Mauris augue massa, ultricies non ligula.
              Suspendisse imperdiet.
            </p>
          )}
        </div>
        <div className="border-b py-[1.375rem] hover:cursor-pointer hover:text-[#fa5757]">
          <div
            className="flex items-center justify-between"
            onClick={() => handleOnClick(3)}
          >
            <h3 className="text-sm tracking-wider">Is there a mobile app?</h3>
            <img
              src={arrow}
              alt="Arrow icon"
              className={expandedItemId === 3 ? "rotate-180" : ""}
            />
          </div>

          {expandedItemId === 3 && (
            <p className="text-left text-[#9194a1] pt-1 text-sm">
              Sed consectetur quam id neque fermentum accumsan. Praesent luctus
              vestibulum dolor, ut condimentum urna vulputate eget. Cras in
              ligula quis est pharetra mattis sit amet pharetra purus. Sed
              sollicitudin ex et ultricies bibendum.
            </p>
          )}
        </div>
        <div className="border-b py-[1.375rem] hover:cursor-pointer hover:text-[#fa5757]">
          <div
            className="flex items-center justify-between"
            onClick={() => handleOnClick(4)}
          >
            <h3 className="text-sm tracking-wider">
              What about other Chromium browsers?
            </h3>
            <img
              src={arrow}
              alt="Arrow icon"
              className={expandedItemId === 4 ? "rotate-180" : ""}
            />
          </div>

          {expandedItemId === 4 && (
            <p className="text-left text-[#9194a1] pt-1 text-sm">
              Integer condimentum ipsum id imperdiet finibus. Vivamus in
              placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida
              pellentesque non ut velit.
            </p>
          )}
        </div>
      </div>
      <Button
        bg="bg-[#5368df]"
        textColor="text-white"
        text="More Info"
        width="w-28"
      />
    </div>
  );
}
