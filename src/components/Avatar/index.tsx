"use client";

import React from "react";
import { PersonFill } from "@styled-icons/bootstrap/PersonFill";
import { FileDrop } from "react-file-drop";
import { PulseLoader } from "react-spinners";
import { useState } from "react";
import * as S from "./styles";

export type AvatarProps = {
  size?: "small" | "medium" | "large";
};

const Avatar = ({ size }: AvatarProps) => {
  const [isFileNearby, setIsFileNearby] = useState(false);
  const [isFileOver, setIsFileOver] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const sizePulseLoader =
    size === "small" ? 10 : size === "medium" ? 14 : size === "large" ? 20 : "";

  function updateImage() {
    setIsUploading(true);
  }

  return (
    <FileDrop
      onDrop={updateImage}
      onDragOver={() => setIsFileOver(true)}
      onDragLeave={() => setIsFileOver(false)}
      onFrameDragEnter={() => setIsFileNearby(true)}
      onFrameDragLeave={() => setIsFileNearby(false)}
      onFrameDrop={() => {
        setIsFileNearby(false);
        setIsFileOver(false);
      }}
    >
      <S.Container>
        <S.ExtraItem isFileNearby={isFileNearby} isFileOver={isFileOver} />
        {isUploading && (
          <S.ContainerUpload
            style={{ backgroundColor: "rgba(48, 140, 216, 0.9)" }}
          >
            <PulseLoader size={sizePulseLoader} color="#fff" />
          </S.ContainerUpload>
        )}
        <S.ContainerIcon size={size}>
          <PersonFill />
        </S.ContainerIcon>
      </S.Container>
    </FileDrop>
  );
};

export default Avatar;
