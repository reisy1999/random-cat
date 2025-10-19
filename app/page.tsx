import { connection } from "next/server";
import { CatImage } from "./cat-image";
import { fetchImage } from "./fetch-image";

export default async function Home() {
  await connection(); //　これでリロードのたびにapiを呼び出せる
  const image = await fetchImage();
  // 画像のURLを渡す
  return <CatImage url={image.url} />;
}