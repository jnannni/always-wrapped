"use client";
import useUIStoreContext from "@/shared/state/useUIStoreContext";
export default function ProfileDataWrapper(props: {
  children: React.ReactNode;
}) {
  const { items, pending, fetched } = useUIStoreContext();

  if (!fetched || !items || pending) {
    return <div>Loading...</div>;
  }

  return <div>{props.children}</div>;
}
