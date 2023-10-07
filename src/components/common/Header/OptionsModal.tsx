import { useRef, forwardRef, useImperativeHandle } from "react";

import Link from "next/link";

// styles
import styles from "./Header.module.css";

interface Props {
  media_type: string;
  hideModal: () => void;
}

type Ref = HTMLDivElement;

export default forwardRef<Ref, Props>(function OptionsModal(
  props,
  ref
): JSX.Element {
  const modalRef = useRef<HTMLDivElement>(null);
  useImperativeHandle(ref, () => modalRef.current as HTMLDivElement);

  return (
    <div ref={modalRef} className={styles.modal}>
      <Link
        href={`/pages/${props.media_type}/popular/1`}
        onClick={props.hideModal}
      >
        Popular
      </Link>
      <Link
        href={`/pages/${props.media_type}/now_playing/1`}
        onClick={props.hideModal}
      >
        {props.media_type === "movie" ? "Now Playing" : "On The Air"}
      </Link>
      <Link
        href={`/pages/${props.media_type}/upcoming/1`}
        onClick={props.hideModal}
      >
        {props.media_type === "movie" ? "Upcoming" : "Airing Today"}
      </Link>
      <Link
        href={`/pages/${props.media_type}/top_rated/1`}
        onClick={props.hideModal}
      >
        Top Rated
      </Link>
    </div>
  );
});
