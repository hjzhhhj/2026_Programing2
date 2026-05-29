export default function TodoHeader({ isPlaying, toggleMusic }) {
  return (
    <div className="todo__header">
      <h1 className="todo__title">No Think, Do It.</h1>
      <button className="todo__music-btn" onClick={toggleMusic}>
        {isPlaying ? "⏸" : "🎵"}
      </button>
    </div>
  );
}
