import { PropsWithChildren } from "react";
import { mainFont } from "~/app/fonts";
import "~/styles/index.scss";

export const metadata = {
  title: "Interactive rating component - Frontend Mentor - Tuan Nguyen",
  description: "Interactive rating component - Frontend Mentor - Tuan Nguyen",
};

type Props = PropsWithChildren;

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={mainFont.className}>{children}</body>
    </html>
  );
}
