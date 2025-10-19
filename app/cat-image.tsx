"use client";

import {useState } from "react";
import { fetchImage } from "./fetch-image";

//　コンポーネントの引数を定義する
type CatImageProps = {
    url: string;
};

// 画像を表示するコンポーネント
export function CatImage({ url }: CatImageProps) {
    const [ imageUrl, setImageUrl] = useState(url);

    const refreshImage = async () => {
        setImageUrl("");
        const image = await fetchImage();
        setImageUrl(image.url);
    };

    return (
        <div>
            {}
            <button onClick={refreshImage}>他の猫もみる</button>
            {}
            {imageUrl && <img src={imageUrl} />} 
        </div>
    );
}