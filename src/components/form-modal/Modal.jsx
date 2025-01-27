export default function Modal({ children, open, onClose, title }) {
  if (!open) {
    return <></>;
  }

  return (
    <div className="fixed w-full h-full top-0 left-0 flex items-center justify-center">
      <div className="w-40 bg-white p-4 z-10 rounded-lg min-w-60">
        <div className="flex items-center justify-between font-bold mb-3">
          <div>{title}</div>
          <div
            className="text-xl leading-none select-none cursor-pointer"
            onClick={onClose}
          >
            x
          </div>
        </div>
        {children}
      </div>

      <div
        onClick={() => {
          console.log("Bosildi");

          onClose();
        }}
        className="fixed bg-black opacity-50 w-full h-full "
      ></div>
    </div>
  );
}
