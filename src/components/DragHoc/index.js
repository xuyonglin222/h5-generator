import React from "react";
import { useDrag } from "react-dnd";

export default function DragHoc({ name, h, children }) {
  const [{ opacity }, drag] = useDrag({
    item: { name, type: "box", h },
    collect: monitor => ({ opacity: monitor.isDragging ? 1 : 0.4 })
  });
  return (
    <div ref={drag} style={{ opacity, marginBottom: 16 }}>
      {children}
    </div>
  );
}
