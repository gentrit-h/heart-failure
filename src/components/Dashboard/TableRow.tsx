/**
 * This code was generated by Builder.io
 */
import React from "react";

interface Patient {
  name: string;
  website: string;
  status: string;
  symptoms: number;
  about: string;
  description: string;
}

interface TableRowProps {
  patient: Patient;
}

const TableRow: React.FC<TableRowProps> = ({ patient }) => {
  return (
    <>
      <div
        data-layername="column"
        className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full"
      >
        <div
          data-layername="tableCell"
          className="flex gap-3 items-center px-6 py-4 w-full border-b border-solid border-b-gray-200 min-h-[72px] max-md:px-5 max-md:max-w-full"
        >
          <div
            data-layername="checkbox"
            className="flex justify-center items-center self-stretch my-auto w-5"
          >
            <input type="checkbox" className="w-5 h-5 rounded-md" />
          </div>
          <div className="flex flex-col self-stretch my-auto text-sm leading-none whitespace-nowrap">
            <div data-layername="text" className="font-medium text-gray-900">
              {patient.name}
            </div>
            <div data-layername="supportingText" className="text-gray-500">
              {patient.website}
            </div>
          </div>
        </div>
      </div>
      <div
        data-layername="column"
        className="flex flex-col text-xs font-medium text-emerald-700 whitespace-nowrap w-[121px]"
      >
        <div
          data-layername="tableCell"
          className="flex items-center px-6 py-4 py-6 w-full text-center border-b border-solid border-b-gray-200 min-h-[72px] max-md:px-5"
        >
          <div
            data-layername="badge"
            className="flex items-start self-stretch my-auto bg-blend-multiply"
          >
            <div
              data-layername="badgeBase"
              className={`self-stretch px-2 py-0.5 rounded-2xl ${
                patient.status === "Customer"
                  ? "bg-emerald-50 text-emerald-700"
                  : "bg-gray-100 text-slate-700"
              }`}
            >
              {patient.status}
            </div>
          </div>
        </div>
      </div>
      <div data-layername="column" className="flex flex-col w-44">
        <div
          data-layername="tableCell"
          className="flex gap-3 px-6 py-4 w-full border-b border-solid border-b-gray-200 min-h-[72px] max-md:px-5"
        >
          <div
            data-layername="progressBar"
            className="flex flex-1 shrink gap-3 items-center basis-0 size-full"
          >
            <div
              data-layername="progressBar"
              className="flex flex-col flex-1 shrink self-stretch my-auto w-full rounded-lg basis-0"
            >
              <div
                data-layername="background"
                className="flex flex-col items-start bg-gray-100 rounded max-md:pr-5"
              >
                <div
                  data-layername="progress"
                  className="flex shrink-0 h-2 bg-blue-700 rounded"
                  style={{ width: `${patient.symptoms}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        data-layername="column"
        className="flex flex-col text-sm min-w-[240px] w-[301px]"
      >
        <div
          data-layername="tableCell"
          className="flex items-center px-6 py-4 w-full leading-none border-b border-solid border-b-gray-200 min-h-[72px] max-md:px-5"
        >
          <div className="flex flex-col self-stretch my-auto">
            <div data-layername="text" className="text-gray-900">
              {patient.about}
            </div>
            <div data-layername="supportingText" className="text-gray-500">
              {patient.description}
            </div>
          </div>
        </div>
      </div>
      <div
        data-layername="column"
        className="flex flex-col text-sm min-w-[240px] w-[301px]"
      >
        <div
          data-layername="tableCell"
          className="flex items-center px-6 py-4 w-full leading-none border-b border-solid border-b-gray-200 min-h-[72px] max-md:px-5"
        >
          <div className="flex flex-col self-stretch my-auto">
            <div data-layername="text" className="text-gray-900">
              {patient.about}
            </div>
            <div data-layername="supportingText" className="text-gray-500">
              {patient.description}
            </div>
          </div>
        </div>
      </div>
      <div
        data-layername="column"
        className="flex flex-col text-sm min-w-[240px] w-[301px]"
      >
        <div
          data-layername="tableCell"
          className="flex items-center px-6 py-4 w-full leading-none border-b border-solid border-b-gray-200 min-h-[72px] max-md:px-5"
        >
          <div className="flex flex-col self-stretch my-auto min-w-[240px]">
            <div data-layername="text" className="text-gray-900">
              {patient.about}
            </div>
            <div data-layername="supportingText" className="text-gray-500">
              {patient.description}
            </div>
          </div>
        </div>
      </div>
      <div data-layername="column" className="flex flex-col w-[116px]">
        <div
          data-layername="tableCell"
          className="flex gap-1 items-center p-4 w-full border-b border-solid border-b-gray-200 min-h-[72px]"
        >
          <button
            data-layername="button"
            className="flex items-start self-stretch my-auto w-10 rounded-lg"
          >
            <div
              data-layername="buttonBase"
              className="flex overflow-hidden gap-2 justify-center items-center p-2.5 w-10 rounded-lg"
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/fae4b338084f09a5ddf1b10acb53d5051ae912c232873ff27c5f8a95846d4c46?placeholderIfAbsent=true&apiKey=de20ebe5f7e54554b52c3c72396947ee"
                alt=""
                className="object-contain self-stretch my-auto w-5 aspect-square"
              />
            </div>
          </button>
          <button
            data-layername="button"
            className="flex items-start self-stretch my-auto w-10 rounded-lg"
          >
            <div
              data-layername="buttonBase"
              className="flex overflow-hidden gap-2 justify-center items-center p-2.5 w-10 rounded-lg"
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7be1fa303013e26404a764cf6044022228ecd50ea8d72f9f04b49c4fa237614e?placeholderIfAbsent=true&apiKey=de20ebe5f7e54554b52c3c72396947ee"
                alt=""
                className="object-contain self-stretch my-auto w-5 aspect-square"
              />
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default TableRow;
