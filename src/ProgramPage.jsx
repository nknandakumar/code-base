import { useParams } from "react-router-dom";
import { useEffect } from "react";
import img from "./assets/img.png"
// Programs stored as key-value
const programs = {
  1: "console.log('Hello World!');",
  2: `#include <stdio.h>\nint main() {\n   printf("Hi");\n   return 0;\n}`,
  3: "print('Hello from Python!')",
};

export default function ProgramPage() {
  const { id } = useParams();

  useEffect(() => {
    const code = programs[id];
    if (code) {
      navigator.clipboard
        .writeText(code)
        .then(() => console.log("Copied to clipboard ✅"))
        .catch((err) => console.error("Failed to copy ❌", err));
    }
  }, [id]);

  return (
    <div >
        {programs[id] ? (
        <>
          <h1 className="true"></h1>
        </>
      ) : (
        <h1 className="false" ></h1>
      )}
        <img src={img} alt="" />
      
    </div>
  );
}
