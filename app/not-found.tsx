import ErrorCode from "@/components/ErrorCode";
import React from "react";

export default function notFound() {
  return <ErrorCode code="404" message="Sayfa bulunamadı." />;
}
