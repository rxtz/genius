export default function Video({ v }: { v: string }) {
  return (
    v && (
      <iframe
        src={`https://www.youtube.com/embed/${v}`}
        className="w-full h-min aspect-video outline-none"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    )
  );
}
