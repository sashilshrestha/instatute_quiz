export default function ProgressBar() {
  return (
    <>
      <div className="h-2 w-full rounded-full bg-gray-200">
        <div
          className="h-full rounded-full bg-primary transition-all duration-500"
          style={{
            width: '75%',
          }}
        />
      </div>
    </>
  );
}
