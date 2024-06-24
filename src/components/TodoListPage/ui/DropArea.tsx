import { useState } from 'react';

type propsType = {
  onDrop: () => void;
};

const DropArea = ({ onDrop }: propsType) => {
  const [showDrop, setShowDrop] = useState(false);
  // console.log(showDrop);
  const handleDrop = () => {
    onDrop();
    setShowDrop(false);
  };

  return (
    <section
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      // className="border border-red-700"
    >
      <div onDragEnter={() => setShowDrop(true)} className="h-1"></div>
      <section
        onDragEnter={() => setShowDrop(true)}
        onDragLeave={() => setShowDrop(false)}
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        className={`w-full min-h-24 p-3 border border-gray-700 border-dashed rounded transition-all duration-300 opacity-20 ${
          !showDrop && 'hidden opacity-0'
        }`}
      >
        Drop Here
      </section>
    </section>
  );
};

export default DropArea;
