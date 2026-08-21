import type { ReactNode } from "react";


interface modelProps{
    children: ReactNode;
    onClose: ()=> void;
}

const Model = ({children,onClose}:modelProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center text-2xl">
        <div className="bg-white p-4 rounded-lg shadow relative">
            <button
            onClick={onClose}
             className="absolute top-3 right-3 text-red-600 ">X</button>
            {children}
        </div>
        
    </div>
  )
}

export default Model