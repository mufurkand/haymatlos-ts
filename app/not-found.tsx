import ErrorCode from "@/components/ErrorCode";

export default function notFound() {
  return <ErrorCode code="404" message="Sayfa bulunamadı." />;
}
