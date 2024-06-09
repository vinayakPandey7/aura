// SomeClientComponent.tsx

"use client";

import { Provider } from "react-redux";
import store from "./redux/store";

export default function ClientComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={store}>{children}</Provider>;
}
