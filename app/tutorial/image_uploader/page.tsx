// app/image_upload/page.tsx
'use client';

import { useState } from 'react';

export default function ImageUploadPage() {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      setSelectedFiles(Array.from(files)); // FileList → 配列に変換
    }
  };

  return (
    <div>
      <h1>画像アップロード</h1>
      <input
        type="file"
        multiple
        accept="image/*"
        onChange={handleFileChange}
      />

      <h2>選択されたファイル：</h2>
      <ul>
        {selectedFiles.map((file, index) => (
          <li key={index}>{file.name}</li>
        ))}
      </ul>
    </div>
  );
}
