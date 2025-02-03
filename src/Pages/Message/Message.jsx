import React from "react";
import Title from "../../Component/Title";
import UseMessages from "../../Hooks/UseMessages";
import MessageCard from "./MessageCard";

const Message = () => {
  const { messageData, refetchMessageData } = UseMessages();
  console.log(messageData);

  return (
    <div className="pt-[120px] w-11/12 md:w-10/12 mx-auto">
      <header>
        <Title
          title={"Message From Client"}
          subTitle={"Message From Valuable Clients"}
        ></Title>
      </header>
      <section className="w-full">
        {messageData.map((message, index) => (
          <MessageCard key={message._id} singleMessage={message} index={index} refetchMessageData={refetchMessageData}></MessageCard>
        ))}
      </section>
    </div>
  );
};

export default Message;
