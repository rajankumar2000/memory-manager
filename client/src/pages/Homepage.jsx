import React, { useContext, useEffect, useState } from "react";
import Images from "../components/image/Images";
import MemoryContext from "../context/MemoryContext";
import { UserContext } from "../context/UserContext";
import Cards from "../components/Cards";
import { toast } from "react-toastify";

const Homepage = () => {
  const { memories, getMemories } = useContext(MemoryContext);
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user) {
      let memoryData = getMemories();
      toast.promise(memoryData, {
        pending: "Getting your memories",
        success: "Fetched your memories",
        error: "Sorry unable to fetch!",
      });
    }
  }, []);

  return (
    <div
      className="p-3"
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: "5px",
        justifyContent: "space-evenly",
      }}
    >
      {user ? (
        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            alignItems: "top",
            flexWrap: "wrap",
            marginTop: "60px",
          }}
        >
          {memories && memories.length > 0
            ? memories.map((item) => (
                <Cards
                  key={item._id}
                  title={item.title}
                  story={item.story}
                  mood={item.mood}
                  memoryId={item._id}
                />
              ))
            : "No Memories"}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Homepage;
