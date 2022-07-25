// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { collection, doc, getFirestore, setDoc } from "@firebase/firestore";
import type { NextApiRequest, NextApiResponse } from "next";
import { firebaseApp } from "../../util/firebaseApp";

type ShortenResponse = {
  id: string;
};

const firestore = getFirestore(firebaseApp);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ShortenResponse>
) {
  const url = req.body.url;
  const newCityRef = doc(collection(firestore, "urls"));
  await setDoc(newCityRef, { url });
  const id = newCityRef.id;
  res.status(200).json({ id });
}
