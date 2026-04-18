import { useState } from "react";

const Study = () => {
  const [file, setFile] = useState("");

  const materials = [
    {
      name: "Genral Aptitude Notes",
      preview: "https://drive.google.com/file/d/1tk26RYGNCoCRpfXmbGfreqqYJcnjAlbO/preview",
      view: "https://drive.google.com/file/d/1tk26RYGNCoCRpfXmbGfreqqYJcnjAlbO/view"
    },
    {
      name: "pyq Notes",
      preview: "https://drive.google.com/drive/folders/1NbHjEUgSQPXuiQzWvv4GOBK3ZcRWD_Iy",
      view: "https://drive.google.com/drive/folders/1NbHjEUgSQPXuiQzWvv4GOBK3ZcRWD_Iy"
    },
     {
      name: "DBMS Notes",
      preview: "https://drive.google.com/file/d/REPLACE_OS_ID/preview",
      view: "https://drive.google.com/file/d/REPLACE_OS_ID/view"
    },
     {
      name: "CN Notes",
      preview: "https://drive.google.com/file/d/REPLACE_OS_ID/preview",
      view: "https://drive.google.com/file/d/REPLACE_OS_ID/view"
    },
  ];

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Study Material</h1>

      {/* LIST */}
      <ul className="space-y-4 mb-6">
        {materials.map((item, index) => (
          <li key={index} className="flex gap-4 items-center">
            
            {/* View inside page */}
            <button
              onClick={() => setFile(item.preview)}
              className="text-blue-600 underline"
            >
              {item.name}
            </button>

            {/* Open in new tab */}
            <a
              href={item.view}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 underline"
            >
              Open
            </a>

          </li>
        ))}
      </ul>

      {/* PDF Preview */}
      {file && (
        <iframe
          src={file}
          width="100%"
          height="600px"
          title="PDF Viewer"
          className="border rounded"
        ></iframe>
      )}
    </div>
  );
};

export default Study;