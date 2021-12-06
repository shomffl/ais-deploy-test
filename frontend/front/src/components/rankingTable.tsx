import React from "react";

export const RankingTable = () => {
  return (
    <>
      <p className="text-lg text-center font-bold m-5">
        Flat Color Table Design
      </p>
      <table className="rounded-t-lg m-5 w-5/6 mx-auto text-pink-100 bg-pink-700">
        <tr className="text-left border-b-2 border-pink-200 font-bold">
          <th className="px-4 py-3">Firstname</th>
          <th className="px-4 py-3">Lastname</th>
          <th className="px-4 py-3">Age</th>
          <th className="px-4 py-3">Sex</th>
        </tr>
        <tr className="bg-pink-600 font-semibold">
          <td className="px-4 py-3 border-b border-pink-500">Jill</td>
          <td className="px-4 py-3 border-b border-pink-500">Smith</td>
          <td className="px-4 py-3 border-b border-pink-500">50</td>
          <td className="px-4 py-3 border-b border-pink-500">Male</td>
        </tr>
        <tr className="bg-pink-600 font-semibold">
          <td className="px-4 py-3 border-b border-pink-500">Jill</td>
          <td className="px-4 py-3 border-b border-pink-500">Smith</td>
          <td className="px-4 py-3 border-b border-pink-500">50</td>
          <td className="px-4 py-3 border-b border-pink-500">Male</td>
        </tr>
        <tr className="bg-pink-600 font-semibold">
          <td className="px-4 py-3 border-b border-pink-500">Jill</td>
          <td className="px-4 py-3 border-b border-pink-500">Smith</td>
          <td className="px-4 py-3 border-b border-pink-500">50</td>
          <td className="px-4 py-3 border-b border-pink-500">Male</td>
        </tr>
      </table>
    </>
  );
};
