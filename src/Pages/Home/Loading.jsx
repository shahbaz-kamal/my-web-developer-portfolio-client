const Loading = () => {
    return (
      <div className="flex items-center justify-center h-screen bg-light-background dark:bg-dark-background">
        <div className="relative w-16 h-16">
          {/* Outer ring */}
          <div className="absolute inset-0 border-4 border-light-primary dark:border-dark-primary-70 border-opacity-20 rounded-full"></div>
  
          {/* Rotating inner ring */}
          <div className="absolute inset-0 border-4 border-t-light-accent dark:border-t-dark-accent border-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    );
  };
  
  export default Loading;
  