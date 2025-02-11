import { useState, useEffect } from "react";

export default function Sekundomer() {
  const [date, set] = useState(new Date());

  useEffect(() => {
    const a = setInterval(() => {
      set(new Date());
    }, 1000);

    return () => {
      clearInterval(a);
    };
  }, []);

  return (
    <div>
      {date.getMinutes() - 20}:{date.getSeconds().toString().padStart(2, "0")}
    </div>
  );
}
