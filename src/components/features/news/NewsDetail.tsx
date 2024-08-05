"use client";
import { newsDetailOptions } from "@/services/api/news/query";
import { useSuspenseQuery } from "@tanstack/react-query";
import OtherNewsServer from "./detail/OtherNewsServer";

type Props = {
  id: string;
};

const NewsDetail = ({ id }: Props) => {
  const { data } = useSuspenseQuery(newsDetailOptions(id));

  const tags = data.data.tags.split(",");
  return (
    <>
      <section className="relative pt-20 pb-24 bg-indigo-600">
        <div className="w-full max-w-lg md:max-w-2xl lg:max-w-4xl px-5 lg:px-11 mx-auto max-md:px-4">
          <h1 className="text-white font-manrope font-semibold text-4xl min-[500px]:text-5xl leading-tight mb-8">
            {data.data.title}
          </h1>
          <div className="flex items-center justify-between">
            <div className="data">
              <p className="font-medium text-xl leading-8 text-white mb-1">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-white bg-indigo-800 px-2 py-1 rounded-md mr-2"
                  >
                    {tag}
                  </span>
                ))}
              </p>
              <p className="font-normal text-lg leading-7 text-white">
                Author: {data.data.author}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-10 lg:py-16 ">
        <div className="w-full max-w-lg md:max-w-2xl lg:max-w-4xl px-5 lg:px-11 mx-auto max-md:px-3">
          <p className="font-normal text-lg leading-8 text-gray-500 mb-12">
            {data.data.content}
          </p>

          <h4 className="font-manrope font-semibold text-2xl leading-9 text-black mb-12">
            Save up to 40% compared to a merchant cash advance and other online
            lenders.
          </h4>

          <p className="font-normal text-lg leading-8 text-gray-600 mb-8">
            "The 'Fast Services Business Loans' component in our UI design
            system embodies swift and efficient access to financial solutions
            tailored for businesses. This module integrates visually engaging
            elements and intuitive functionalities to streamline the process of
            acquiring loans with unparalleled speed. Offering a user-centric
            interface, it presents a seamless journey for businesses seeking
            rapid financial support. Through clear and concise layouts,
            optimized forms, and interactive tools, this component expedites the
            application and approval process, emphasizing agility without
            compromising on reliability or thoroughness. Designed to align with
            our brand's commitment to responsive services, this UI module serves
            as a catalyst for businesses in need, providing a quick and
            hassle-free avenue to secure vital financial assistance."
          </p>

          <p className="font-normal text-lg leading-8 text-gray-600 mb-16">
            This description aims to highlight the UI component's emphasis on
            speed, user-friendliness, and alignment with the brand's commitment
            to responsive services in facilitating business loans.
          </p>

          <div className="flex justify-between relative mb-16">
            <svg
              className="absolute top-0 left-0 w-8"
              width="32"
              height="30"
              viewBox="0 0 32 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.1556 29.4389L15.1556 15.7709L9.96491 15.7709C7.47307 10.3036 11.6949 6.83404 14.1173 5.78265L14.1173 1.23418e-06C-3.74082 1.26167 -0.937509 20.1517 2.69642 29.4389L15.1556 29.4389Z"
                fill="url(#paint0_linear_9284_62585)"
              />
              <path
                d="M31.9993 29.4389L31.9994 15.7709L26.8087 15.7709C24.3168 10.3036 28.5387 6.83404 30.9611 5.78265L30.9611 1.23418e-06C13.1029 1.26167 15.9062 20.1517 19.5402 29.4389L31.9993 29.4389Z"
                fill="url(#paint1_linear_9284_62585)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_9284_62585"
                  x1="15.1556"
                  y1="1.68661"
                  x2="-7.59931"
                  y2="11.975"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#7C3AED" />
                  <stop offset="0.993738" stopColor="#4F46E5" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_9284_62585"
                  x1="31.9994"
                  y1="1.68661"
                  x2="9.24444"
                  y2="11.975"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#7C3AED" />
                  <stop offset="0.993738" stopColor="#4F46E5" />
                </linearGradient>
              </defs>
            </svg>
            <h4 className="font-manrope font-semibold text-2xl leading-9 text-black max-w-[609px] mx-auto max-lg:px-8">
              It’s easy to get a loan unless you need it.
            </h4>
            <svg
              className="absolute right-0 bottom-0 w-8"
              width="32"
              height="30"
              viewBox="0 0 32 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.8444 0.00050603L16.8444 13.6686L22.0351 13.6686C24.5269 19.1358 20.3051 22.6054 17.8827 23.6568L17.8827 29.4395C35.7408 28.1778 32.9375 9.28779 29.3036 0.000507119L16.8444 0.00050603Z"
                fill="url(#paint0_linear_9553_63113)"
              />
              <path
                d="M0.000651072 0.00050603L0.000649877 13.6686L5.19134 13.6686C7.68318 19.1358 3.46132 22.6054 1.03891 23.6568L1.03891 29.4395C18.8971 28.1778 16.0938 9.28779 12.4598 0.000507119L0.000651072 0.00050603Z"
                fill="url(#paint1_linear_9553_63113)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_9553_63113"
                  x1="16.8444"
                  y1="27.7528"
                  x2="39.5993"
                  y2="17.4644"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#7C3AED" />
                  <stop offset="0.993738" stopColor="#4F46E5" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_9553_63113"
                  x1="0.000648535"
                  y1="27.7528"
                  x2="22.7556"
                  y2="17.4644"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#7C3AED" />
                  <stop offset="0.993738" stopColor="#4F46E5" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <h4 className="font-manrope font-semibold text-2xl leading-9 text-black mb-12">
            Digital financial planner and management
          </h4>

          <p className="font-normal text-lg leading-8 text-gray-600 mb-12">
            This content aims to provide valuable information to users visiting
            the blog detail page within the UI design system, guiding them
            through various aspects of business loans in a clear and informative
            manner.
          </p>

          <ul className="list-disc list-outside flex flex-col gap-8 ml-5 mb-8">
            <li className="list-disc">
              <p className="font-medium text-xl leading-8 text-black">
                Types of Business Loans:{" "}
                <span className="font-normal text-base leading-7 text-black">
                  Small Business Administration (SBA) Loans: Exploring
                  government-backed options for small businesses. Term Loans vs.
                  Lines of Credit: Understanding the differences and choosing
                  the right fit for your business needs.
                </span>
              </p>
            </li>

            <li className="list-disc">
              <p className="font-medium text-xl leading-8 text-black">
                The Application Process:{" "}
                <span className="font-normal text-base leading-7 text-black">
                  {" "}
                  Preparation: Steps to prepare your business and documents
                  before applying. Application Walkthrough: A step-by-step guide
                  through the loan application process. Tips for Approval:
                  Insider tips to increase your chances of loan approval.
                </span>
              </p>
            </li>

            <li className="list-disc">
              <p className="font-medium text-xl leading-8 text-black">
                Business Loan Management :{" "}
                <span className="font-normal text-base leading-7 text-black">
                  {" "}
                  Responsibly Managing Funds: Best practices for utilizing loan
                  funds efficiently. Repayment Strategies: Formulating a
                  repayment plan that suits your business.
                </span>
              </p>
            </li>

            <li className="list-disc">
              <p className="font-medium text-xl leading-8 text-black">
                Conclusion:{" "}
                <span className="font-normal text-base leading-7 text-black">
                  Securing a business loan can be a pivotal moment for your
                  company's growth. Armed with this guide, you're better
                  equipped to navigate the complexities of the loan process.
                  Remember, choosing the right loan and managing it wisely can
                  set your business on a path to success.
                </span>
              </p>
            </li>
          </ul>
        </div>
      </section>
      <OtherNewsServer />
    </>
  );
};

export default NewsDetail;
