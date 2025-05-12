'use client';

import { useRef } from 'react';

// 画像選択のボタンを作成
const ImageSelectCard = () => {

    const filePickerRef = useRef<HTMLInputElement>(null);

    // 画像アップロードボタンを押したときの挙動を記載
    const handleClick = () => {
        filePickerRef.current?.click();
    };

    return (
        <div
            onClick={handleClick}
            className="w-80 h-40 border-2 border-gray-400 rounded-md flex items-center justify-center bg-white shadow hover:bg-gray-50"
        >
            <p className="text-xl font-semibold">画像を選択</p>
        <input
            type="file"
            multiple
            accept=".png, .jpeg, .jpg "
            ref={filePickerRef}
            onChange={(e) => {
                const files = e.target.files;
                    if (files) {
                        console.log("選択されたファイル:", Array.from(files));
                    }
            }}
            hidden
          />
        </div>
    )
};

export default ImageSelectCard;