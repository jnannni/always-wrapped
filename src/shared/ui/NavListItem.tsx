import Link from "next/link";

export default function NavListItem(props: { path: string; name: string }) {
  return (
    <li className="flex justify-center block py-[8px] border-b border-black w-full lowercase md:border-none md:pl-[20px]">
      <Link href={props.path}>{props.name}</Link>
    </li>
  );
}
