import { useQuery } from "@tanstack/react-query";
import React from "react";
import UseAxiosSecure from "./UseAxiosSecure";

const UseMessages = () => {
  const axiosSecure = UseAxiosSecure();
  const { data: messageData = [], refetch: refetchMessageData } = useQuery({
    queryKey: ["messages"],
    queryFn: async () => {
      const res = await axiosSecure("messages");
      return res.data;
    },
  });
  return { messageData, refetchMessageData };
};

export default UseMessages;
