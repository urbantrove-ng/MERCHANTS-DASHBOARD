import React from "react";

function Image() {
  return (
    <div className="grid grid-cols-2 gap-4 mb-4">
      {files.map((file, index) => (
        <div key={index} className="flex flex-col items-center">
          <input
            type="file"
            id="file-upload"
            className="absolute inset-0 opacity-0 cursor-pointer"
            accept="image/*"
            onChange={(e) => handleFileChange(index, e)}
          />
        </div>
      ))}
    </div>
  );
}

export default Image;
