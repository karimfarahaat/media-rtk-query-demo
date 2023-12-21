import ExpandablePanel from "./ExpandablePanel";
import Button from "./Button";
import React from "react";
import { GoTrashcan } from "react-icons/go";
import { useRemoveAlbumMutation } from "../store";

function AlbumListItem({ album }) {
  const [removeAlbum, results] = useRemoveAlbumMutation();
  const handleRemoveAlbum = () => {
    removeAlbum(album);
  };
  const header = (
    <>
      <Button
        className="mr-2"
        loading={results.isLoading}
        onClick={handleRemoveAlbum}
      >
        <GoTrashcan />
      </Button>
      <h4>{album.title}</h4>
    </>
  );
  return (
    <ExpandablePanel header={header} key={album.id}>
      List of photos in the album
    </ExpandablePanel>
  );
}

export default AlbumListItem;
