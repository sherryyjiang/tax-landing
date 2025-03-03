export function GradientBackground() {
  return (
    <>
      <div className="fixed inset-0 bg-black z-0" />
      <div className="fixed inset-0 z-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/20 via-purple-500/10 to-pink-500/5" />
      </div>
      <div className="fixed inset-0 z-0">
        <div className="absolute -top-[40vh] -left-[10vw] h-[80vh] w-[80vh] rounded-full bg-purple-600/10 blur-[100px]" />
        <div className="absolute -bottom-[30vh] -right-[20vw] h-[80vh] w-[80vh] rounded-full bg-blue-600/10 blur-[100px]" />
      </div>
    </>
  );
} 