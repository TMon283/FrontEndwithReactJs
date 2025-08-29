import React, { useEffect, useState } from "react";

export default function KeyTracker() {
  const [lastKey, setLastKey] = useState<string>("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setLastKey(e.key);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
        {"phím bạn vừa nhấn là: "}
      {lastKey ? lastKey : "Nhấn phím bất kỳ..."}
    </div>
  );
}