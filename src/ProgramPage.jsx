import { useParams } from "react-router-dom";
import { useEffect } from "react";
import img from "./assets/img.png"
import programs from "./programs"


export default function ProgramPage() {
  const { id } = useParams();
  const program = programs.find((p) => String(p.id) === String(id));

  useEffect(() => {
    if (program && program.code) {
      navigator.clipboard
        .writeText(program.code)
        .then(() => console.log("Copied to clipboard ✅"))
        .catch((err) => console.error("Failed to copy ❌", err));
    }
  }, [id, program]);

  return (
    <div >
        {(program) ? (
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
